//  write a file with one json object having is name and place read the file and display users name in console 

let p={"name":"Aviraj","place":"Ankleshwer"}

ps= require("fs")
ps.writeFileSync("user3.txt",JSON.stringify(p))
let data=ps.readFileSync("user3.txt","utf-8")
data=JSON.parse(data)
console.log(data.name)