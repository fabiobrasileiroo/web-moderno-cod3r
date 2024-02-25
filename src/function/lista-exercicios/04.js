function numDiv(dividendo, divisor) {
  let resultDivisao = dividendo/ divisor
  let resultModuloDivisao = dividendo % divisor
  return console.log(`Resultado da divisao: ${resultDivisao}
    Resto da divisao: ${resultModuloDivisao}  
  `)
}
numDiv(10,3)