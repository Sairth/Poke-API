const {json, where} = require('sequelize')
const conection = require('../database/dataindex')
const Generations = require('../models/GenerationsModel')(conection)

const getallgenerations = async(req, res)=>{
    try{
        const generations = await Generations.findAll()
        if(generations.length === 0){
            return res.status(404).json({error: 'Nenhuma geração encontrada'})
        }
        return res.status(200).json(generations)
    }catch(error){
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgenerationbyid = async(req, res)=>{
    const generationId = req.params.generation
    if(!generationId){
        return res.status(400).json({error: 'O parâmetro id é obrigatório'})
    }
    try{
        const generation = await Generations.findByPk(generationId)
        if(!generation){
            return res.status(404).json({error: 'Geração não encontrada'})
        }
        return res.status(200).json(generation)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

module.exports = {
    getallgenerations,
    getgenerationbyid
}