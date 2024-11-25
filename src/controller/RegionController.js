const { json, where } = require('sequelize')
const conection = require('../database/dataindex')
const Region = require('../models/RegionsModel')(conection)

const getallregions = async(req, res) =>{
    try{
        const regions = await Region.findAll()
        if(regions.length === 0){
            return res.status(404).json({error: 'Nenhuma região econtrada'})
        }
        return res.status(200).json(regions)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getregionbyid = async(req, res) => {
    const regionId = req.params.region
    if(!regionId){
        return res.status(400).json({error: 'O parâmentro id é obrigatório'})
    }
    try{
        const region = await Region.findByPk(regionId)
        if(!region){
            return res.status(404).json({error: 'Nenhuma região com esse id encontrada'})
        }
        return res.status(200).json(region)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const createRegion = async (req, res) => {
    const { name, description, teacher } = req.body;

    // Validação básica dos campos obrigatórios
    if (!name || !teacher) {
        return res.status(400).json({ error: 'Os campos "name" e "teacher" são obrigatórios' });
    }

    try {
        // Criar uma nova região
        const newRegion = await Region.create({
            name,
            description,
            teacher,
        });

        // Retornar a região criada
        return res.status(201).json(newRegion);
    } catch (error) {
        console.error('Erro ao adicionar a região:', error);
        return res.status(500).json({ error: 'Falha ao adicionar a região no banco de dados' });
    }
};

module.exports = {
    createRegion,
    getallregions,
    getregionbyid
}