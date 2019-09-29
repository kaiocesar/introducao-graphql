const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operations')

const Cliente = new Operacoes('cliente')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }
  console.log('conectou no banco')
  Tabelas.init(conexao)
})

const resolvers = {
  Query: {
    status: () => 'server rodando...',
    clientes: () => Cliente.lista()
  },
  Mutation: {
    adicionarCliente: (root, params) => Cliente.adiciona(params)
  }
}


const servidor = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
})

servidor.start(()=> {
  console.log('Servidor ouvindo...')
})