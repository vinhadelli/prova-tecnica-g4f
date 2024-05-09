import Noticia from '#models/noticia'
import type { HttpContext } from '@adonisjs/core/http'

export default class NoticiasController {
  async index({}: HttpContext) {
    return await Noticia.all()
  }
  async store({ request, response }: HttpContext) {
    const noticia: Noticia = await Noticia.create(request.all())
    if (noticia.id) return 'Notícia criada com sucesso!'
    else return response.status(400).send('Falha na criação da Notícia!')
  }
  async show({ params, response }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return response.status(400).send('Notícia não encontrada!')
    else return Noticia.find(params.id)
  }
  async update({ request, params, response }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return response.status(400).send('Notícia não encontrada!')
    noticia.titulo = request.input('titulo') !== null ? request.input('titulo') : noticia.titulo
    noticia.descricao =
      request.input('descricao') !== null ? request.input('descricao') : noticia.descricao
    noticia.save()
    return noticia
  }
  async destroy({ params, response }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return response.status(400).send('Notícia não encontrada!')
    else {
      noticia.delete()
      return 'Notícia deletada com sucesso!'
    }
  }
}
