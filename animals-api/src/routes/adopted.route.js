import { Router } from "express";
import { AdoptionController } from "../controller/adoption.controller.js";

export const adoptionRoute = Router()


adoptionRoute.get('/', AdoptionController.getAdoptedAnimals);
adoptionRoute.post('/',AdoptionController.newAdoption);