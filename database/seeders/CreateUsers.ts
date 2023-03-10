import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Create array of users with their data
    const users = [
      {
        firstName: 'Hasibur',
        lastName: 'Rahman',
        email: 'hasib@test.com',
        password: '123456',
        phone: '01580919000',
      },
      {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: '123456',
      },
    ]

    await User.updateOrCreateMany('email', users)
  }
}
