import menuModel from "../models/menu.model.js";

const leerMenu = async (req,res)=>{

    try {
        const menu = await menuModel.find({})
        return res.status(200).json(menu)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
const createMenu = async(req,res)=>{
    
    try {
        const menu = new menuModel(req.body)
        await menu.save()
        return res.status(201).json(menu)
    } catch (error){
        console.error(error)
        return res.status(500).send(error)
    }
}
const consultarMenubyId = async (req,res) =>{
    try {
        const id = req.params.id
        const menu = await menuModel.findById(id)
        return res.status(200).json(menu)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
} 
const modificarMenuById = async (req,res) => {
    try {
        const id = req.params.id
        const menuModificado = req.body
        await menuModel.findByIdAndUpdate(id,menuModificado)
        return res.status(200).json(menuModificado)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
const eliminarMenuById = async (req,res) => {
    try {
        const id = req.params.id
        await menuModel.findByIdAndDelete(id)
        return res.status(200).json({message: `menu eliminado con id ${id}`})
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
        
    }
}
export default {leerMenu, createMenu, consultarMenubyId, modificarMenuById, eliminarMenuById}