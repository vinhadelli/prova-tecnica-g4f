import Noticia from '#models/noticia'
import { test } from '@japa/runner'

test.group('Noticia List', () => {
  test('listar todas as notícias', async ({ assert, client }) => {
    const response = await client.get('/noticia')
    response.assertStatus(200)
    const noticias: any | Noticia[] = response.body()
    assert.equal(noticias[0].titulo, 'Escândalo Financeiro Abala Mercado de Criptomoedas')
    assert.equal(noticias[1].titulo, 'Implante Neural Restaura Parcialmente Visão de Cegos')
    assert.equal(noticias[2].titulo, 'Estudo: Isolamento Social Prejudica Saúde Mental')
    assert.equal(noticias[3].titulo, 'Sucesso no Lançamento de Foguete Reutilizável')
    assert.equal(noticias[4].titulo, 'Nova Espécie Subaquática Descoberta no Oceano Pacífico')
  })
})
