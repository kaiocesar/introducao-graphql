const executaQuery = require('../database/queries')

class Servico {
  lista() {
    const sql = 'SELECT * FROM Servicos'

    executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Servicos WHERE id=${parseInt(id)}`

    executaQuery(sql)
  }

  adiciona(item) {
    const { nome, preco, descricao } = item
    const sql = `INSERT INTO Servicos(nome, Preco, Descricao) VALUES('${nome}', ${preco}, '${descricao}')`

    executaQuery(sql)
  }

  atualiza(novoItem, id) {
    const { nome, preco, descricao } = novoItem
    const sql = `UPDATE Servicos SET nome='${nome}', Preco=${preco}, Descricao='${descricao}' WHERE id=${id}`

    executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Servicos WHERE id=${id}`

    executaQuery(sql)
  }
}

module.exports = new Servico
