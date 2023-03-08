import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})
Route.get('/about', async ({ inertia }) => {
  return inertia.render('About')
})

Route.get('/login', 'WebAuthController.userLogin').as('user.login')
Route.get('/signup', 'WebAuthController.userSignup').as('user.signup')

Route.post('/login', 'WebAuthController.userLoginPost').as('user.login.post')
