import mongoose,{ trusted } from "mongoose";

const Schema = mongoose.Schema

const menuSchema = new Schema({
    menuTematica:{
        type:String,
    },
    tipoMenu:{
        type:String,
        required:true,
    },
    menuSugerido:{
        type:String,
        required:true
    },
    valorPersonaMenu:{
        type:Number,
        required:true
    },
    catering:{
        type:String
    },
    descripcionCatering:{
        type:String
    },
    condicionesCatering:{
        type:String
    }
})
export default mongoose.model("menu", menuSchema)
