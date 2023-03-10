import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/about', async ({ inertia }) => {
  return inertia.render('About')
})
