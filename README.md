#### Executar o projeto
`yarn install && yarn dev`

acessar o playground do graphql atráves do link  [http://localhost:4000](http://localhost:4000)

#### Adicionar um cliente
```
mutation{
    adicionarCliente(nome:"Bruna Evangelista", cpf:"12312312131") {
        id
        nome
        cpf
  }
}
```

####  Retornar todos os clientes e seus respectivos pets
```
query {
  clientes {
    id
    cpf
    nome
    pets {
      id
      nome
    }
  }
}
```

####  Consultar um cliente em especifico
```
query {
    cliente(id:1) {
        id
        cpf
        nome
    }
} 
```

#### Alterar dados do cliente
```
mutation {
  atualizarCliente(id: 1, nome: "Kaio Cesar S Paula", cpf: "39400000011") {
    id
    nome
    cpf
  }
}
```

#### Excluir um cliente
```
mutation{
  deletarCliente(id: 2)
}
```

#### Adicionar um Pet
```
mutation {
  adicionarPet(nome: "Rex", donoId: 1, tipo: "Cão", observacoes: "Ele é manço mas não abusem!") {
    id
    donoId
    nome
    tipo
    observacoes
  }
}
```

#### Retornar os pets com informações dos donos (clientes)
```
query {
  pets {
    id
    nome
    tipo
    observacoes
    dono {
      id
      nome
      cpf
    } 
  }
}
``` 
