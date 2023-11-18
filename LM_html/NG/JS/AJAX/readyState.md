<!-- xhr.readyState 是 XMLHttpRequest 对象的一个属性，用于表示当前请求的状态。该属性返回一个整数值，表示 XMLHttpRequest 对象的状态，可能的取值如下：

0（UNSENT）: XMLHttpRequest 对象已创建，但是 open() 方法尚未被调用。

1（OPENED）: open() 方法已经被调用，但是 send() 方法未被调用。这表示请求已经准备好被发送。

2（HEADERS_RECEIVED）: send() 方法已经被调用，且头部和状态已经可获得。这表示服务器已经收到请求，并发送回了响应头部。

3（LOADING）: 响应体部分正在被接收。如果 responseType 属性是 "text" 或空字符串，responseText 将包含已接收的部分数据。

4（DONE）: 整个请求过程已经完全完成。这时可以通过 status 和 statusText 获取最终的请求状态和状态文本，以及通过 response 和 responseText 获取服务器的响应数据。

通常在使用 XMLHttpRequest 对象时，会在 onreadystatechange 事件处理程序中检查 readyState 属性，以便根据请求的不同阶段执行相应的操作。 -->