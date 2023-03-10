import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Login
  Route.get('login', 'AuthController.loginView').as('admin.login')
  Route.post('login', 'AuthController.login').as('admin.loginPost')

  // Authenticated Only Routes
  Route.group(() => {
    Route.get('/', async ({ inertia }) => {
      return inertia.render('Admin/Dashboard')
    }).as('admin.dashboard')
    Route.post('/logout', 'AuthController.logout').as('admin.logout')
  }).middleware('auth:admin')
})
  .namespace('App/Controllers/Http/Admin')
  .prefix('/admin')
