import Animal from "../model/animal.model.js";


export class AnimalService {
// getting all animals 
    static getAllAnimals(){
       let query = {};

       return Animal.find(query);
    }
// get animal by id
    static getAnimalById(animalId) {
		return Animal.findById(animalId);
	}
 
// create animal  
	static createAnimal(animalData) {
		const animal = new Animal(animalData);
        return animal.save();
	}
// update animal 
  static updateAnimal(animalId, updatedData){
    return Animal.findByIdAndUpdate(animalId, updatedData, { new: true });
  }
// delete animal 
  static deleteAnimal(animalId){
    return Animal.findByIdAndDelete(animalId);
  }
}