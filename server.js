const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const operacoes = require('./infraestrutura/operations')

const cliente = new operacoes('cliente')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }
  console.log('conectou no banco')
  Tabelas.init(conexao)
})

const resolvers = {
  Query: {
    status: () => 'server rodando...'    
  },
  Mutation: {
    adicionarCliente: (root, params) => cliente.adiciona(params)
  }
}


const servidor = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
})

servidor.start(()=> {
  console.log('Servidor ouvindo...')
})