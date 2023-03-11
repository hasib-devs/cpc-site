import { CustomMessages } from '@ioc:Adonis/Core/Validator'

import { string } from '@ioc:Adonis/Core/Helpers'

export default class BaseValidator {
  public messages: CustomMessages = {
    '*': (field: string, rule: string) => {
      const f = string.capitalCase(field)

      if (rule === 'required') return `${f} is Required`
      if (rule === 'string') return `${f} must be a String`
      if (rule === 'number') return `${f} must be a Number`
      if (rule === 'boolean') return `${f} must be a Boolean`
      if (rule === 'date') return `${f} must be a Date`
      if (rule === 'array') return `${f} must be an Array`
      if (rule === 'object') return `${f} must be an Object`
      if (rule === 'email') return `${f} must be a Valid Email`
      if (rule === 'url') return `${f} must be a Valid URL`
      if (rule === 'regex') return `${f} is Invalid`
      if (rule === 'ip') return `${f} must be a Valid IP Address`
      if (rule === 'macAddress') return `${f} must be a Valid MAC Address`
      if (rule === 'uuid') return `${f} must be a Valid UUID`
      if (rule === 'json') return `${f} must be a Valid JSON String`

      if (rule === 'unique') return `${f} already exists`

      if (rule === 'min') return `${f} must be at least ${field} characters`
      if (rule === 'max') return `${f} must be at most ${field} characters`

      if (rule === 'minLength') return `${f} must be at least ${field} characters`
      if (rule === 'maxLength') return `${f} must be at most ${field} characters`

      return `${rule} Validation Fail!`
    },
  }
}
