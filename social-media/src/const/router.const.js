import { Router } from "express";
import { userRouter } from "../routes/user.router.js";
import { postRouter } from "../routes/post.router.js";

export const globalRouter = Router()

globalRouter.use('/users',userRouter);
globalRouter.use('/posts',postRouter);