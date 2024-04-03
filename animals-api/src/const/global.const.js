import { Router } from "express";
import { animalRouter } from "../routes/animal.route.js";
import { adoptionRoute } from "../routes/adopted.route.js";


export const globalRouter = Router();

globalRouter.use('/animal', animalRouter);
globalRouter.use('/adoption', adoptionRoute);