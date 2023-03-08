import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Login
  Route.get('/login', 'WebAuthController.adminLogin').as('admin.login')
  Route.post('/login', 'WebAuthController.adminLoginPost').as('admin.loginPost')

  // Authenticated Only Routes
  Route.group(() => {
    Route.get('/', async ({ inertia }) => {
      return inertia.render('Admin/Dashboard')
    }).as('admin.dashboard')
    Route.post('/logout', 'WebAuthController.adminLogout').as('admin.logout')
  }).middleware('auth:admin')
}).prefix('/admin')
