import Noticia from '#models/noticia'
import { test } from '@japa/runner'

test.group('Noticia Store', () => {
  test('criar uma notícia', async ({ assert, client }) => {
    const response = await client.post('/noticia').json({
      titulo: 'Empresa de Tecnologia Antecipa Anúncio de Produto Revolucionário',
      descricao:
        'Investidores aguardam ansiosamente o próximo anúncio de uma gigante da tecnologia, especulando sobre seu potencial para transformar o mercado.',
    })
    response.assertStatus(200)
    const noticiaCriada: Noticia = await Noticia.query()
      .where('titulo', 'Empresa de Tecnologia Antecipa Anúncio de Produto Revolucionário')
      .firstOrFail()
    assert.isNotNull(noticiaCriada)
  })
})
