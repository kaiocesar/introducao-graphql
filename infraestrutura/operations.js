const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  listar() {
    return cruds[this._entidade].listar()
  }

  buscarPorId(id) {
    return cruds[this._entidade].buscarPorId(id)
  }

  adicionar(item) {
    return cruds[this._entidade].adicionar(item)
  }

  atualizar(novoItem, id) {
    return cruds[this._entidade].atualizar(novoItem)
  }

  deletar(id) {
    return cruds[this._entidade].deletar(id)
  }
}

module.exports = Operations
