import Post from "../models/post.model.js";
import User from "../models/user.model.js";


export class PostService{
    static  createPost(postData){
        const {title,content} = postData;
        const newPost = new Post({title,content});
        return newPost.save()
    }

    static updatePost(postId,updatedData){
        return Post.findByIdAndUpdate(postId, updatedData, { new: true });
    }

    static deletePost(postId){
        return Post.findByIdAndDelete(postId)
    }
}