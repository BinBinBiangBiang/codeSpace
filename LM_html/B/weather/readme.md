一、下拉刷新
在主文档前插入一个DOM，并动态加载天气预报页面，隐藏元素，通过监听touchmove 事件在Y方向移动的距离，来判断是否唤起二楼。如果是，则将天气预报置为显示。设置会员中心页面的 translateY 为移动的距离。moveend 时，若超过阈值，添加会员中心蒙层，并将 translateY 置为固定高度，通过 transition 过渡。

0. 初始化
1. 准备元素
createElement pullElement

insertBefore #app

pullElement.appendChild(#dom)

蒙层盖住一楼



2. 初始化状态
status: 主文档在INIT/BOTTOM/FULLSCREEN

const PULL_STATUS = {
  INIT: 'INIT',
  BOTTOM: 'BOTTOM',
  FULLSCREEN: 'FULLSCREEN', // 从二楼回到一楼
}
direction: 当前是在下拉还是刷新还是未操作

const DIR = {
  UP: 'UP',
  DOWN: 'DOWN',
  PENDING: 'PENDING',
}


1. 监听touch事件
touchstart: 记录初始x和y

touchmove: 根据x方向和y方向移动的距离Math.abs(moveLenY) > Math.abs(moveLenX)确定是否为下拉，如果为下拉则触发下拉事件，将y方向移动的距离作为参数；

    if (Math.abs(moveLenY) > Math.abs(moveLenX)) {
      if (moveLenY > 0) {
        this.pullHandler(moveLenY)
      }
    }
touchend: 根据end的x和y来确定是否为有效下拉，如果是唤起二楼 PULL_STATUS.BOTTOM ；否则回到 PULL_STATUS.INIT 。

    if (this.moveDistance > REFRESH_DISTANCE) {
      // 有效下拉发生，拉起二楼。
      this.go2ndFloor()
    } else {
      // 否则收起二楼。
      this.resetAppPage()
    }


2. 下拉处理
pullHandler(_lenY) {
    // 已经置于底部时，不支持下滑了。
    // TODO: 或者没有二楼元素时
    if (!this.app || this.status === PULL_STATUS.BOTTOM) return
    
    this.direction = DIR.DOWN
    this.moveDistance = _lenY
    // 下拉元素距离视口顶部距离
​
    // 有效下拉才做处理
    if (_lenY > 10) {
      if (this.pullTextEl.style['display'] === 'none') {
        this.pullTextEl.style['display'] = 'block'
      }
      // 避免从translateY直接从0跳到10，导致页面抖动。
      let lenY = _lenY - 10
      // 修改一楼页面样式
      let borderRadius = _lenY / 4
      if (borderRadius > 20) borderRadius = 20
      this.app.style['border-radius'] = `${borderRadius}px ${borderRadius}px 0 0`
      this.app.style['transform'] = `translateY(${lenY}px) translate3d(0,0,0)` // 下拉移动界面
      // 修改蒙层样式
      if (!this.modalDom) {
        this.addModalDom()
      }
      this._modalDomTransition(DIR.DOWN, lenY)
    }
  }
  // 蒙层样式根据距离变化
  private _modalDomTransition(dir, _lenY) {
    if (!this.modalDom) return
      // blur: 20px -> 0 / 0 -> 20px
      // background透明度: 0.4 -> 0
      // color 255,255,255,1 -> 255,255,255,0
    if (dir === DIR.DOWN) {
      // 往下拉, _lenY 变大
      if (_lenY < 200) {
        this.modalDom.style['background'] = `rgba(0, 0, 0, 0)`
        this.modalDom.style['backdrop-filter'] = 'blur(0)'
        this.modalDom.style['-webkit-backdrop-filter'] = 'blur(0)'
        this.modalDom.style['color'] = `rgba(255, 255, 255, 0)`
      } else if (_lenY < 400) {
        // 200 - 400:
        // background 透明度: 0.4 -> 0
        // blur: 0 -> 20px
        this.modalDom.style['background'] = `rgba(0, 0, 0, ${(_lenY - 200) / 500})`
        this.modalDom.style['backdrop-filter'] = `blur(${(_lenY - 200) / 10}px)`
        this.modalDom.style['-webkit-backdrop-filter'] = `blur(${(_lenY - 200) / 10}px)`
        this.modalDom.style['color'] = `rgba(255, 255, 255, ${_lenY / 600})`
      } else {
        this.modalDom.style['background'] = 'rgba(0, 0, 0, 0.4)'
        this.modalDom.style['backdrop-filter'] = 'blur(20px)'
        this.modalDom.style['-webkit-backdrop-filter'] = 'blur(20px)'
        this.modalDom.style['color'] = `rgba(255, 255, 255, 1)`
      }
    }
  }

3. 下拉结束
  // 拉起二楼
  go2ndFloor() {
    if (this.status === PULL_STATUS.BOTTOM) return
    // 播放动画
    this._playAppDomTransition(DIR.DOWN) // 一楼会员中心样式
    this._playModalTranstion(DIR.DOWN) // 蒙层样式
    this._setPullEleStyle(PULL_STATUS.BOTTOM) // 天气预报父元素样式
​
    if (typeof this.onload === 'function') {
      this.onload()
    }
    setTimeout(() => {
      if (typeof this.onshow === 'function') {
        this.onshow() // 完全拉起
      }
    }, 300)
    this.direction = DIR.PENDING
    this.status = PULL_STATUS.BOTTOM
  }
  // 回到一楼
  resetAppPage = () => {
    // 播放动画
    this._playAppDomTransition(DIR.UP)
    this._playModalTranstion(DIR.UP)
    this._setPullEleStyle(PULL_STATUS.INIT)
​
    setTimeout(() => {
      if (typeof this.onhide === 'function') {
        this.onhide()
      }
    }, 300)
    this.status = PULL_STATUS.INIT
    this.direction = DIR.PENDING
  }


4. 外部调用
call2ndFloor() {
  this.pullTextEl.style['display'] = 'block'
  this.modalDom.style['visibility'] = 'visible'
  this.go2ndFloor()
}


二、echarts使用
1. 基础配置
const options = {
	grid: {
    left: '0%',
    right: '0',
    top: '10%',
    height: '60%',
  }, // 直角坐标系内的网格
  xAxis: {

  },
  yAxis: {

  },
  series: [{
    type: 'line',
    data: []
  }]
}


<ReactEChartsCore
  notMerge={true}
  lazyUpdate={true}
  option={options}
  echarts={echarts}
/>


image-20240823110233712

2. 图表中元素渲染方法
渲染日出日落：在当天时刻温度上方展示日出/日落的图标

// render自定义的图形或文字或其他item
{
  id: 'sunset',
  type: 'custom',
  renderItem: function (params, api) {
    var imageStr = api.value(2)
    var startPoints = api.coord([api.value(0), api.value(1)])
    return {
      type: 'image',
      y: startPoints[1] - 20, //
      x: startPoints[0],
      scaleX: 1,
      scaleY: 1,
      style: {
        image: SUN_RIZE_SET[imageStr],
      },
    }
  },
},
// echarts需要的数据类型
{
	value: [
      7,
      30,
      "sunset"
  ]
}

// item为15天里（360小时），每天0点的下标。
const startIndex = array.findIndex((i) => i.datetime === item.datetime) 
const sunriseHour = parseInt(sunriseTimeStr.split(':')[0]) // 当天日出的时刻
const sunsetHour = parseInt(sunsetTimeStr.split(':')[0]) // 当天日落的时刻
const sunriseIndex = sunriseHour + startIndex
const sunsetIndex = sunsetHour + startIndex

// 会错过今天的日出和日落，需要补全。
// 【现在】的时刻
const nowHour = parseInt(array[0].datetime_description.split(':')[0]) + 1
// 还没过日出时间
if (nowHour <= sunriseHour) {
  sunriseAndSunsetData.push({
    value: [
      sunriseHour - nowHour,
      array[sunriseHour - nowHour].temperature,
      'sunrise',
    ],
  })
}
// 还没过日落时间
if (nowHour <= sunsetHour) {
  sunriseAndSunsetData.push({
    value: [
      sunsetHour - nowHour,
      array[sunsetHour - nowHour].temperature,
      'sunset',
    ],
  })
}
空气和风力

// 通过柱状图实现

// 空气质量值不同，item在选中和未选中态的样式也不同
twoHoursAirYValues.push({
  value: 1, // 保证柱子高度一致
  itemStyle: { // 柱子颜色
    color: Air_Quality_Map[item.air_type].backgroundColor,
  },
  // 选中时，样式
  emphasis: {
    itemStyle: {
      color: Air_Quality_Map[item.air_type].color,
    },
    label: {
      color: '#fff',
      formatter: (props) => {
        return item.air_quality
      },
    },
  },
  className: item.air_type,
  realValue: item.air_quality, // 选中时，显示的真实值
})
指针

// 图表滚动（X轴缩放）dataZoom: inside，非连续值。
// https://echarts.apache.org/zh/option.html#dataZoom-inside

// 监听水平滚动事件，实时画出指针位置。 
useEffect(() => {
  lineCanvasRef.current = document.getElementById('all-hours-pointer') as HTMLCanvasElement
  lineCanvasCtxRef.current = lineCanvasRef.current?.getContext('2d
	// 图表ref
  lineChartInstanceRef.current = lineChartRef.current.getEchartsInstance()
  // 图表的宽度
  const scrollElement = document.querySelector('.forty-eight-hours-charts-line') as HTMLElement
  const totalWidth = scrollElement.offsetWidth
  // 每个 X 所占据的宽度
  const barWidth = totalWidth / (allData.timeData.length - 2)
  // 滚动元素的容器
  chartDomRef.current = document.querySelector('.forty-eight-hours-charts-container') as HTMLElement
  // 最大滚动距离(offsetWidth - 容器的宽度)
  const scrollTotalWidth = totalWidth - chartDomRef.current.clientWidth
  // 为了往右移动距离不超过屏幕，需要拿 canvas 的宽度计算，20 是canvas左右预留出来的宽度，为了指针能完整显示。
  const canvasUnitDistance = (lineCanvasRef.current.width - 20) / scrollTotalWidth // canvas 移动的距离
  const canvasRatio = 2 * SCREEN_WIDTH_RATIO

  chartComputeRef.current = {
    duration: Math.round(range?.max) - Math.round(range?.min),
    maxHeight: lineCanvasRef.current.height * 0.3,
    marginTop: lineCanvasRef.current.height * 0.15,
  }
  const scrollHandler = (e) => {
    const scrollLeft = e.target.scrollLeft
    // 移动一定距离展示快捷回到【现在】按钮
    setToNowBtnVisible(scrollLeft > 60)
    // 指针在屏幕上移动的距离(clientWidth，而不是canvas.width)
    const canvasDistance = scrollLeft * canvasUnitDistance // canvas.style.width
    // canvas指针在画布上应该移动的距离
    const distance = canvasDistance / canvasRatio // canvasDistance / 2 / SCREEN_WIDTH_RATIO
    
    // canvas指针 + 滚动元素移动的距离，才是实际的xIndex
    const xIndex = (scrollLeft + distance) / barWidth + 1 // 图表x的值，因为是从第二个值开始渲染的
    // 下标
    const yValue = getYValue(xIndex, allPointsRef.current)
    const xInt = Math.floor(xIndex + 0.1)
    // 非图表部分
    renderRealtime(xInt)
    reRenderCanvas(yValue, canvasDistance)
  }

  chartDomRef.current.addEventListener('scroll', scrollHandler)
  // 初始化渲染
  renderRealtime(1)
  // 指针渲染
  reRenderCanvas(array[1].temperature, 0)

  return () => {
    chartDomRef.current?.removeEventListener('scroll', scrollHandler)
  }
}, [])



// 渲染右上角日升日落、高亮柱子及当前时刻，风向，气温等。
const renderRealtime = useCallback(
  (xInt) => {
    if (allData.indexMapSunData[xInt]) {
      // TODO: 问题是，反方向移动时，到了前一天，但是不能更新为前一天的日出日落时间。
      setSunRiseSetData(allData.indexMapSunData[xInt])
    }
    // 渲染柱状图的高亮
    const newXInt = Math.floor(xInt / 2)
    if (newXInt !== lastHighlightXRef.current) {
      lineChartInstanceRef.current.dispatchAction({
        type: 'downplay',
        seriesIndex: [3, 4],
        dataIndex: lastHighlightXRef.current,
      })
    }
    lineChartInstanceRef.current.dispatchAction({
      type: 'highlight',
      seriesIndex: [3, 4],
      dataIndex: newXInt,
    })
    lastHighlightXRef.current = newXInt

    // 渲染当前时刻的气象
    setHourValue({
      temperature: array[xInt].temperature,
      wind: array[xInt].wind_describtion,
      sky: Weather_Type[array[xInt].sky_typ],
      hour: allData.formatTimeData[xInt],
    })
  },
  [allData]
)


// 根据scroll的距离，实时画出指针位置。
const reRenderCanvas = useCallback(
  (Y = 10, distance) => {
    if (lineCanvasRef.current && lineCanvasCtxRef.current) {
      const height = lineCanvasRef.current.height
      lineCanvasCtxRef.current?.clearRect(
        0,
        0,
        lineCanvasRef.current.width,
        height
      )
      const gradient = lineCanvasCtxRef.current.createLinearGradient(
        0,
        0,
        0,
        height
      )
      gradient.addColorStop(0, `rgba(37, 132, 250, 1)`)
      gradient.addColorStop(0.3, `rgba(37, 132, 250, 1)`)
      gradient.addColorStop(0.5, `rgba(37, 132, 250, 0)`)
      lineCanvasCtxRef.current.fillStyle = gradient

      const m = -(chartComputeRef.current.maxHeight / chartComputeRef.current.duration) // 斜率
      const b =
        (chartComputeRef.current.maxHeight * range?.max) /
        chartComputeRef.current.duration
      const top = (m * Y + b) + chartComputeRef.current.marginTop
      lineCanvasCtxRef.current.fillRect(9 + distance, top, 2, height)

      // 第二个圆（半径为10），带阴影。
      lineCanvasCtxRef.current.shadowColor = 'rgba(37, 132, 250, 0.2)' // 设置阴影颜色
      lineCanvasCtxRef.current.shadowBlur = 5 // 设置阴影模糊程度（可以不用重新设置）
      lineCanvasCtxRef.current.fillStyle = 'rgb(255, 255, 255)' // 设置填充颜色
      lineCanvasCtxRef.current.beginPath()
      lineCanvasCtxRef.current.arc(10 + distance, top, 10, 0, 2 * Math.PI)
      lineCanvasCtxRef.current.fill() // 填充圆
      // 第一个圆（半径为5）
      lineCanvasCtxRef.current.fillStyle = 'rgba(37, 132, 250, 1)' // 设置填充颜色
      lineCanvasCtxRef.current.beginPath()
      lineCanvasCtxRef.current.arc(10 + distance, top, 6, 0, 2 * Math.PI)
      lineCanvasCtxRef.current.fill() // 填充圆
    }
  },
  [array, range]
)


三、视频方案
1. 透明视频动画
常见的透明动画方案：

lottie(矢量动画)

svga

webp/apng(动图)

视频(webm,avi,mp4)

总结：

矢量动画(lottie)：压缩率高，体积效，但CPU占用高，不支持粒子特效。

svga: 体积小，效果好，但支持的特效少（性能优化会替换成svga）。

动图（apng/webp）：文件体积大，软解效率低。

视频：高压缩率，体积较小，解码效率高，支持特效多，但对透明度的支持有兼容性。

支持透明通道：avi, webm ，但兼容性不好。

不支持透明通道：mp4，但兼容性好。

解决：

H264编码格式的MP4文件每一帧解码出来是YUV，转为RGB后不带透明度，通过在视频中开设一片区域，存储透明度（0-255： 0时透明度为0，255时透明度为1）。播放视频时，通过WebGL Texture获取视频帧的纹理，将RGB通道和Alpha通道混合，从而实现透明视频。


characterRef.current = new (Vap as any)().play(Object.assign({}, {
        container: document.getElementById('character-voice-model'),
        canvas: document.getElementById('character-voice-model-canvas'),
        // src: '//activity.hdslb.com/blackboard/static/ZMONe4H7n4.mp4',
        src: `//activity.hdslb.com/blackboard/static/${CHARACTER_MP4[broadcaster]}.mp4`, // 锯齿
        config: {
          "info": {
            "aFrame": [0, 0, 444, 408],
            "rgbFrame": [445, 0, 444, 408],
            "f": 150,
            "fps": 30,
            "h": 408 / SCREEN_WIDTH_RATIO,
            "w": 444 / SCREEN_WIDTH_RATIO,
            "isVapx": 0,
            "v": 2,
            "videoH": 408,
            "videoW": 888,
          }
        },
        width: 148 * window.devicePixelRatio / SCREEN_WIDTH_RATIO, // 需要自适应
        height: 136 * window.devicePixelRatio / SCREEN_WIDTH_RATIO,
        fps: 30, // 视频帧数
        loop: true, // 是否循环
        beginPoint: 0, // 起始播放时间点
        accurate: true, // 精准模式
        mute: true,
      },  {type: 1}))
        .on('playing', () => {
          setVideoPlay(true)
        })
        .on('ended', () => {
          console.log('ended')
          characterRef.current?.destroy()
          characterRef.current = null
        })
        .on('pause', () => {
          setVideoPlay(false)
        })
        .on('error', () => {
          setVideoPlay(false)
          console.log('播放error')
        })
实现：

// 1. 创建和初始化上下文
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

// 2. 初始化顶点着色器和片元着色器，链接着色器并创建程序
const vertexShader = this.initVertexShader(gl); // 定义了一些变量
const fragmentShader = this.initFragmentShader(gl);
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

 // 顶点着色器
`attribute vec2 a_position; // 接受顶点坐标（[-1,1]）
   attribute vec2 a_texCoord; // 接受纹理坐标([0,1]) rgb的纹理坐标
   attribute vec2 a_alpha_texCoord; // 接受纹理坐标 a的纹理坐标
    // 传递给片元着色器
   varying vec2 v_alpha_texCoord; // 接受纹理坐标
   varying vec2 v_texcoord; // 传递纹理坐标给片元着色器,顶点和着色的桥梁
   void main(void){
      gl_Position = vec4(a_position, 0.0, 1.0); // 设置坐标  0.0, 1.0 补齐
      v_texcoord = a_texCoord; // 将纹理坐标传给片元着色器
      v_alpha_texCoord = a_alpha_texCoord; // 将纹理坐标传给片元着色器
   }`

// 片元着色器
// uniform变量来接收纹理对象中的像素数据
`
  varying vec2 v_texcoord;
  varying vec2 v_alpha_te xCoord;
  uniform sampler2D u_image_video;

  void main(void) {
      vec4 bgColor = vec4(texture2D(u_image_video, v_texcoord).rgb, texture2D(u_image_video, v_alpha_texCoord).r)
      gl_FragColor = bgColor;
  }
  `

// 3. 创建和绑定缓冲区对象
// https://www.cnblogs.com/goFlyer/p/16733604.html
function computeCoord(x: number, y: number, w: number, h: number, vw: number, vh: number) {
  // leftX rightX bottomY topY
  return [x / vw, (x + w) / vw, (vh - y - h) / vh, (vh - y) / vh];
}

const { videoW: vW, videoH: vH } = info;
const [rgbX, rgbY, rgbW, rgbH] = info.rgbFrame;
const [aX, aY, aW, aH] = info.aFrame;
// 纹理坐标转化
const rgbCoord = computeCoord(rgbX, rgbY, rgbW, rgbH, vW, vH);
const aCoord = computeCoord(aX, aY, aW, aH, vW, vH); // 計算
// 用来标明该从纹理图像的哪个部分采样

// 顶点坐标范围 [-1, 1]，
// 纹理坐标[0, 1]
const view = new Float32Array([
  ...[-1, 1, rgbCoord[0], rgbCoord[3], aCoord[0], aCoord[3]],
  ...[1, 1, rgbCoord[1], rgbCoord[3], aCoord[1], aCoord[3]],
  ...[-1, -1, rgbCoord[0], rgbCoord[2], aCoord[0], aCoord[2]],
  ...[1, -1, rgbCoord[1], rgbCoord[2], aCoord[1], aCoord[2]],
]);

this.vertexBuffer = gl.createBuffer(); // 创建缓冲区
gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer); // 将缓冲区绑定到webgl上
gl.bufferData(gl.ARRAY_BUFFER, view, gl.STATIC_DRAW); // 往buffer传数据

// 4. 将顶点数据和着色器关联
const size = view.BYTES_PER_ELEMENT;
// 找到 a_position 的位置，然后让这个地址能够使用缓存区数据。
const aPosition = gl.getAttribLocation(program, 'a_position'); // 输入值
gl.enableVertexAttribArray(aPosition);
gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, size * 6, 0); // 顶点着色器位置 0,1

