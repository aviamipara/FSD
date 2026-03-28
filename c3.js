//

process.noDeprecation=true
url=require("url")

var addr="https://localhost:8080/abc.html?m1=50&m2=60&m3=70"


var q=url.parse(addr,true)

mk1=parseInt(q.query.m1)
mk2=parseInt(q.query.m2)
mk3=parseInt(q.query.m3)

avg= (mk1 + mk2 + mk3)/3

console.log(avg)