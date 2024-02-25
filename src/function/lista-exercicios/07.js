const formulaDeBhaskara = (ax2, bx, c) => {
  resultDelta = bx ** 2 - 4 * ax2 * c;// 49 -24 = 25
  x1Ex2 = [];
  if (resultDelta < 0) {
    return console.log("Delta é negativo");
  }
  x1 = (-bx + Math.sqrt(resultDelta)) / (2 * ax2);
  x2 = (-bx - Math.sqrt(resultDelta)) / (2 * ax2);
  x1Ex2.push(x1, x2);
  return console.log(x1Ex2);
};
// 3x² - 5x + 12
formulaDeBhaskara(2, -7, 3);
