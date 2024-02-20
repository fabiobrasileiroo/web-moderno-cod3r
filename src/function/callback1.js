const fabricantes = ["Mercedes","Audi","BWM"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach((valorDoElemento, indice)=> {console.log(indice,valorDoElemento )
return undefined}
) 