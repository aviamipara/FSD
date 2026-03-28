//                 path module

//  Syntax :  
        
            //  basename()   -  filename + extention
            //  dirname()    -  path of file (folder)
            //  extname()    -  extention
            //  parse()      -  object of details

var pm=require("path")
var a="D:/LJ/abc.html"

console.log(pm.basename(a))
console.log(pm.dirname(a))
console.log(pm.extname(a))
console.log(pm.parse(a))
