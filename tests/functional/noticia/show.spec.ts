import Noticia from '#models/noticia'
import { test } from '@japa/runner'

test.group('Noticia Show', () => {
  test('listar uma notícia específica', async ({ assert, client }) => {
    const response = await client.get('/noticia/1')
    response.assertStatus(200)
    const noticia: Noticia = response.body()
    const noticiaNoBanco: Noticia = await Noticia.findOrFail(1)
    assert.equal(noticiaNoBanco.id, noticia.id)
    assert.equal(noticiaNoBanco.titulo, noticia.titulo)
    assert.equal(noticiaNoBanco.descricao, noticia.descricao)
  })
})
