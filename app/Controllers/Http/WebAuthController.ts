import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class WebAuthsController {
  public async adminLogin({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Login')
  }

  public async adminLoginPost({ response, request, auth, inertia, session }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string({ trim: true }, [rules.minLength(6), rules.regex(/[a-zA-Z]+[0-9]+/)]),
    })
    const payload = await request.validate({
      schema: loginSchema,
      messages: {
        'email.required': 'Email is required',
        'email.email': 'Email is not valid',
        'password.required': 'Password is required',
        'password.minLength': 'Password must be at least 6 characters',
        'password.regex': 'Password must contain at least one letter and one number',
      },
    })

    try {
      await auth.use('admin').attempt(payload.email, payload.password)
      return response.redirect('/admin')
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
