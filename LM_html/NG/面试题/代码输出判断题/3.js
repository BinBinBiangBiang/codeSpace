// 考察防抖结合for循环的场景

function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
       fn.apply(this, args)
    }, delay)
  }
}


function log() {
  console.log('a')
}
const debounceFn = debounce(log, 350)
for(let i = 0; i <= 20; i++) {
  setTimeout(debounceFn, i * 100)
}
