# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
    pipeline(task,model)

- 数组和 hashTable|Dict
    - 相同点
        数据容器 线性 
    - 区别
        数组，Dict 和栈 队列 链表  => 线性    区别: 在内存空间中连续还是不连续 
        
        非线性 二叉树 图

- transformers 支持哪些nlp 任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict JS JSON
    for   in   循环    for 计数循环
    例子：
      for k, v in SUPPORTED_TASKS.items():
        print(k)

    订购书：图解HTTP协议
        计算机组成原理

- 读/写  操作系统 I/O 操作 Input到内存当中
  Output 到显示器中
      同步代码，会在微秒结束 也会涉及到从远程中传输到内存|硬盘当中
    
- 人生苦短，我用python
  - request 网络请求
  requests.get(url,stream=True).raw
  http 请求的方法 
  1.get--明文请求
  2.post 提交表单

  - PIL库 图片的读写等...
    Image  读
    ImageDraw  写
     




------------------------------------------------------------------------------------------------------------------------
Image.open(requests.get(url,stream=True).raw)
  代码解释：
  requests.get(url, stream=True)：这部分代码使用Python的第三方库requests来发送GET请求到指定的url，其中url是图像文件的远程地址。stream=True参数告诉requests以流的形式获取数据，而不是一次性下载整个文件，这有助于减小内存占用，特别是当处理大文件时。

  .raw：一旦请求成功，.raw属性允许你以二进制流的方式访问响应内容。这是因为图片文件是二进制数据，而不是文本数据。

  Image.open()：这部分代码是使用Python的Pillow库中的Image.open()函数来打开图像文件。Pillow是一个用于图像处理的库，类似于Python标准库中的PIL模块。Image.open()函数接受一个文件对象，然后返回一个图像对象，允许你对图像进行各种操作，如显示、保存、修改等。

  所以，这段代码的目的是从指定的URL下载远程图像文件，并使用Pillow库中的Image.open()函数来打开图像文件，以便进一步处理或显示。请确保在运行此代码之前，你已经安装了requests库和Pillow库。
------------------------------------------------------------------------------------------------------------------------



------------------------------------------------------------------------------------------------------------------------
from PIL import ImageDraw  # 写模块
draw = ImageDraw.Draw(img)

for prediction in predictions:
  box = prediction["box"]
  label = prediction["label"]
  score = prediction["score"]
  xmin,ymin,xmax,ymax = box.values() # 解构
  draw.rectangle((xmin,ymin,xmax,ymax),outline="red",width=1)
  draw.text((xmin,ymin),f"{label}:{round(score,2)}",fill="red")

img

从Pillow库中导入ImageDraw模块。

使用ImageDraw.Draw(img)创建一个ImageDraw对象，其中img是一个Pillow库的Image对象，表示你要绘制操作的图像。

使用for循环遍历predictions列表中的每个预测结果。每个预测包括一个矩形框的坐标（box）、标签（label）和分数（score）。

通过解构box字典的值，将矩形框的坐标（xmin, ymin, xmax, ymax）提取出来。这些值表示矩形的左上角和右下角坐标。

使用draw.rectangle()方法绘制矩形框。outline="red"指定矩形边框的颜色为红色，width=1指定边框的宽度为1像素。

使用draw.text()方法在矩形框的左上角位置绘制标签文本，包括标签和分数，使用fill="red"指定文本颜色为红色。

最后，返回修改后的图像。

在执行这段代码后，img对象将包含了绘制的矩形框和标签文本，你可以进一步保存或显示这个修改后的图像，或者进行其他后续操作。这段代码对于可视化目标检测或识别结果非常有用。
-----------------------------------------------------------------------------------------------------------------------





    