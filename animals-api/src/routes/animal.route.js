import { Router } from "express";
import { AnimalController } from "../controller/animal.controller.js";


export const animalRouter = Router();

animalRouter.get('/',AnimalController.getAllAnimals);
animalRouter.get('/:id',AnimalController.getAnimalById);
animalRouter.post('/', AnimalController.createAnimal);
animalRouter.put('/:id',AnimalController.updateAnimal);
animalRouter.delete('/:id',AnimalController.deleteAnimal);