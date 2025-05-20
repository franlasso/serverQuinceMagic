import mongoose,{ trusted } from "mongoose";

const Schema = mongoose.Schema

const salonSchema = new Schema({
    nombreSalon:{
        type:String,
        unique:true,
        required:true
    },
    capacidadSalon:{
        type:Number,
        required:true
    },
    caracteristicasSalon:{
        type:String,
        required:true
    },
    costoSalon:{
        type:Number,
        required:true
    },
    imagenesSalon:{
        type:String,
        required:true
    },
})

export default mongoose.model("salon", salonSchema)