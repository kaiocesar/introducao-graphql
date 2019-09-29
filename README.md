#### Executar o projeto
`yarn install && yarn dev`

acessar o playground do graphql atráves do link  [http://localhost:4000](http://localhost:4000)

#### Adicionar um cliente
```
mutation{
    adicionarCliente(nome:"Bruna Evangelista da Silva", cpf:"38312312131") {
        id
        nome
        cpf
  }
}
```

####  Consultar clientes
```
query {
    clientes {
        id
        cpf
        nome
    }
}
```

####  Consultar cliente
```
query {
    cliente(id:1) {
        id
        cpf
        nome
    }
} 
```