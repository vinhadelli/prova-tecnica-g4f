import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Noticia extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare titulo: string
  @column()
  declare descricao: string

  @column.dateTime({ autoCreate: true })
  declare dt_criacao: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare dt_atualizacao: DateTime
}
