/**
 * Config source: https://git.io/JY0mp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { AuthConfig } from '@ioc:Adonis/Addons/Auth'

/*
|--------------------------------------------------------------------------
| Authentication Mapping
|--------------------------------------------------------------------------
|
| List of available authentication mapping. You must first define them
| inside the `contracts/auth.ts` file before mentioning them here.
|
*/
const authConfig: AuthConfig = {
  guard: 'user',
  guards: {
    /*
    |--------------------------------------------------------------------------
    | Web Guard
    |--------------------------------------------------------------------------
    |
    | Web guard uses classic old school sessions for authenticating users.
    | If you are building a standard web application, it is recommended to
    | use web guard with session driver
    |
    */
    user: {
      driver: 'session',

      provider: {
        driver: 'lucid',
        identifierKey: 'id',

        uids: ['email'],
        model: () => import('App/Models/User'),
      },
    },

    admin: {
      driver: 'session',

      provider: {
        driver: 'lucid',
        identifierKey: 'id',

        uids: ['email'],
        model: () => import('App/Models/Admin'),
      },
    },
    /*
    |--------------------------------------------------------------------------
    | OAT Guard
    |--------------------------------------------------------------------------
    |
    | OAT (Opaque access tokens) guard uses database backed tokens to authenticate
    | HTTP request. This guard DOES NOT rely on sessions or cookies and uses
    | Authorization header value for authentication.
    |
    | Use this guard to authenticate mobile apps or web clients that cannot rely
    | on cookies/sessions.
    |
    */
    userApi: {
      driver: 'oat',

      /*
      |--------------------------------------------------------------------------
      | Tokens provider
      |--------------------------------------------------------------------------
      |
      | Uses SQL database for managing tokens. Use the "database" driver, when
      | tokens are the secondary mode of authentication.
      | For example: The Github personal tokens
      |
      | The foreignKey column is used to make the relationship between the user
      | and the token. You are free to use any column name here.
      |
      */
      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'user_id',
      },

      provider: {
        driver: 'lucid',
        identifierKey: 'id',

        uids: ['email'],
        model: () => import('App/Models/User'),
      },
    },
  },
}

export default authConfig
