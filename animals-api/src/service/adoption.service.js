import Adoption from "../model/adoption.model.js";


export class AdoptionService {
    // get all adopted animals

    static getAdoptedAnimals(){
        let query = {};

        return Adoption.find(query);
    }

    static newAdoption(data){
        

        const newData = new Adoption(data);
        return newData.save();
    }
}