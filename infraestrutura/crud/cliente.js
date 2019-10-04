const executaQuery = require('../database/queries')

class Cliente {
  listar(){
    const sql = 'SELECT * FROM Clientes'
    return executaQuery(sql)
  }

  buscarPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`
    return executaQuery(sql).then(clientes => clientes[0])
  }

  adicionar(item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`
    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      cpf
    }))
  }

  atualizar(novoItem) {
    const { id, nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`
    return executaQuery(sql).then(resultado => ({
      id,
      nome,
      cpf
    }))
  }

  deletar(id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`
    return executaQuery(sql).then(() => id )
  }
}

module.exports = new Cliente
