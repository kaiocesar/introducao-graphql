const executaQuery = require('../database/queries')

class Cliente {
  listar(){
    const sql = `SELECT * FROM Clientes;\
      SELECT * FROM Pets`
    return executaQuery(sql).then(dados => {
      const clientes = dados[0]
      const pets = dados[1]

      return clientes.map(cliente => {
        const petsCliente = pets.filter(pet => pet.donoId == cliente.id)

        return ({
          ...cliente,
          pets: petsCliente
        })

      })
    })
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
