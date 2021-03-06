const executaQuery = require('../database/queries')

class Pet {
  listar() {
    const sql = `SELECT Pets.id, Pets.nome, Pets.tipo, Pets.observacoes, \
      Clientes.nome as donoNome, Clientes.cpf as donoCpf, Clientes.id as donoId \
      FROM Pets INNER JOIN Clientes ON Clientes.id = Pets.donoId`

    return executaQuery(sql).then(pets => 
      pets.map(pet => ({
        id: pet.id,
        nome: pet.nome,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: {
          id: pet.donoId,
          nome: pet.donoNome,
          cpf: pet.donoCpf
        }
      })))
  }

  buscarPorId(id) {
    const sql = `SELECT Pets.id, Pets.nome, Pets.tipo, Pets.observacoes, \
      Clientes.nome as donoNome, Clientes.cpf as donoCpf, Clientes.id as donoId \
      FROM Pets INNER JOIN Clientes ON Clientes.id = Pets.donoId WHERE Pets.id = ${id}`

    return executaQuery(sql).then(pets => 
      pets.map(pet => ({
        id: pet.id,
        nome: pet.nome,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: {
          id: pet.donoId,
          nome: pet.donoNome,
          cpf: pet.donoCpf
        }
      })))
  }

  adicionar(item) {
    const { nome, donoId, tipo, observacoes } = item
    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes)\
        VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}');\
        SELECT * FROM Clientes WHERE id = ${donoId}`

    return executaQuery(sql).then(dados => {
      const pet = dados[0]
      const clientes = dados[1]
      
      return clientes.map(cliente => ({
          dono: {...cliente},
          id: pet.insertId,
          nome,
          tipo,
          observacoes
        
      }))

    }).catch(error => console.log(`ERROR MESSAGE: ${error}`))

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
