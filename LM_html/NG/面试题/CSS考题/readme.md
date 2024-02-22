# 1. 说说你对css盒模型的理解
1. 是什么？
浏览器在页面布局时，将所有的元素表示为一个个矩形盒子，每一个盒子包含四个部分：content, padding, border, margin

2. 标准盒模型
盒子总宽度：width + padding + border + margin

3. 怪异盒模型(IE)
盒子总宽度: width + margin

# 2. css中的选择器有哪些？说说优先级
1. id选择器
2. 类名选择器
3. 标签选择器
4. 后代选择器
5. 子级选择器
6. 相邻兄弟选择器
7. 群组选择器

8. 属性选择器
9. 伪元素选择器
10. 伪类选择器

!important > 内联 > id选择器 > 类名选择器 > 标签选择器

# 3. 说说css中的单位有哪些？
1. px : 像素单位，屏幕上的发光点
2. rem : 相对单位，相对于跟字体大小
3. em : 相对单位，用于字体上会继承父容器的字体大小，用在它处，是相对于当前容器自己的字体大小来定的
4. vw/vh : 相对单位，相对于窗口宽高比
5. % : 相对单位，相对于父容器

# 4. 说说设备像素，css像素，设备独立像素，dpr，ppi之间的区别？
1. pc端 1px == 1个物理像素
2. 页面缩放比为1:1=时， 1px == 1个物理像素

设备像素 === 物理像素
css像素 === 1px
设备独立像素 === 分辨率
dpr(设备像素比) === 设备像素 / 设备独立像素
ppi === 像素的密度

# 5. css中有哪些方式可以隐藏页面元素？区别是什么？

1. display: none 脱离文档流 无法响应事件 回流重绘
2. visibility: hidden 占据文档流 无法响应事件 重绘
3. opacity: 0 占据文档流 响应事件 重绘 || 不重绘
4. position: absolute 脱离文档流 无法响应事件 回流重绘
5. clip-path: circle(0%) 占据文档流 无法响应事件 重绘


# 6. 谈谈你对BFC的理解
- 是什么
  块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则
  1. BFC容器在计算高度时，浮动元素的高度也会计算在内
  2. BFC容器外的元素不会影响BFC容器内部元素的布局
  3. BFC容器内的子元素的margin-top不会和BFC这个父容器发成重叠
  4. 遵照从上往下从左往右的布局排列

- 触发条件
  1. float：当元素的 float 属性值不是 none 时，该元素会创建一个新的BFC。

  2. position：当元素的 position 属性值为 absolute 或 fixed 时，也会创建一个新的BFC。

  3. display：设置以下特定的 display 属性值也会触发BFC：

  inline-block
  table-cell
  table-caption
  flex 或 inline-flex （Flex布局）
  grid 或 inline-grid （Grid布局）

  4. overflow：当元素的 overflow 属性值不是 visible 时，即设置为 auto、scroll 或者 hidden，也可以创建一个新的BFC

# 7. 如何让元素水平垂直居中

--------------------------------------------------------------------------------------------------------------------------
      1. Flex布局（Flexible Box Layout）

      .container {
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
      }
      在容器（.container）上设置 display: flex; 并使用 justify-content 和 align-items 属性可以轻松实现子元素的水平和垂直居中。

--------------------------------------------------------------------------------------------------------------------------
      2. Grid布局

      .container {
        display: grid;
        place-items: center; /* 简写形式同时水平和垂直居中 */
      }
      Grid布局也可以方便地实现居中对齐，通过 place-items 或分别设置 align-items 与 justify-content 来实现。
