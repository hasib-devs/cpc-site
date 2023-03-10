import Route from '@ioc:Adonis/Core/Route'

Route.get('/api', async () => {
  return { message: 'Welcome to the API' }
})
