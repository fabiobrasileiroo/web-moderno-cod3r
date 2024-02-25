// function fatorial(num) {
//   if(num === 0) {
//     return 1
//   } else if( num >= 1) {
//     return 1
//   } else if(num > 1) {
//     for(let i = 1; num <= i; ++i) {
//       let array  
//       array.unshift(i)
//     }
//     for(elemento of array) {
//       let result =  
//     }
//   }
// }

// function fatorial(num) {
//   if (num === 0) {
//     return 1;
//   } else if (num >= 1) {
//     return num * fatorial(num - 1);
//   } else {
//     return "Número inválido"; // Tratamento de erro para números negativos
//   }
// }

// console.log(fatorial(4)); // Exemplo de uso

function fatorial(num) {
  if (num < 0) {
    return "Número inválido"; // Tratamento de erro para números negativos
  } else {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

console.log(fatorial(2)); // Exemplo de uso
