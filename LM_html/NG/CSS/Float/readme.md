# 块级
1. 默认占据一整行
2. 可以设置宽高

# 行内块
1. 可以同一行显示
2. 可以设置宽高


# 行内（简单的例子：a标签和span标签都是行内标签）
1. 可以同行显示
2. 不可以设置宽高

# 浮动
1. 脱离文档流(不占据浏览器的高度)
2. 文字环绕
3. 让块级元素同行显示
4. 浮动可以让行内元素可以设置宽高
5. 可以使用margin，但是不能使用margin:0 auto;

# 清除浮动
1. 给父容器设置高度
2. 在最后一个浮动元素后面添加新的元素，在新元素上做 清除浮动
3. 在容器伪元素after上做 清除浮动
4. 在下方被浮动影响的容器上做 清除浮动
5. BFC  (平时写代码使用最多)

# BFC 容器 Block Formatting Context 块级格式化上下文
- 哪些属性可以创建BFC:
1. float:left || right;
2. position: absolute || fixed
3. display:inline-block; （创建BFC，也不会使元素脱离文本流）
4. display:table-cell.... 大部分属性都可以
5. overflow:hidden(超出则隐藏) || auto（超出则自适应） || overly（超出则覆盖） || scroll（超出则滚动）

- BFC的特点：
1. BFC容器在计算高度时，会将浮动元素的高度也计算在内
2. 解决内外margin重叠问题
