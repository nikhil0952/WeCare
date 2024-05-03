import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3, "First Name must contains at least 3 characters!"]
    },
    lastName:{
        type:String,
        required: true,
        minLength:[3, "last Name must contains at least 3 characters!"]
    },
    email:{
        type:String,
        required: true,
        validate: [validator.isEmail, "Please provie a valid email!"]
    },
    phone:{
        type:String,
        required: true,
        minLength:[10, "minimum 10 digits!"],
        maxLength: [10, "maximum 10 digits!"]
    },
    message:{
        type:String,
        required: true,
        minLength:[10, "message must contains at least 10 Characters!"]
    },
})

export const Message = mongoose.model("Message",messageSchema);