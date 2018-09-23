module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var arrNew = [];
  for (var i = 0; i < array.length; i++){
    arrNew[array[i]] = true;
  }

  var maxLong = 0;
  var conceivableMaxLong = 0;
  for (var i = 0; i < arrNew.length; i++) {
    if (arrNew[i]) {
      conceivableMaxLong++;
      if (conceivableMaxLong > maxLong){
        maxLong = conceivableMaxLong;
      }
    }
    else conceivableMaxLong = 0;
  }
  return maxLong;
}
