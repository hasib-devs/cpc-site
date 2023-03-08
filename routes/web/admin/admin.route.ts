import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async ({ inertia }) => {
    return inertia.render('Admin/Dashboard')
  })
  Route.get('/login', async ({ inertia }) => {
    return inertia.render('Admin/Login')
  })
  Route.post('/login', async ({ response }) => {
    return response.redirect('/admin')
  })
}).prefix('/admin')
