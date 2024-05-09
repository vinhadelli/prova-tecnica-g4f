/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const NoticiasController = () => import('#controllers/noticias_controller')

router.resource('noticia', NoticiasController).apiOnly()
