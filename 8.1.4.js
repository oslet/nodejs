http request header
method: get,post,put,delete
url: /,user/1,post/new/?param=value
headers: cookies,web browser info
httpVersion: 1.0,1.1
trailers: addplus http headers
socket: listen socket object

http response
content-type: 指定内容类型
location: 将客户端指向另一个url地址
content-disposition: 指定一个被下载的文件名
content-length: 指定服务器响应内容的字节数
set-cookie: 在客户端创建一个cookie
content-encoding: 指定服务端响应内容编码方式
cache-control: 用于开启缓存机制
expires: 用于指定缓存过期时间
etag: 指定当服务器端响应内容没有变化时不重新下载数据
