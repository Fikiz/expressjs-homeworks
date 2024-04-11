import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.post('/registration',UserController.register);
userRouter.post('/login', UserController.login);
userRouter.post('/logout', UserController.logout);