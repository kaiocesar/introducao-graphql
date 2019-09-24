const conexao = require('../conexao')

const executaQuery = (query) => {
  conexao.query(query, (erro, resultados, campos) => {
    if (erro) {
      return erro
    } else {
      return resultados
    }

   console.log('executou a query!')
  })
}

module.exports = executaQuery
