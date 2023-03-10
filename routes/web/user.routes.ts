import Route from '@ioc:Adonis/Core/Route'

// User Namespace Routes (Web)
Route.group(() => {
  // Login
  Route.post('login', 'AuthController.login').as('user.login')
  Route.get('login', 'AuthController.loginView').as('user.loginView')

  // Signup
  Route.post('signup', 'AuthController.signup').as('user.signup')
  Route.get('signup', 'AuthController.signupView').as('user.signupView')

  // Forgot Password
  Route.post('forgot-password', 'AuthController.forgotPassword').as('user.forgotPassword')
  Route.get('forgot-password', 'AuthController.forgotPasswordView').as('user.forgotPasswordView')

  // Reset Password
  Route.post('reset-password', 'AuthController.resetPassword').as('user.resetPassword')
  Route.get('reset-password', 'AuthController.resetPasswordView').as('user.resetPasswordView')

  // Logout
  Route.post('logout', 'AuthController.logout').as('user.logout')

  // Authenticated Only Routes
  Route.group(() => {}).middleware('auth:user')
}).namespace('App/Controllers/Http/User')
