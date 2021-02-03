const gen = require("./gen");

function getStr(a, b) {
  let countA = 0;
  let countB = 0;

  while (countA < 2 && countB < 2) {
    const str = gen.getEl(a, b); //
    if (str === a) {
      countA++;
    } else if (str === b) {
      countB++;
    }
  }
  return countA > countB ? a : b;
}

module.exports = getStr;