// rgb 的纹理坐标
const aTexCoord = gl.getAttribLocation(program, 'a_texCoord');
gl.enableVertexAttribArray(aTexCoord);
gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, size * 6, size * 2); // rgb像素位置 2,3

// alpha 的纹理坐标
const aAlphaTexCoord = gl.getAttribLocation(program, 'a_alpha_texCoord');
gl.enableVertexAttribArray(aAlphaTexCoord);
gl.vertexAttribPointer(aAlphaTexCoord, 2, gl.FLOAT, false, size * 6, size * 4); // a通道位置 4,5


// 5. 获取当前帧，并作为纹理数据。
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // 翻转图像

const texture = gl.createTexture(gl); // 创建纹理对象
gl.activeTexture(gl.TEXTURE0); // 激活纹理单元0，存储纹理对象。
gl.bindTexture(gl.TEXTURE_2D, texture); // 纹理装进纹理单元0

// 将视频帧上传到纹理
gl.texImage2D(
  gl.TEXTURE_2D, // 目标纹理的类型
  0, // 纹理的 mipmap 级别
  gl.RGB, // 指定纹理数据的内部格式
  gl.RGB, // 指定像素数据的格式
  gl.UNSIGNED_BYTE, // 指定像素数据的类型，定义每个颜色分量的大小和格式
  video // 包含纹理数据的对象
); 

