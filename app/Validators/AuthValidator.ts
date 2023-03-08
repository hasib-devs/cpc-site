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
