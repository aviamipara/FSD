const { default: mongoose } = require("mongoose");

// -->crud
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/D4")
.then(()=>{console.log("Success")})
.catch((err)=>{console.log(err)})
mg.pluralize(null)
const mySchema=new mg.Schema({
    name:{type:String,required:true},
    surname:String,
    age:Number,
    date:{type:Date,default:new Date()}
})
const person=mg.model("person",mySchema)
// const persondata=new person({name:"abc",surname:"pqr",age:18})
// persondata.save()
// const persondata1=new person({name:"def",age:20})
// persondata1.save()
const createDoc=async()=>{
    try{
        // const persondata2=new person({name:"xyz",age:20})
        // const persondata3=new person({name:"fsd"})
        // const result=await person.insertMany([persondata2,persondata3])
        // console.log(result)
        const updateResult=await person.updateOne(
            {name:"abc"},{$set:{age:29}},{upsert:true})
            console.log("updated Result is:",updateResult)
            const data=await person.findOne({name:"abc"})
            console.log("found person is:",data)
            console.log("id of fouond person is:",data._id)
        const udata=await person.findByIdAndUpdate(data._id,{age:40},{new:true})
        console.log("updated is:",udata)
        const deleteData=await person.findByIdAndDelete(data._id)
        console.log("deleted data is:",deleteData)

    }
    catch(err){
        console.log(err)
    }
}
createDoc()