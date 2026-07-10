//    Mongoose

// -- connect
// -- schema
// -- model
// -- crad

const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/D4")
           .then(()=>{console.log("success")})
           .catch((err)=>{console.log(err)})

mg.pluralize(null)

const mySchema=new mg.Schema({
    name:{type:String,require:true},
    surname:String,
    age:Number,
    date:{type:Date,default:new Date()}
})


const person=mg.model("person",mySchema)
const persondata=new person ({name:"abc",surname:"pqr",age:18})
persondata.save()
const persondata1=new person ({name:"def",age:20})
persondata1.save()


