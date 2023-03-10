import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/v1', async () => {
  return { message: 'Welcome to the API version 1' }
})
