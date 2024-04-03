import joi from 'joi';


export const animalSchema = joi.object(
    {
        name:joi.string().required().min(3).max(30),
        type:joi.string().valid('dog','cat'),
        breed: joi.string().required(),
        age: joi.number().required().integer(),
        status:joi.string().required().valid('Available','Adopted'),
        description:joi.string()
    }
)