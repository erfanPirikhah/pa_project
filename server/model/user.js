const validator=require('validator')

const {mongoose}=require('./../db/mongoose');

let UserSchema= new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate: {
            validator: validator.isEmail,
            message: '{Value} is not valid email'
        }
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

let User = mongoose.model('User',UserSchema);


module.exports={
    User
}