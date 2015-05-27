querystring.parse(str,[sep],[eq],[options])

  >querystring.parse('userName=lulingniu&age=40&sex=male');
{ username: 'lulingniu',
  age: '40',
  sex: 'male'}

  >querystring.parse('userName=lulingniu&age=40&sex=male','!')
{ userName: 'lulingniu&age=40&sex=male' }

  >querystring.parse('userName=lulingniu&age=40&sex=male','&')
{ userName: 'lulingniu',
  age: '40',
  sex: 'male' }

  >querystring.parse('userName=lulingniu&age=40&sex=male','&','=',{maxKeys:3})
{ username: 'lulingniu',
  age: '40',
  sex: 'male' }

  >querystring.parse('userName=lulingniu&interests=fishing&interests=reading')
{ userName: 'lulingniu',
  interests: [ 'fishing', 'reading' ] }


querystring.stringify(obj,[sep],[eq])

  >querystring.stringify({username:'lulingniu',age:'40',sex:'male'})
'username=lulingniu&age=40&sex=male'

  >querystring.stringify({username:'lulingniu',age:'40',sex:'male'},'&',':')
'username:lulingniu&age:40&sex:male'

  >querystring.stringify({username:'lulingniu',age:'40',sex:'male',interests:['fishing','reading']})
'username=lulingniu&age=40&sex=male&interests=fishing&interests=reading'

url.parse(urlStr,[parseQueryString])

  >url.parse('http://user:pass@host.com:8080/users/user.php?username=lulingniu&age=40&sex=male#name1')
{ protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#name1',
  search: '?username=lulingniu&age=40&sex=male',
  query: 'username=lulingniu&age=40&sex=male',
  pathname: '/users/user.php',
  path: '/users/user.php?username=lulingniu&age=40&sex=male',
  href: 'http://user:pass@host.com:8080/users/user.php?username=lulingniu&age=40&sex=male#name1' }

  >url.parse('http://user:pass@host.com:8080/users/user.php?username=lulingniu&age=40&sex=male#name1',true)
{ protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#name1',
  search: '?username=lulingniu&age=40&sex=male',
  query:
   { username: 'lulingniu',
     age: '40',
     sex: 'male' },
  pathname: '/users/user.php',
  path: '/users/user.php?username=lulingniu&age=40&sex=male',
  href: 'http://user:pass@host.com:8080/users/user.php?username=lulingniu&age=40&sex=male#name1' }
