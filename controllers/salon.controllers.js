import salonModel from "../models/salon.model.js"

const leerSalon = async (req,res)=>{
    try {
        const salon = await salonModel.find({})
        return res.status(200).json(salon)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
const createSalon = async(req,res)=>{
    try {
        const salon = new salonModel(req.body)
        await salon.save()
        return res.status(201).json(salon)
    } catch (error){
        console.error(error)
        return res.status(500).send(error)
    }
}
const consultarSalonbyId = async (req,res) =>{
    try {
        const id = req.params.id
        const salon = await salonModel.findById(id)
        return res.status(200).json(salon)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
} 
const modificarSalonById = async (req,res) => {
    try {
        const id = req.params.id
        const salonModificado = req.body
        await salonModel.findByIdAndUpdate(id,salonModificado)
        return res.status(200).json(salonModificado)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
const eliminarSalonById = async (req,res) => {
    try {
        const id = req.params.id
        await salonModel.findByIdAndDelete(id)
        return res.status(200).json({message: `salon eliminado con id ${id}`})
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
export default {createSalon, leerSalon, consultarSalonbyId, modificarSalonById, eliminarSalonById}