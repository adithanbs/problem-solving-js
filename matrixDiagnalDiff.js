const findDiagnalDifferent = (inputMartix) => {
  let length = inputMartix.length;
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < length; i++) {
    positive += inputMartix[i][i];
    negative += inputMartix[i][length - i - 1];
  }
  return Math.abs(positive - negative);
};

let first = findDiagnalDifferent;
console.log(
  first([[11,2,4],[4,5,6],[10,8,-12]])
);
