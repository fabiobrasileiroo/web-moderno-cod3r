// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;
delete produto.preco;
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 83333,
  proprietario: {
    nome: "Raul",
    idade: 46,
    endereco: {
      logradouro: 'Rua abc',
      numero: 123
    }
  },
  condutores: [
    {
      nome: 'Junior',
      idade: 19
    },
    {
      nome: 'Ana',
      idade: 43
    }
  ],
  calcularValorSeguro: function() {

  }
};

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log('\n')
console.log(carro.condutores.length)
