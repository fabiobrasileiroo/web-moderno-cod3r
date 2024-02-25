function anosBissextos(ano) {
  if (ano >= 400) {
    if (ano % 400 === 0) {
      return true;
    }
  } else {
    if (ano >= 100) {
      if (ano % 100 === 0) {
        return true;
      }
    } else {
      if (ano % 4 === 0) {
        return true;
      } 
    }
  }
  return false;
}
console.log(anosBissextos(104));
