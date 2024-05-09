import Noticia from '#models/noticia'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static readonly environment = ['development', 'test', 'production']
  async run() {
    // Write your database queries inside the run method
    await Noticia.createMany([
      {
        titulo: 'Nova Espécie Subaquática Descoberta no Oceano Pacífico',
        descricao:
          'Cientistas encontram um novo tipo de peixe nas profundezas do Pacífico, chamado "Marispectra Profunda"',
      },
      {
        titulo: 'Sucesso no Lançamento de Foguete Reutilizável',
        descricao:
          'Uma empresa aeroespacial realiza com êxito o primeiro lançamento de um foguete reutilizável.',
      },
      {
        titulo: 'Estudo: Isolamento Social Prejudica Saúde Mental',
        descricao:
          'Pesquisa indica que o isolamento prolongado afeta negativamente a saúde mental.',
      },
      {
        titulo: 'Implante Neural Restaura Parcialmente Visão de Cegos',
        descricao:
          'Implante neural permite recuperação parcial da visão em pacientes cegos, prometendo melhorar suas vidas.',
      },
      {
        titulo: 'Escândalo Financeiro Abala Mercado de Criptomoedas',
        descricao:
          'Um escândalo envolvendo uma grande exchange de criptomoedas causa volatilidade nos mercados digitais.',
      },
    ])
  }
}
