/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia'

Inertia.share({
  errors: (ctx) => ctx.session.flashMessages.get('errors') || {},
  info: (ctx) => ctx.session.flashMessages.get('info') || {},
  message: (ctx) => ctx.session.flashMessages.get('message') || '',
  params: (ctx) => ctx.params,
  query: (ctx) => ctx.request.qs(),
  isAuthenticated: (ctx) => ctx.auth.isAuthenticated,
  defaultGuard: (ctx) => ctx.auth.defaultGuard,
  user: (ctx) => ctx.auth.user || null,
}).version(() => Inertia.manifestFile('public/assets/manifest.json'))
