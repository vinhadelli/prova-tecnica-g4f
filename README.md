# prova-tecnica-g4f-backend

Prova realizada para ingressar na G4F. Este repositório contem o Backend em Adonis.js

O Frontend em React se encontra no repositório:

https://github.com/vinhadelli/prova-tecnica-g4f-frontend

## Como Executar

### Localmente

Como executar a aplicação

### Backend

Executar o script `deploy-local` para inicializar e popular o banco e fazer o deploy da aplicação na porta 3333.
Há uma versão `.ps1` para Windows e uma `.sh` para Linux.

### Com Docker

Executar o script `deploy-docker` para construir a imagem e fazer o deploy do conteiner com a aplicação escutando na porta 3333. O Script também para e deleta o container da execução anterior, caso ele ainda esteja rodando.
Há uma versão `.ps1` para Windows e uma `.sh` para Linux.

## Testando a Aplicação

### Testes automatizados

Basta executar o comando `node ace test` para executar os testes automatizados

### Teste manual

Execute a aplicação usando um dos dois métodos acima e utilize um cliente http de sua escolha para fazer as requisições.

### Rotas da Aplicação

A aplicação possui as seguintes rotas:

- GET /noticia - Retorna todas as notícias
- GET /noticia/:id - Retorna uma notícia específica. Recebe o id como parâmetro
- POST /noticia - Cadastra uma nova notícia. Recebe um JSON com a notícia a cadastrar
- PUT /noticia/:id - Atualiza uma notícia. Recebe o id como parâmetro e um JSON com a notícia a atualizar
- DELETE /noticia/:id - Deleta uma notícia. Recebe o id como parâmetro
  O JSON segue o exemplo abaixo:

```
{
    "titulo": "Titulo da Notícia.",
    "descricao":"Descrição da Notícia."
}
```

Não é necessário autenticar para utilizar a API.

## Justificando a Estrutura de Pastas

A estrutura utilizada foi fortemente influênciada pela estrutura de pastas criadas na criação do projeto Adonis.js. E ela naturalmente já segue um padrão de organização bom e não foi necessário fazer grandes alterações

A pasta app armazena os controllers, modelos, exceções e middleware da aplicação. basicamente os dados de negócio.

A pasta config tem os arquivos de configuração da API.

A pasta Database naturalmente armazena os scripts das migrations e dos seeders, para instanciar e popular o banco. Além, claro, do próprio arquivo "sqlite" do banco.

A pasta start contém os arquivos que iniciam a aplicação, como rotas, variáveis de ambiente e configurações do kernel http, como configurações de quais middlewares serão utilizados. Um exemplo de middleware seria o de autenticação, que seria configurado aqui, se ele fosse utilizado.

Na pasta tests temos os testes automatizados da aplicação, separados em testes funcionais e por cada comportamento testado.

E por fim, a pasta bin que armazena os scripts que serão executados pelo node para inicializar a aplicação
