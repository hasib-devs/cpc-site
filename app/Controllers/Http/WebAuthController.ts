import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BaseLoginValidator } from 'App/Validators/AuthValidator'

export default class WebAuthsController {
  // Admin login Show
  public async adminLogin({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('admin').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect().toRoute('admin.dashboard')
    }
    return inertia.render('Admin/Login')
  }

  // Admin Login Post
  public async adminLoginPost({ response, request, auth, inertia, session }: HttpContextContract) {
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
  public async adminLogout({ auth, response }: HttpContextContract) {
    await auth.use('admin').logout()
    return response.redirect().toRoute('admin.login')
  }

  // User Login Show
  public async userLogin({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('user').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect('/')
    }
    return inertia.render('Auth/Login')
  }

  // User Login Post
  public async userLoginPost({ response, request, auth, inertia, session }: HttpContextContract) {
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
  public async userLogout({ auth, response }: HttpContextContract) {
    await auth.use('user').logout()
    return response.redirect().toRoute('user.login')
  }

  // User Register Show
  public async userSignup({ inertia, response, auth, session }: HttpContextContract) {
    if (await auth.use('user').check()) {
      session.flash('message', 'You are already logged in')
      return response.redirect().toRoute('user.dashboard')
    }
    return inertia.render('Auth/Signup')
  }

  // User Register Post
  public async userRegisterPost({
    response,
    request,
    auth,
    inertia,
    session,
  }: HttpContextContract) {
    const payload = await request.validate(BaseLoginValidator)

    try {
      await auth.use('user').attempt(payload.email, payload.password, !!payload.remember)
      return response.redirect().toRoute('user.dashboard')
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
}
