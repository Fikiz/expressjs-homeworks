import { Router } from "express";
import { PostController } from "../controller/post.controller.js";

export const postRouter = Router();

postRouter.post('/',PostController.create);
postRouter.put('/:id',PostController.update);
postRouter.delete('/:id',PostController.delete);
