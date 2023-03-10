import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import {
  ResponsiveAttachmentContract,
  responsiveAttachment,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string
  @column()
  public lastName: string
  @column()
  public phone: string
  @column()
  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['firstName', 'lastName'],
  })
  @responsiveAttachment({ folder: 'cover-images' })
  public coverImage: ResponsiveAttachmentContract
  @responsiveAttachment({ folder: 'profile-images' })
  public profileImage: ResponsiveAttachmentContract

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
