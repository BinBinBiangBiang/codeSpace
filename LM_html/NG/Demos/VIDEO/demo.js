const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove',function(e){
  let y = e.y-speed.offsetTop // offsetTop是容器顶端到页面顶端的垂直距离
  let persent = y / speed.offsetHeight  // offsetHeight是容器的高度
  let height = Math.round(persent * 100) +'%'

  bar.style.height = height

  let min = 0.4
  let max = 4
  let playbackRate = persent * (max - min) +min
  bar.textContent = playbackRate.toFixed(2) + 'x'  // toFixed(x) x为保留几位小数

  video.playbackRate = playbackRate  // video.playbackRate 为视频的播放速率

  
  // console.log(height);
})