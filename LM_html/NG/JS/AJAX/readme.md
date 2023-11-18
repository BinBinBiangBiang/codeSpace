# ajax (async javascript and xml)


# XMLHtppRequest
- ajax状态
0（UNSENT）: XMLHttpRequest 对象已创建，但是 open() 方法尚未被调用。

1（OPENED）: open() 方法已经被调用，但是 send() 方法未被调用。这表示请求已经准备好被发送。

2（HEADERS_RECEIVED）: send() 方法已经被调用，且头部和状态已经可获得。这表示服务器已经收到请求，并发送回了响应头部。

3（LOADING）: 响应体部分正在被接收。如果 responseType 属性是 "text" 或空字符串，responseText 将包含已接收的部分数据。

4（DONE）: 整个请求过程已经完全完成。这时可以通过 status 和 statusText 获取最终的请求状态和状态文本，以及通过 response 和 responseText 获取服务器的响应数据。

- http status(http 状态)
1xx（Informational）： 信息性状态码，表示请求正在处理。

2xx（Successful）： 成功状态码，表示请求已成功被服务器接收、理解、并接受。

3xx（Redirection）： 重定向状态码，表示需要客户端采取进一步的操作来完成请求。

4xx（Client Error）： 客户端错误状态码，表示客户端提交的请求有错误。

5xx（Server Error）： 服务器错误状态码，表示服务器无法完成明显有效的请求。

以下是一些常见的HTTP状态码及其含义：

200 OK： 请求成功。服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。

201 Created： 已创建。请求成功并且服务器创建了新的资源。

204 No Content： 无内容。服务器成功处理请求，但没有返回任何内容。

400 Bad Request： 客户端请求的语法错误或无效请求。

401 Unauthorized： 未授权。请求要求身份验证。客户端需要提供有效的身份验证凭据。

403 Forbidden： 禁止访问。服务器理解请求，但拒绝执行它。

404 Not Found： 未找到。服务器找不到请求的资源。

500 Internal Server Error： 服务器内部错误。服务器遇到错误，无法完成请求。

503 Service Unavailable： 服务不可用。服务器当前无法处理请求，通常是临时的。