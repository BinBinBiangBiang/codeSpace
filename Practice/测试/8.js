function isNaN(num) {
  return typeof num === 'number' && num == num
}

const num1 = 1
const num2 = NaN
const num3 = '1'

console.log('num1',isNaN(num1))
console.log('num2',isNaN(num2))
console.log('num3',isNaN(num3))
