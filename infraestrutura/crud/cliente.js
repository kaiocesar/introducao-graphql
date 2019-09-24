const executaQuery = require('../database/queries')

class Cliente {
  lista(){
    const sql = 'SELECT * FROM Clientes'
    executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`
    executaQuery(sql)
  }

  adiciona(item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`
    executaQuery(sql)
  }

  atualiza(novoItem, id) {
    const { nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`
    executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`
    executaQuery(sql)
  }
}

module.exports = new Cliente
