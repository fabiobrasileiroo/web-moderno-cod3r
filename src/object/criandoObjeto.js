// usando a notamção literal

function Produto(nome = "fabio", preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2998.99, 0.25)
console.log(p1.getPrecoComDesconto(),'\n',p2.getPrecoComDesconto())

// Função Factory
function criarfuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarfuncionario('João',7980, 4)
const f2 = criarfuncionario('Maria',11400,1)
console.log(f1.getSalario(), f2.getSalario())

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

const fromJSON =JSON.parse('{"info": "Sou um Json"}')

console.log(fromJSON.info)