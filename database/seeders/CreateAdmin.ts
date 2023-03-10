import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class extends BaseSeeder {
  public async run() {
    const email = 'admin@test.com'
    const firstName = 'Super'
    const lastName = 'Admin'

    await Admin.updateOrCreate(
      { email },
      {
        firstName,
        lastName,
        email,
        password: 'Admin123456',
      }
    )
  }
}
