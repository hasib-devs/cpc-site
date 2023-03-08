import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async ({ inertia }) => {
    return inertia.render('Admin/Dashboard')
  })
  // Login
  Route.get('/login', 'WebAuthController.adminLogin')
  Route.post('/login', 'WebAuthController.adminLoginPost')
}).prefix('/admin')
