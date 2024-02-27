let arr = [1,2,[3,4,[5,6,[7,8,[9]]]]]

function flattenWithFlat(arr) {
  return arr.flat(Infinity); // Infinity表示完全扁平化所有层级
}

console.log(flattenWithFlat(arr)); // [1,2,3,4,5,6,7,8,9]