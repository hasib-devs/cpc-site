import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { string } from '@ioc:Adonis/Core/Helpers'
import User from './User'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number | null

  @column()
  public type: string

  @column()
  public token: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public expiresAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static async generate(user: User | null, type: string) {
    const token = string.generateRandom(64)
    if (!user) {
      return token
    }

    await Token.expirePasswordResetToken(user)
    const record = await user.related('tokens').create({
      type,
      token,
      expiresAt: DateTime.now().plus({ hours: 1 }),
    })

    return record.token
  }

  public static async expirePasswordResetToken(user: User) {
    await user.related('passwordResetTokens').query().update({ expiresAt: DateTime.now() })
  }

  public static async getUser(token: string, type: string) {
    const record = await Token.query()
      .preload('user')
      .where('token', token)
      .where('type', type)
      .where('expires_at', '>', DateTime.now().toSQL())
      .orderBy('expires_at', 'desc')
      .first()

    return record?.user
  }

  public static async verify(token: string) {
    const record = await Token.query()
      .where('expires_at', '>', DateTime.now().toSQL())
      .where('token', token)
      .first()

    return !!record
  }
}
