
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 示例用法
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出 [1, 1, 2, 3, 6, 8, 10]
