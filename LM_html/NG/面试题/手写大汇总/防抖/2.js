function debounce(fn, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function log() {
  console.log('debounce')
}

const debounceLog = debounce(log, 500)
for (let i = 0; i < 10; i++) {
  setTimeout(debounceLog, i * 1000)
}