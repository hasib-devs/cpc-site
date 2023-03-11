import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import {
  ResponsiveAttachmentContract,
  responsiveAttachment,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import Token from './Token'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public gender: string

  @column()
  public phone: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['firstName', 'lastName'],
  })
  public username: string

  @column()
  public emailVerified: boolean = false

  @column()
  public phoneVerified: boolean = false

  @responsiveAttachment({ folder: 'cover-images' })
  public coverImage: ResponsiveAttachmentContract | null = null

  @responsiveAttachment({ folder: 'profile-images' })
  public profileImage: ResponsiveAttachmentContract | null = null

  @column()
  public rememberMeToken: string | null = null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Token)
  public tokens: HasMany<typeof Token>

  @hasMany(() => Token, {
    onQuery: (query) => query.where('type', 'password_reset'),
  })
  public passwordResetTokens: HasMany<typeof Token>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
