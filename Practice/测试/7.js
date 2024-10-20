// const n = parseInt(readline().split(' ')[0])
// let str = readline().split(' ')[0].split('')
// let curStr = str
// let arr = []
// while (line = readline()) {
//     var lines = line.split(' ');
//     arr.push(lines[0])
// }

str = ['i', 'a', 'k', 'i', 'o', 'i']
let curStr = []
str.forEach(item => {
  curStr.push(item)
})
arr = ['ki', 'io', 'qwq']

let left = 0
arr.forEach(item => {
  for (let i = 0; i < curStr.length; i++) {
    if (left === item.length) {
      left = 0
      i = 0
    }
    let j = i
    while (curStr[j] === item[left] && left < item.length) {
      j++
      left++
    }
    if (left === item.length) {
      let replaceStr = new Array(j - i).fill('*')
      str.splice(i, j - i, ...replaceStr)
      return
    }
  }
})
console.log(str.join(''))