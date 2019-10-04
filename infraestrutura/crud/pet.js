const executaQuery = require('../database/queries')

class Pet {
  listar() {
    const sql = 'SELECT * FROM Pets'
    return executaQuery(sql)
  }

  buscarPorId(id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`
    return executaQuery(sql).then((pets) => pets[0])
  }

  adicionar(item) {
    const { nome, donoId, tipo, observacoes } = item
    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`
    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      donoId,
      tipo,
      observacoes
    }))
  }

  atualizar(novoItem) {
    const { id, nome, dono, tipo, observacoes } = novoItem
    const sql = `UPDATE Pets SET nome='${nome}', donoId=${dono}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`
    return executaQuery(sql).then(cliente => console.log(cliente))
  }

  deletar(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`
    return executaQuery(sql)
  }
}

module.exports = new Pet