// 获取 u_image_video 位置
const sampler = gl.getUniformLocation(program, `u_image_video`);
// 向着色器中的 uniform 变量传值
gl.uniform1i(sampler, 0); // 将纹理单元0递给采样器

// run!
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);





2. mix-blend-mode: screen;




四、天气渐变
canvas实现渐变切换

const cubicEaseOut = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b
}

const draw = useCallback((fromCenter, fromBg, toCenter, toBg) => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
    const context = canvas.getContext('2d')
    const width = (canvas.width = 860)
    const height = (canvas.height = 860)
    // 如果fromCenter === toCenter
    let frames = 200
    if (
      String(fromCenter) === String(toCenter) &&
      String(fromBg) === String(toBg)
    ) {
      frames = 1
    }
    let start = 0
    const paint = () => {
      context.clearRect(0, 0, width, height)
      // 径向渐变主色：r, g, b数值
      const r = cubicEaseOut(
        start,
        fromCenter[0],
        toCenter[0] - fromCenter[0],
        frames
      )
      const g = cubicEaseOut(
        start,
        fromCenter[1],
        toCenter[1] - fromCenter[1],
        frames
      )
      const b = cubicEaseOut(
        start,
        fromCenter[2],
        toCenter[2] - fromCenter[2],
        frames
      )
      // 页面背景色渐变
      const rd = cubicEaseOut(start, fromBg[0], toBg[0] - fromBg[0], frames)
      const gd = cubicEaseOut(start, fromBg[1], toBg[1] - fromBg[1], frames)
      const bd = cubicEaseOut(start, fromBg[2], toBg[2] - fromBg[2], frames)

      const rgbFrom = `rgb(${r},${g},${b})`
      const rgbTo = `rgb(${rd}, ${gd}, ${bd})`

      const gradient = context.createRadialGradient(430, 430, 0, 430, 430, 430)
      gradient.addColorStop(0.3, rgbFrom)
      gradient.addColorStop(1, rgbTo)
      // 可以确定色值
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)
      // 持续变化
      start++
      if (start < frames) {
        requestAnimationFrame(paint)
      }
    }
    paint()
  }, [])
通过伪元素切换透明度

	const setLinearGradientColor = (from, to) => {
    gradientElementRef.current.style.setProperty('--start-gradient', from)
    gradientElementRef.current.style.setProperty('--end-gradient', to)

    if (from === to) {
      return
    }
    
    gradientElementRef.current.classList.add('gradient')
    setTimeout(() => {
      // 动画播完后，重置下次开始渐变的颜色为上次渐变后的。
      gradientElementRef.current.style.setProperty('--start-gradient', to)
      gradientElementRef.current.classList.remove('gradient')
    }, 2000)
  }
  
  // css
  &::before {
    background-image: var(--start-gradient);
    opacity: 1;
  }

  &::after {
    background-image: var(--end-gradient);
    opacity: 0;
  }

  &.gradient::before {
    opacity: 0;
    transition: opacity 2s; // 只有该类上才加transition，否则remove的时候还会播放。
  }

  &.gradient::after {
    opacity: 1;
    transition: opacity 2s;
  }


ps:  transition 不支持 background-image 属性 => 图片奏效，但是渐变色不奏效！

