import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/about', async ({ inertia }) => {
  return inertia.render('About')
})

Route.group(() => {
  Route.get('/', async ({ inertia }) => {
    return inertia.render('Admin/Dashboard')
  })
  Route.get('/login', async ({ inertia }) => {
    return inertia.render('Admin/Login')
  })
}).prefix('/admin')
