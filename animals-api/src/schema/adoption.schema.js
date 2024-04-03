import joi from 'joi';

export const adoptionSchema = joi.object({
    adopterName: joi.string().min(3).max(30).required(),
    email: joi.string(),
    animal: joi.string(),
    adoptionDate:joi.string().required(),
});
