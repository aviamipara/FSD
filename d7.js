//defind a mongoose schema called user schema with the followibng skills 

// 1. email : the feild is mendotory it shouuld be valideted to enssure it contains a valid email 
//            address formet if the provided email is invalid the error massage should indicat that 
//            the email address is not valid 

// 2. product : this feild is medotory it should only allowed alpha numeric char if the product contains 
//              invalid char thr error massage should indicate that is is not valid

// 3. name : this feild is mendetory and contain char 3-15 length only it shoult convert in lowercase before
//           entring into database 

const mg=require("mongoose")
var v=require("validator")
mg.connect("mongodb://127.0.0.1:27017/val2")
           .then(()=>{console.log("success")})
           .catch((err)=>{console.log(err)})

mg.pluralize(null)

const userSchema=new mg.Schema({
    email:{type: String ,
        required:[true,'Email is Mandetory'],
        unique:[true,'Email must be unique'],
        validate:[v.isEmail,'This is not valid Email Address']
    },
    product:{type:String,
        required:true,
        validate:[v.isAlphanumeric,'This is not Alphanumeric Code']
    },
    name:{type:String,
        minliength:[4,'minimum length of name must be 4'],
        maxliength:[12,'maximum length of name must be 12'],
        lowercase:true
    }
})

const user=mg.model("user",userSchema)
const userdata=new user({product:"abcd",email:"abc@gamil.com",name:"abc"})
const userdata1=new user({product:"abcd",email:"abcgamil.com",name:"abc"})
userdata.save()
userdata1.save()
