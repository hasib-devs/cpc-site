import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export class BaseLoginValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({ trim: true }),
    remember: schema.boolean.optional(),
  })

  public messages: CustomMessages = { ...this.messages }
}

export class UserSignupValidation extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public genderValues = ['male', 'female', 'other']
  public nameRules = rules.regex(/^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/)

  public schema = schema.create({
    firstName: schema.string({ trim: true }, [this.nameRules]),
    lastName: schema.string({ trim: true }, [this.nameRules]),
    acceptTerms: schema.boolean([rules.required()]),
    gender: schema.enum(this.genderValues),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [rules.minLength(6)]),
    confirmPassword: schema.string({ trim: true }, [rules.confirmed('password')]),
    phone: schema.string.optional({ trim: true }),
    coverImage: schema.file.optional({
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
    profileImage: schema.file.optional({
      size: '5mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
  })

  public messages: CustomMessages = { ...this.messages }
}
