const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT * FROM Pets'
    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`
    return executaQuery(sql).then((pets) => pets[0])
  }

  adiciona(item) {
    const { nome, dono, tipo, observacoes } = item
    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${dono}, '${tipo}', '${observacoes}')`
    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      dono,
      tipo,
      observacoes
    }))
  }

  atualiza(novoItem) {
    const { id, nome, dono, tipo, observacoes } = novoItem
    const sql = `UPDATE Pets SET nome='${nome}', donoId=${dono}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`
    return executaQuery(sql).then(cliente => console.log(cliente))
  }

  deleta(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`
    return executaQuery(sql)
  }
}

module.exports = new Pet
