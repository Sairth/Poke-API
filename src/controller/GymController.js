const {json, where} = require('sequelize')
const conection = require('../database/dataindex')
const Gyms = require('../models/GymsModel')(conection)
const Elements = require('../models/ElementsModel')(conection)
const Regions = require('../models/RegionsModel')(conection)

const getallgym = async(req, res) =>{
    try{
        const gyms = await Gyms.findAll()
        if(gyms.length === 0){
            return res.status(404).json({error: 'Nenhum ginásio encontrado'})
        }
        return res.status(200).json(gyms)
    }catch(error){
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgymbyid = async(req, res)=>{
    const gymId = req.params.id
    if(!gymId){
        return res.status(400).json({error: 'O parâmetro id é obrigatório'})
    }
    try{
        const gym = await Gyms.findByPk(gymId)
        if(!gym){
            return res.status(404).json({error: 'Nenhum ginásio encontrado com este id'})
        }
        return res.status(200).json(gym)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com banco de dados'})
    }
}

const getgymbyelement = async(req, res)=>{
    const elementId = req.params.element
    if(!elementId){
        return res.status(400).json({error: 'O parâmetro id é obrigatório'})
    }
    try{
        const element = await Elements.findByPk(elementId)
        if(!element){
            return res.status(404).json({error: 'Não existe um elemento com este id!'})
        }
        const gym = await Gyms.findAll({where: {element:elementId}})
        if(gym.length === 0){
            return res.status(404).json({error: 'Nenhum ginásio com este elemento'})
        }
        return res.status(200).json(gym)
    }catch(error){
        return res.staus(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgymbyregion = async(req, res)=>{
    const regionId = req.params.region
    if(!regionId){
        return res.status(400).json({error: 'O id da região para buscar o jogo é obrigatório'})
    }
    try{
        const region = await Regions.findByPk(regionId)
        if(!region){
            return res.status(404).json({error: 'Não existe uma região com este id'})
        }
        const gyms = await Gyms.findAll({where:{region: regionId}})
        if(gyms.length === 0){
            return res.status(404).json({error: 'Nenhum ginásio pertecente a esta região encontrado'})
        }
        return res.status(200).json(gyms)
    }catch(error){
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

module.exports = {
    getallgym,
    getgymbyelement,
    getgymbyid,
    getgymbyregion
}