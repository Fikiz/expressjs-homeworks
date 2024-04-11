import { PostService } from "../services/post.service.js";

export class PostController {
    static async create(req,res){
            const postData = req.body;
        try {
            const savedPost = await PostService.createPost(postData);
            res.status(201).json(savedPost);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
    static async update(req, res) {
         try {
            const updatedData = req.body
            const newData = await PostService.updatePost(
                req.params.id,
                updatedData
            )
          res.json(newData);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    
    static async delete(req,res){
      
        try {
            await PostService.deleteMovie(req.params.id);
            res.status(204)

        } catch (error) {
            res.status(404).json({msg:error.msg})
        }
    }
    
}