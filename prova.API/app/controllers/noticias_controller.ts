import Noticia from '#models/noticia'
import type { HttpContext } from '@adonisjs/core/http'

export default class NoticiasController {
  async index({}: HttpContext) {
    return await Noticia.all()
  }
  async store({ request }: HttpContext) {
    const noticia: Noticia = await Noticia.create(request.all())
    if (!noticia) return 'Notícia criada com sucesso!'
    else return 'Falha na criação da Notícia!'
  }
  async show({ params }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return 'Notícia não encontrada!'
    else return Noticia.find(params.id)
  }
  async update({ request, params }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return 'Notícia não encontrada!'
    noticia.titulo = request.input('titulo')
    noticia.descricao = request.input('descricao')
    noticia.save()
    return noticia
  }
  async destroy({ params }: HttpContext) {
    const noticia: Noticia | null = await Noticia.find(params.id)
    if (!noticia) return 'Notícia não encontrada!'
    else {
      noticia.delete()
      return 'Notícia deletada com sucesso!'
    }
  }
}
