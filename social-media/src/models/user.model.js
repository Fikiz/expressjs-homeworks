import { Schema, model } from "mongoose";



const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
       
    },
    {
        timestamps:true
    }
);
const User = model('users', userSchema);

export default User;
