import { Schema,model } from "mongoose";

const adoptionSchema = new Schema(
    {
        adopterName: {
            type:String,
            required:[true,'Name is required'],
            minlenght:3,
            maxlenght:30,
        },
        email:{
            type: String,
        },
        animal:[
            {
				type: Schema.Types.ObjectId, 
				ref: 'animals',
			},
        ],
        adoptionDate:{
           type: String,
           required:[true, 'Adoption date is required']
        }
    }
)

// Create the Cinema model from the schema and export it
const Adoption = model('adoptions', adoptionSchema);

export default Adoption ;
