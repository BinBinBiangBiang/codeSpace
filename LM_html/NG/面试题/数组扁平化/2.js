let arr = [1,2,[3,4,[5,6,[7,8]]]]

function flattenWithReduce(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flattenWithReduce(val) : [val]),
    []
  );
}

console.log(flattenWithReduce(arr));  // [1, 2, 3, 4, 5, 6, 7, 8]