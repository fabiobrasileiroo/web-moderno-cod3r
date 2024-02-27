const sequencia = {
  _valor: 1,
  get valor() { return this._valor++},
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

class Person {
  constructor(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name
  }
}
let lotrChar = new Person('Frodo')
console.log(lotrChar)