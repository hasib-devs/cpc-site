import { bind } from '@adonisjs/route-model-binding'
import Mail from '@ioc:Adonis/Addons/Mail'
import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { BaseLoginValidator, UserSignupValidation } from 'App/Validators/AuthValidator'
import Token from 'App/Models/Token'
import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

export default class WebAuthsController {
  // User Login Show
  public async loginView({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('user').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect('/')
    }
    return inertia.render('Auth/Login')
  }

  // User Login Post
  public async login({ response, request, auth, inertia, session }: HttpContextContract) {
    const payload = await request.validate(BaseLoginValidator)

    const user = await User.findBy('email', payload.email)
    if (!user?.emailVerified) {
      session.flash('info', {
        verifyEmailRequired: 'Please verify your email address',
      })

      return inertia.redirectBack()
    }

    try {
      await auth.use('user').attempt(payload.email, payload.password, !!payload.remember)
      return response.redirect('/')
    } catch (error) {
      if (error.responseText.includes('E_INVALID_AUTH_UID')) {
        session.flash('errors', { email: ['Email not found'] })
        return inertia.redirectBack()
      }
      if (error.responseText.includes('E_INVALID_AUTH_PASSWORD')) {
        session.flash('errors', { password: ['Password is Wrong'] })
        return inertia.redirectBack()
      }

      session.flash('errors', { invalid: ['Something went wrong'] })
      return inertia.redirectBack()
    }
  }

  // User Logout
  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('user').logout()
    return response.redirect().toRoute('user.loginView')
  }

  // User Register Show
  public async signupView({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('user').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect().toRoute('/')
    }
    return inertia.render('Auth/Signup')
  }

  // User Register
  public async signup({ response, request, inertia, session }: HttpContextContract) {
    const payload = await request.validate(UserSignupValidation)

    if (!payload.acceptTerms) {
      session.flash('errors', { acceptTerms: ['You must accept the terms and conditions'] })
      return inertia.redirectBack()
    }

    try {
      const user = await User.create(
        request.only(['firstName', 'lastName', 'email', 'phone', 'password', 'gender'])
      )

      await Mail.sendLater(async (message) => {
        message
          .from('info@cpc.com')
          .to(user.email)
          .subject('Email Verification')
          .htmlView('emails/email-vefify', {
            user: user,
            url: `http://localhost:3333/verify-email/${user.id}?token=${await Hash.make(
              user.username
            )}`,
          })
      })

      session.flash('info', {
        verifyEmailMessage: 'Please verify your email address',
      })
      return response.redirect().toRoute('user.loginView')
    } catch (error) {
      session.flash('errors', { invalid: ['Something went wrong'], error: error.message })
      return inertia.redirectBack()
    }
  }

  // Forgot Password
  public async forgotPassword({ inertia, request, session }: HttpContextContract) {
    const { email } = await request.validate({
      schema: schema.create({
        email: schema.string({}, [rules.email()]),
      }),
    })

    const user = await User.findBy('email', email)
    const token = await Token.generatePasswordResetToken(user)

    const resetLink = Route.makeUrl('user.resetPasswordView', [token])

    if (user) {
      await Mail.sendLater(async (message) => {
        message
          .from('info@cpc.com')
          .to(user.email)
          .subject('Password Reset')
          .htmlView('emails/password-reset', {
            user: user,
            url: `${Env.get('APP_DOMAIN')}${resetLink}`,
          })
      })
    }

    session.flash(
      'message',
      'If an account matches the email address you entered, we will send you an email with a link to reset your password shortly.'
    )

    return inertia.redirectBack()
  }

  // Forgot Password view
  public async forgotPasswordView({ inertia }: HttpContextContract) {
    return inertia.render('Auth/ForgotPassword')
  }

  // Reset Password
  public async resetPassword({ request, session, inertia, response }: HttpContextContract) {
    const { token, password } = await request.validate({
      schema: schema.create({
        token: schema.string(),
        password: schema.string({}, [rules.minLength(6)]),
      }),
    })

    const user = await Token.getPasswordResetUser(token)

    if (!user) {
      session.flash('info', {
        message: 'Token expired or associated user not found',
      })

      return inertia.redirectBack()
    }

    await user.merge({ password }).save()

    return response.redirect().toRoute('user.loginView')
  }

  // Reset Password view
  public async resetPasswordView({ inertia, params }: HttpContextContract) {
    const token = params.token
    const isValid = await Token.verify(token)

    return inertia.render('Auth/ResetPassword', { isValid, token })
  }

  // Verify Email
  @bind()
  public async verifyEmail({ response, request }: HttpContextContract, user: User) {
    const token = request.input('token')
    console.log({ token, username: user.username })

    const verified = await Hash.verify(token, user.username)
    if (verified) {
      user.emailVerified = true
      await user.save()

      return response.redirect('/')
    }

    return response.badRequest('Invalid Token')
  }
}
