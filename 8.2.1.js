var req=http.request(options,callback)

options:  为一个对象或字符串,若为字符串，将自动使用url.parse方法转换为一个对象，此对象可以指定属性如下
host: 用于指定域名或目标主机的ip地址，默认为localhost
hostname: 同host,若都有指定，优先使用此值
port: 指定目标服务器用于http客户端连接的端口号
localAddress:用于指定专用于网络连接的本地接口
socketPath:用于指定目标unix域端口
method:用于指定http请求方法，默认为get
path:用于指定请求路径及查询字符串，默认为/
headers:用于客户端请求头对象
auth:用于指定认证信息部分,例如"user: password"
agent:用于指定http代理
