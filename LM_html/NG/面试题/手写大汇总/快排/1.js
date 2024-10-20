function divide (arr, left, right) {
  const mid = arr[right]
  let i = left - 1
  for (let j = left; j <= right; j++) {
    if (arr[j] < mid) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]
  return i + 1
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = divide(arr, left, right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
  }
  return arr
}

const arr = [2, 3, 4, 2, 1, 5, 6]
console.log(quickSort(arr))