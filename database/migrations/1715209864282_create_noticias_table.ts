import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'noticias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('titulo').notNullable()
      table.string('descricao').notNullable()

      table.timestamp('dt_criacao').notNullable()
      table.timestamp('dt_atualizacao').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
