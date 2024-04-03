import { animalSchema } from "../schema/animals.schema.js";
import { AnimalService } from "../service/animal.service.js";


export  class AnimalController {

    static async getAllAnimals(req, res) {
		try {
			const animal = await AnimalService.getAllAnimals();

			res.status(200).json(animal);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}
    static async getAnimalById(req, res) {
		try {
			const foundAnimal = await AnimalService.getAnimalById(req.params.id);

			res.json(foundAnimal);
		} catch (error) {
			res.status(404).json({ msg: error.message });
		}
	}
    static async createAnimal(req,res){
        try {
            
            const animalData = req.body;
			// validate 
			await animalSchema.validateAsync(animalData, {
				abortEarly: false,
			});
            const newAnimal = await AnimalService.createAnimal(animalData);

			//Return new movie
			res.status(201).json(animalData);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }
	static async updateAnimal(req,res){
		try {
			const updatedData = req.body;
			// validate
			await animalSchema.validateAsync(updatedData,{ abortEarly:false});

			const update = await AnimalService.updateAnimal(
				req.params.id,
				updatedData
			);

			res.json(update);
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	}
	static async deleteAnimal(req,res){
		try {
			await AnimalService.deleteAnimal(req.params.id)

			res.status(204)
		} catch (error) {
			res.status(404).json({msg: error.message})
		}
	}

    

	
}
