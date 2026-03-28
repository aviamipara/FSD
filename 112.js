// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be 
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in 
// “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.



const http=require("http")
const url=require("url")
const fs=require("fs")


const url1="https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest"
const u=url.parse(url1,true)
c1=u.query["c1"]
c2=u.query["amp;c2"]
c3=u.query["amp;c3"]
hash=u.hash

fname="."+u.pathname
filecontent=c1+"!\n"+c3+" "+c2+"\n"+hash

fs.writeFileSync(fname,filecontent)
http.createServer((req,res)=>{
    if(req.url=="/"){
        data=fs.readFileSync(fname,"utf-8")
        res.writeHead(500,{"content-type":"text/html"})
        res.end("<h1 style='color:red'><pre>"+data+"<pre></h1>")
    }
}).listen(7000)