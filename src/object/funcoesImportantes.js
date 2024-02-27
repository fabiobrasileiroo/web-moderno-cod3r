const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};
//pego as chaves do objeto
console.log(Object.keys(pessoa));
// valores do objeto
console.log(Object.values(pessoa));
// pegar com registro vai me dar um array com atributo chave valor
console.log(Object.entries(pessoa));

console.log("\n");
// desestruturando o objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// definir um propriedade
// definindo o target(alvo) , nome da propriedade e um objeto
// com todas as caracteristicas
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});
// pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimenton);
console.log(Object.keys(pessoa));
//
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
// objeto de destino que vai receber o atributos
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj)
obj.c = 1234
console.log(obj)
