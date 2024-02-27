let arr = [1,2,[3,[4],[5,6,[7,8,[9]]]]]

function flattenWithSpread(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flattenWithSpread(arr)); // [1,2,3,4,5,6,7,8,9]