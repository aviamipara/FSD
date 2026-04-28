const e = require("express")
const expr=require("express")
const router=expr.Router()
module.exports=router

const mui=[{id:101,name:"abc",year:2021,rating:8.2},
           {id:102,name:"pqr",year:2022,rating:9.1},
           {id:103,name:"xyz",year:2025,rating:9.4}]

router.get("/",(req,res)=>{
    res.json(mui)
})

router.get("/:id",(req,res)=>{
    currmui=mui.filter((m)=>{
        if(m.id==req.params.id){
            return true
        }
    })
    if(currmui.length==1){
        res.json(currmui[0])
    }else{
        res.send("no data")
    }
})