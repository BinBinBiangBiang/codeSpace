let products = []
let count = 10
let control = 5
let currentIndex = 0
const box = document.getElementById('box')
const container = document.getElementById('container')
function createProductItem() {
  let item = document.createElement('div')
  item.textContent = 'Product'
  return item
}

function renderItems (currentIndex, count) {
  for (let i = 0; i < Math.min(currentIndex + count, products.length); i++) {
    container.appendChild(createProductItem(products[i]))
  }
}

function scrollRender(control) {
  const scrollTop = container.scrollTop
  const scrollHeight = container.scrollHeight
  const clientHeight = container.clientHeight

  if (scrollTop + clientHeight >= scrollHeight - control) {
    renderItems(currentIndex, count)
    currentIndex += count
  }
}

function throttle(fn, delay) {
  let timer = Date.now()
  return function(...args) {
    if (Date.now() - timer >= delay) {
      timer = Date.now()
      fn.apply(this, args)
    }
  }
}

const throttledScrollRender = throttle(scrollRender, 500)

document.addEventListener('scroll', function() {
  throttledScrollRender()
})
