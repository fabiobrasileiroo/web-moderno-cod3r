function valor(a,b) {
  result = (a+b).toFixed(2).replace(".",",")
  return console.log(`R$ ${result}`)
}
valor(0.1,0.2)