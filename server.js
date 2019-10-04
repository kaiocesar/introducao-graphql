const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operations')

const Clientes = new Operacoes('cliente')
const Pets = new Operacoes('pet');

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
    clientes: () => Clientes.lista(),
    cliente: (root, { id }) => Clientes.buscaPorId(id),
    
  },
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
    atualizarCliente: (root, params) => Clientes.atualiza(params),
    deletarCliente: (root, { id }) => Clientes.deleta(id),
    adicionarPet: (root, params) => Pets.adicionar(params)

  }
}


const servidor = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
})

servidor.start(()=> {
  console.log('Servidor ouvindo...')
})