const investimentoJurosSimples = (
  capitalInicial,
  taxaDeJuros,
  tempoDeAplicacao
) => {
  const montante =
    capitalInicial + capitalInicial * (taxaDeJuros / 100) * tempoDeAplicacao;
  return montante;
};

console.log(investimentoJurosSimples(100, 10, 3)); // Retorna 120, que é o valor correto
// investimentoJurosSimples= (capitalInicial, taxaDeJuros, tempoDeAplicacao) => {
//   // motante = CapitalInicial + taxaDeJuros
//   return capitalInicial + taxaDeJuros * tempoDeAplicacao;
// };

const investimentoJurosComposto = (
  capitalInicial,
  taxaDeJuros,
  tempoDeAplicacao
) => {
  const montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
  return montante;
};

console.log(investimentoJurosComposto(100, 0.1, 3));
