import { Schema,model } from "mongoose";


const postSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true
        },
        createdAt: {
            type: Date,
            default: Date.now
          },
          updatedAt: {
            type: Date,
            default: Date.now
          }
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);
const Post = model('posts', postSchema);

export default Post;