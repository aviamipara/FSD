// type:
// validate:
// trim:
// lowercase:
// uppercase:
// match:
// min:
// max:
// minlength:
// maxlength:
// default:
// required:
// unique:
// enum:

const { Collection } = require("mongoose")

// defind a mongoose shema call user shema with the following skills and velidations
// 1.username req and must be betn 4-20 char lings , it should be trimed of any leading or trilling 
//   white spaces , it should be converted to uppercase before saving 
// 2.email req and must be unique a Collection
// 3.age must be a no betn 18 & 65
// 4.roll must be either user or admin and should default to user if not provided

const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Dval")
           .then(()=>{console.log("success")})
           .catch((err)=>{console.log(err)})

mg.pluralize(null)

const userSchema=new mg.Schema({
    username:{type:String,
        required:[true,'username is must'],
        trim:true,
        minlength:[4,'min length must be 4'],
        maxlength:[20,'min length must be 20'],
        uppercase:true},
    age:{type:Number,
        min:[18,"min age must be 18"],
        max:[18,"min age must be 18"]},
    email:{type:String,
        unique:[true,"Email must be unique"],
        required:true},
    role:{type:String,
        enum:['user','admin'],
        default:'user'
    }
})
const data=mg.model("data",userSchema)
const newdata=new data({username:"acbcd",age:20,email:"acb@gamil.com"})
newdata.save()
