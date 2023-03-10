import { ResponsiveAttachment } from '@ioc:Adonis/Addons/ResponsiveAttachment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { BaseLoginValidator, UserSignupValidation } from 'App/Validators/AuthValidator'

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
    await request.validate(UserSignupValidation)

    try {
      await User.create(
        request.only(['firstName', 'lastName', 'email', 'phone', 'password', 'gender'])
      )

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
  public async forgotPassword({}: HttpContextContract) {}

  // Forgot Password view
  public async forgotPasswordView({ inertia }: HttpContextContract) {
    return inertia.render('Auth/ForgotPassword')
  }

  // Reset Password
  public async resetPassword({}: HttpContextContract) {}

  // Reset Password view
  public async resetPasswordView({ inertia }: HttpContextContract) {
    return inertia.render('Auth/ResetPassword')
  }
}
