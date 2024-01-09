function playSound(e) {
  const keyCode = e.keyCode;
  // 标签的数据属性
  const key = document.querySelector(`
    .key[data-key="${keyCode}"]
  `)
  key && key.classList.add('playing');

  const keys = document.querySelectorAll('.key');
  // console.log(keys)
  keys.forEach((key) => {
    key.addEventListener('transitionend', function (e) {
      if (e.propertyName != 'transform') return;
      this.classList.remove('playing');
    })
  })

  const audio = document.querySelector(`
    audio[data-key="${keyCode}"]
  `)

  audio.currentTime = 0;
  audio.play();

}
window.addEventListener('keydown', playSound)