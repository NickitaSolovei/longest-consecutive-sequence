module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let arrNew = [];
  array.forEach(item => {
    arrNew[item] = true;
  });
  let maxLength = 0;
  let conceivableMaxLength = 0;
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i]) {
      conceivableMaxLength++;
      if (conceivableMaxLength > maxLength){
        maxLength = conceivableMaxLength;
      }
    }
    else conceivableMaxLength = 0;
  }
  return maxLength;
}