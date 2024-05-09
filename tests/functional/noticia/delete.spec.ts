import Noticia from '#models/noticia'
import { test } from '@japa/runner'

test.group('Noticia Delete', (group) => {
  group.each.setup(async () => {
    //criando notícia a ser deletada.
    Noticia.create({
      titulo: 'Empresa de Tecnologia Antecipa Anúncio de Produto Incrível',
      descricao:
        'Investidores aguardam ansiosamente o próximo anúncio de uma gigante da tecnologia, especulando sobre seu potencial para transformar o mercado.',
    })
  })
  test('deletar uma notícia', async ({ assert, client }) => {
    const response = await client.delete('/noticia/6')
    response.assertStatus(200)
    const noticiaAtualizada: Noticia | null = await Noticia.find(6)
    assert.isNull(noticiaAtualizada)
  })
})
