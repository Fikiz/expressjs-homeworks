import { adoptionSchema } from "../schema/adoption.schema.js";
import { AdoptionService } from "../service/adoption.service.js";
import Animal from "../model/animal.model.js";


export class AdoptionController {
    static async getAdoptedAnimals(req,res){
        try {
            const adoptedAnimal = await AdoptionService.getAdoptedAnimals();
            res.status(200).json(adoptedAnimal);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async newAdoption(req,res){
        try {
            const newData = req.body;
            // validate
            await adoptionSchema.validateAsync(newData,{abortEarly:false,});

            const newAdoption = await AdoptionService.newAdoption(newData);
            if(Animal.status === 'Adopted') throw new error('Can`t addopt this animal');

            res.status(201).json(newAdoption)

            
        } catch (error) {
            res.status(400).json({msg: error.message});
        }
    }
    // ///////////////////////////////////////////////
}