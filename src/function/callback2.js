const notas = [4, 5, 6.2, 6.4, 8, 9];
//sem callabck
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);
// Com callback
let notasBaixas1 = notas.filter(function (nota) {
  return nota <= 8;
});
console.log(notasBaixas1);

const notasBaixas2 = notas.filter((nota) => nota < 6);
console.log(notasBaixas2);
