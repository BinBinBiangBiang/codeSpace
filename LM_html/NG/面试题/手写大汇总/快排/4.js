function divide(arr, left, right) {
  const mid = arr[right]
  let j = left - 1
  for (let i = left; i < right; i++) {
    if (arr[i] <= mid) {
      j++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[j + 1], arr[right]] = [arr[right], arr[j + 1]]
  return j + 1
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = divide(arr, left, right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
  }
  return arr
}

let arr = [1, 5, 3, 3, 2, 6, 7, 8]
console.log(quickSort(arr))

