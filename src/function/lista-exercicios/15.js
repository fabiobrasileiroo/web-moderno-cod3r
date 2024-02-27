const concessionaria = (carro = "") => {
  switch (carro) {
    case "hatch":
      return "Compra efetuada com sucesso";
      break;
    case "sedans":
    case "motocicletas":
    case "caminhonetes":
      return "Tem certeza que não prefere este modelo?";
      break;
    default:
      return "Não trabalhamos com este tipo de automóvel aqui";
  }
};

console.log(concessionaria('sedans'));
