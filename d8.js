// write a node js script to defin a schema having feilds like name,age,gender and Email apply validations
// 1. name: feild must remove leading or triling spaces, min & max length should be 3 & 10 respectivly and 
//          name should be store in lowercase

//2 age : must accept a value > 0 

//3. perform Email validation on email feild 

//4. gender must accept values in uppercase only and allowed values are male and female


const mg=require("mongoose")
var v=require("validator")
mg.connect("mongodb://127.0.0.1:27017/val3")
           .then(()=>{console.log("success")})
           .catch((err)=>{console.log(err)})

mg.pluralize(null)

const users=new mg.Schema({
    name:{type:String,
        minliength:[3,'minimum length of name must be 3'],
        maxliength:[10,'maximum length of name must be 10'],
        trim:true,
        lowercase:true
    },
    age:{type:Number,
        min:[1," age must be > 0"],
    },
    email:{type: String ,
        required:[true,'Email is Mandetory'],
        unique:[true,'Email must be unique'],
        validate:[v.isEmail,'This is not valid Email Address']
    },
    gender:{type :String,
        required:[true,'Gender is Mandetory'],
        // uppercase:[v.isUppercase,'Gender Must be Uppercase and MAlE or FEMALE']
        enum:{values:['MALE','FEMALE'],message:'Gender Must be Uppercase and MAlE or FEMALE'},
        uppercase:true
    }
})

const user=mg.model("user",users)
const userdata=new user({name:"abcd",age:10,email:"abc156@gamil.com",gender:"MALE"})
const userdata1=new user({name:"abcde",age:10,email:"abcD522@gamil.com",gender:"male"})
userdata.save()
userdata1.save()
