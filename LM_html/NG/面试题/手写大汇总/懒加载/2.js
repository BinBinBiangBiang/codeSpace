let viewHeight = window.innerHeight

function lazyLoad() {
  let imgs = document.querySelectorAll('img[data-original]')
  Array.from(imgs).forEach(el => {
    let rect = el.getBoundingClientRect()
    if (el.top < viewHeight) {
      let img = new Image()
      img.src = el.dataset.original
      img.onload = function () {
        el.src = img.src
      }
      el.removeAttribute('data-original')
    }
  })
}
lazyLoad()
document.addEventListener('scroll', lazyLoad)