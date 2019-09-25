const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT * FROM Atendimentos'

    executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${parseInt(id)}`

    executaQuery(sql)
  }

  adiciona(item) {
    const { cliente, pet, servico, status, observacoes } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) VALUES(${cliente}, ${pet}, ${servico}, '${data}', '${status}', '${observacoes}')`

    executaQuery(sql)
  }

  atualiza(novoItem, id) {
    const { cliente, pet, servico, status, observacoes } = item
    const data = new Date.toLocaleDateString()
  
    const sql = `UPDATE Atendimentos SET clienteId=${cliente}, petId=${pet}, servicoId=${servico}, data='${data}', status='${status}' observacoes='${observacoes}' WHERE id=${id}`

    executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`

    executaQuery(sql)
  }
}

module.exports = new Atendimento
