function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}
const produto = new criarProduto('Notebook', 50)
console.log(produto)