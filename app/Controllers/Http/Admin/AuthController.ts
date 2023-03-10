import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseLoginValidator } from 'App/Validators/AuthValidator'

export default class AuthController {
  // Admin login Show
  public async loginView({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('admin').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect().toRoute('admin.dashboard')
    }
    return inertia.render('Admin/Login')
  }

  // Admin Login Post
  public async login({ response, request, auth, inertia, session }: HttpContextContract) {
    const payload = await request.validate(BaseLoginValidator)

    try {
      await auth.use('admin').attempt(payload.email, payload.password, !!payload.remember)
      return response.redirect().toRoute('admin.dashboard')
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

  // Admin Logout
  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('admin').logout()
    return response.redirect().toRoute('admin.login')
  }

  // Reset Password
  public async resetPassword({}: HttpContextContract) {}

  // Reset Password view
  public async resetPasswordView({ inertia }: HttpContextContract) {
    return inertia.render('Admin/ResetPassword')
  }
}