--------------------------------------------------------------------------------------------------------------------------

      3. 绝对定位 + translate

      .container {
        position: relative;
      }
      .element {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      使用绝对定位配合 transform 属性将元素的顶部和左边位置设置为父容器的50%，然后通过 translate 函数负偏移自身宽度和高度的一半来达到居中效果。
--------------------------------------------------------------------------------------------------------------------------

      4. 表格单元格模拟居中

      .container {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
      将容器设为 display: table-cell; 类型，并设置 vertical-align 和 text-align 属性，可实现内容的垂直和水平居中。
--------------------------------------------------------------------------------------------------------------------------

      5. 行内块级元素与line-height 对于单行文本水平垂直居中，如果元素是行内块级（inline-block），且高度已知：

      .container {
        text-align: center;
      }
      .element {
        display: inline-block;
        vertical-align: middle;
        line-height: height; /* 高度等于line-height值 */
      }
--------------------------------------------------------------------------------------------------------------------------


      6. 伪元素辅助居中 创建一个伪元素作为占位符，并利用它进行居中对齐：

      .container:before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .element {
        display: inline-block;
        vertical-align: middle;
      }
--------------------------------------------------------------------------------------------------------------------------


      7. CSS Grid布局 如果支持CSS Grid，可以简化居中操作：

      .container {
        display: grid;
        place-items: center;
      }
--------------------------------------------------------------------------------------------------------------------------


      8. calc()与margin auto 对于已知宽度或高度的块级元素，可以结合 position: absolute; 和 margin: auto; 实现居中：

      .element {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100px; /* 具体宽度 */
        height: 100px; /* 具体高度 */
      }
--------------------------------------------------------------------------------------------------------------------------

# 8. 三栏布局怎么实现？
--------------------------------------------------------------------------------------------------------------------------
      1. 浮动 (Float)

      将左栏和右栏设置为 float: left 和 float: right。
      中间栏放置在最后，并设置合适的 margin-left 和 margin-right 来确保两侧有空间给左右两栏。
      Flexbox 布局
--------------------------------------------------------------------------------------------------------------------------

      2. 设置父容器为 display: flex; 并使用 flex-wrap: nowrap; 以保持一行显示。
      左栏和右栏可以设置固定的 flex-basis 或 width，中间栏设置 flex-grow: 1; 来占据剩余空间。

      .container {
        display: flex;
        flex-wrap: nowrap;
      }

      .left-col,
      .right-col {
        flex-basis: 200px; /* 或 width: 200px; */
      }

      .middle-col {
        flex-grow: 1;
      }
--------------------------------------------------------------------------------------------------------------------------


      3. Grid 布局
      - 使用 CSS Grid 可以非常方便地创建三栏布局：
      .container {
        display: grid;
        grid-template-columns: 200px auto 200px; /* 左侧栏和右侧栏宽度固定为200px，中间栏自动填充剩余空间 */
      }

      .left-col {
        grid-column: 1 / 2;
      }

      .middle-col {
        grid-column: 2 / 3;
      }

      .right-col {
        grid-column: 3 / 4;
      }
--------------------------------------------------------------------------------------------------------------------------


      4. 绝对定位 (Position Absolute)

      父容器需要设置 position: relative，左右栏通过 position: absolute 分别定位在左边和右边，中间栏设置适当的 margin 来留出空间。
--------------------------------------------------------------------------------------------------------------------------
      
      5. 圣杯布局 (Holy Grail Layout) 或 双飞翼布局

      这两种布局利用负边距和相对定位来实现三栏布局，尤其是当要求中间栏优先加载时特别有用。这两种方法比较复杂，通常涉及更多的 HTML 结构和 CSS 技巧。

      在圣杯布局中，通常的 HTML 结构是这样的：

      Html
      <div class="container">
        <div class="middle">中间栏</div>
        <div class="left">左侧栏</div>
        <div class="right">右侧栏</div>
      </div>


      CSS 部分会用到负边距和相对定位技巧：

      1. 容器：设置 padding-left 和 padding-right 为左右栏的宽度，创建出中间栏的空间。
      2. 中间栏：先放入文档流，使其首先加载并填充父容器的内容区域。
      3. 左侧栏与右侧栏：使用 float: left 或者 float: right 并结合负 margin 技巧来移动到相应的位置。同时需要给左右栏添加 position: relative 并通过 left 或 right 属性来精确对齐。

      例如：
      Css
      .container {
        padding-left: 200px; /* 左侧栏宽度 */
        padding-right: 200px; /* 右侧栏宽度 */
      }

      .middle {
        float: left;
        width: 100%;
      }

      .left {
        float: left;
        width: 200px;
        margin-left: -100%; /* 移动到左边，并覆盖掉部分自己的宽度，让中间栏占据视觉焦点 */
        position: relative;
        left: -200px; /* 让其靠左显示 */
      }

      .right {
        float: right;
        width: 200px;
        margin-right: -200px; /* 移动到右边 */
        position: relative;
        right: -200px; /* 让其靠右显示 */
      }


      双飞翼布局:

      双飞翼布局同样是基于负边距和相对定位原理，但它的主要区别在于处理中间栏被左右栏遮挡的方法不同。该布局可能会包含一个额外的内部容器来包裹中间栏的内容，以避免左右栏内容直接覆盖到中间栏上。

      HTML 结构可能类似于这样：

      Html
      <div class="container">
        <div class="inner-wrap">
          <div class="middle">中间栏内容</div>
        </div>
        <div class="left">左侧栏</div>
        <div class="right">右侧栏</div>
      </div>


      CSS 中，双飞翼布局的核心思路是：

      1. 中间栏：依旧采用浮动或 Flexbox 等方式使其自适应宽度，但中间栏的实际内容会被包裹在一个内层容器中，这个内层容器将防止左右栏内容覆盖。
      2. 左右栏：同样采用负边距和相对定位，但可能不会像圣杯布局那样用 -100% 的负边距，而是直接通过负值移动到正确位置。
      举例：

      Css
      .container {
        position: relative;
      }

      .inner-wrap {
        float: left;
        width: 100%;
        padding-left: 200px; /* 左侧栏宽度 */
        padding-right: 200px; /* 右侧栏宽度 */
      }

      .middle {
        width: 100%;
      }

      .left,
      .right {
        position: absolute;
        width: 200px;
      }

      .left {
        left: 0;
      }

      .right {
        right: 0;
      }
--------------------------------------------------------------------------------------------------------------------------
      
      6. 表格布局 (Table-based Layout)

      虽然不是现代最佳实践，但在一些特定情况下可以通过将元素设为表格单元格 (display: table-cell) 来模拟三栏布局。
--------------------------------------------------------------------------------------------------------------------------



# 9. 说说flexbox
- 是什么 是一种布局方式，可以简便完整响应式的实现页面布局，容器中默认存在两条轴，主轴，交叉轴，默认x轴为主轴，可以用flex-direction来修改主轴的方向

- 特征

  可以控制子元素在主轴上的对齐方式
  可以控制子元素在交叉轴上的对齐方式
  可以控制子元素 缩放比例， 排列顺序
  
- 应用场景

  多栏布局
  居中


# 10. css3新增了那些属性？
  1. 选择器： 属性选择器，伪类选择器
  2. box-shadow
  3. 裁剪： background-clip
  4. transition (过渡)
  5. transform
  6. animation （动画）
  6. 渐变色


# 11. css3中常见的动画有哪些？怎么实现？

- transition ： 当其他属性值发生变更时，控制该值变更所花费的时间以及变更曲线
- transform ： 用于做容器的旋转，平移，缩放，倾斜等动画
- animation ：控制容器动画的关键帧

# 12. 说说回流重绘 （重排重绘）
是什么 
- 回流：浏览器渲染页面之前需要对结构进行布局计算 重绘：将已经计算好布局的容器绘制出来

触发 
- 回流：页面上有容器的几何属性发生变更 重绘：容器非几何属性变更 （字体，颜色）

回流必定重绘



# 13. 什么是响应式？
- 是什么？
跟随用户设备尺寸的变化，页面实现自动的适配

- 实现方案
 1. flex （适用于某个容器内的响应式）】
 2. % 百分比 （常适用于外层大容器）  ---- 继承父容器的大小
 3. rem + 媒体查询 （可用于任何地方） ---- 虽然也要写多个媒体查询，但是每个媒体查询中的代码量少
 4. 媒体查询 （适用于任何地方） ---- 代码量多
 5. vw/vh (常使用于外层大容器) ---- 但是是相对于window大小


# 14. 视差滚动效果如何实现？
- 是什么？
多层背景以不同的速度进行移动，实现视差滚动效果

- 实现

background-attachment: fixed;
perspective + translateZ

15. css画一个三角形
16. 如何显示一个小于10px的文字
zoom
transform: scale(xxx);

