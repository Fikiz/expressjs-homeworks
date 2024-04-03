import { Schema, model } from "mongoose";

const animalSchema = new Schema(
    {
        name: {
			type: String,
			required: [true, 'Name is required'],
            minlenght:3,
            maxlength:30,
		},
        type: {
            type:String,
            required:true,
            enum:['cat','dog'],
        },
        breed:{
            type:String,
            required: true,
        },
        age: {
            type:Number,
            required:true,
            validate: {
                validator: Number.isInteger,
                message: 'Age is not an integer value',
            },
        },
        status: {
            type:String,
            required:true,
            enum:['Available', 'Adopted'],
        },
        description:{
            type:String,
        }
        
    },
    {
        timestamps: true,
    }
);
const Animal = model('animals', animalSchema);

export default Animal;