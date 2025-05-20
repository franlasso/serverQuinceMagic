import decoracionModel from "../models/decoracion.model.js";

const leerDecoracion = async (req,res)=>{

    try {
        const decoracion = await decoracionModel.find({})
        return res.status(200).json(decoracion)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
const createDecoracion = async(req,res)=>{
    
    try {
        const decoracion = new decoracionModel(req.body)
        await decoracion.save()
        return res.status(201).json(decoracion)
    } catch (error){
        console.error(error)
        return res.status(500).send(error)
    }
}
const consultarDecoracionbyId = async (req,res) =>{
    try {
        const id = req.params.id
        const decoracion = await decoracionModel.findById(id)
        return res.status(200).json(decoracion)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
} 
const modificarDecoracionById = async (req,res) => {
    try {
        const id = req.params.id
        const decoracionModificada = req.body
        await decoracionModel.findByIdAndUpdate(id,decoracionModificada)
        return res.status(200).json(decoracionModificada)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
const eliminarDecoracionById = async (req,res) => {
    try {
        const id = req.params.id
        await decoracionModel.findByIdAndDelete(id)
        return res.status(200).json({message: `decoración eliminada con id ${id}`})
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
export default {leerDecoracion, createDecoracion, consultarDecoracionbyId, modificarDecoracionById, eliminarDecoracionById}