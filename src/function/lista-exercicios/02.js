function trianguloLados(a, b, c) {
  if (a === b && a === c && b === c ) {
    console.log('Triangulo Equilátero três lados são iguais')
  } else if((a===b && a===c ||b === c)|| (a === b || a ===c && b === c)){
    console.log('Triagulo Isósceles dois lados iguais')
  } else if(a!==b && a!==c &&b !==c){
    console.log('Triangulo Escaleno todos os lados são diferentes')
  }
}
trianguloLados(3,2,1)
