import mongoose,{ trusted } from "mongoose";

const Schema = mongoose.Schema

const decoracionSchema = new Schema({
    decoracionTematica:{
        type:String,
        required:true
    },
    tipoDecoracion:{
        type:Number,
        required:true
    },
    decoracionSugerida:{
        type:String,
        required:true
    },
    valorDecoracionMin:{
        type:Number,
        required:true
    },
    valorDecoracionMax:{
        type:Number,
        required:true
    }
})
export default mongoose.model("decoracion", decoracionSchema)