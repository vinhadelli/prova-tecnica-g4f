import Noticia from '#models/noticia'
import { test } from '@japa/runner'

test.group('Noticia Update', () => {
  test('atualizar uma notícia', async ({ assert, client }) => {
    const response = await client.put('/noticia/1').form({
      titulo: 'Nova Espécie Subaquática Descoberta no Oceano Atlantico',
    })
    response.assertStatus(200)
    const noticiaAtualizada: Noticia = await Noticia.findOrFail(1)
    response.assertBodyContains({
      titulo: 'Nova Espécie Subaquática Descoberta no Oceano Atlantico',
    })
    assert.equal(
      noticiaAtualizada.titulo,
      'Nova Espécie Subaquática Descoberta no Oceano Atlantico'
    )
  })
})
