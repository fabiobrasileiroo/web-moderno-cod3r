const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa)
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pesoaConstante = Object.freeze({nome:'Joao Nao muda mesmo'})
pesoaConstante.nome = 'mudou'
console.log(pesoaConstante)
