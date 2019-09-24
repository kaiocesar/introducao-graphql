const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  lista() {
    cruds[this._entidade].lista()
  }

  buscaPorId(id) {
    cruds[this._entidade].buscaPorId(id)
  }

  adiciona(item) {
    cruds[this._entidade].adiciona(item)

  }

  atualiza(novoItem, id) {
    cruds[this._entidade].atualiza(novoItem, id)
  }

  deleta(id) {
    cruds[this._entidade].deleta(id)
  }
}

module.exports = Operations
