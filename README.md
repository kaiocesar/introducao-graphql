#### Executar o projet
`yarn dev`

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


####  Consultar cliente
```
query {
  clientes {
    id
    cpf
    nome
  }
}
```