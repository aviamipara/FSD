//                                                 NodeJS-2

// URL module

// -- convert url into object

// Url.parse(url,boolean)

// -- to ignore depreation warnings

// process.noDeprecation=true
process.noDeprecation=true
url=require("url")

var addr="https://localhost:8080/abc.html?Name=Prof.AvirajAmipara&initial=AAM#mam"

var q=url.parse(addr)
console.log(q)

console.log(q.query)
console.log(typeof(q.query))

var q1=url.parse(addr,true)
console.log(q1)

console.log(q1.query.Name)