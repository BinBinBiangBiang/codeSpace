function debounce (fn, delay) {
  let timer
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
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
