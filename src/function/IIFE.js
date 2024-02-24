// IIFE -> Immediately Invoked Function Expresion
(function(){
  console.log('Será executada na hora!')
  console.log('Foge do espoco mais abragente')
})()

// (() => {
//   console.log('Agora sou uma arrow ;>');
// })();

console.log('\n')
class MinhaClasse {
  constructor() {
    (function() {
      console.log('Será executado na hora')
      console.log('Foge do escopo mais abragente')
    })()
  }
}
const instancia = new MinhaClasse()