const {json, where} = require('sequelize')
const conection = require('../database/dataindex')
const Elements = require('../models/ElementsModel')(conection)
const ElementsRelation = require('../models/ElementsRelationModel')(conection)

const getallelements = async(req, res) =>{
    try{
        const elements = await Elements.findAll()
        return res.status(200).json(elements)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Ocorreu um erro ao acessar os elementos'})
    }
}

const getelementbyid = async(req, res) => {
    const id = req.params.element
    if(!id){
        return res.status(400).json({error: 'O id do elemento é um parâmentro obrigatório'})
    }
    try{
        const element = await Elements.findByPk(id)
        if (element){
            return res.status(200).json(element)
        }else{
            res.status(404).json({error: 'Nenhum elemento com este id encontrado'})
        }
    }catch{
        console.log(error)
        return res.status(500).json({error: 'Ocorreu um erro ao acessar o elemento'})
    }
}

const getallelementsrelation = async(req, res) => {
    try{
        const elementrelation = await ElementsRelation.findAll();
        return res.status(200).json(elementrelation)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Ocorreu um erro ao se comunicar com o banco de dados'})
    }
}

const getrelationsforelement = async(req, res) => {
    const id  = req.params.element
    if(!id){
        return res.status(400).json({error: 'O id do elemento é um parâmetro obrigatório'})
    }
    try{
        const relations = await ElementsRelation.findAll({
            where: { element1: id },
            /* include: [{
                model: Elements,
                as: 'element_1_data',
                attributes: ['name']
            }, {
                model: Elements, 
                as: 'element_2_data',
                attributes: ['name']
            }] */
        })

        /* if (relations.length > 0) {
            const result = relations.map(relation => ({
                element1: relation.element_1_data.name,
                element2: relation.element_2_data.name,
                relation_type: relation.relation
            })) */
            return res.status(200).json(relations)
        /* } else {
            return res.status(404).json({error: 'Nenhuma relação encontrada para este elemento'})
        } */
    } catch(error) {
        console.log(error)
        return res.status(500).json({error: 'Ocorreu um erro ao acessar as relações do elemento'})
    }
}

const getelementsrelation = async(req, res) => {
    const element1 = req.params.element1
    const element2 = req.params.element2

    if(!element1 || !element2){
        return res.status(400).json({error: 'O id dos dois elementos é essencial!'})
    }
    try{
        const relation = await ElementsRelation.findAll({
            where:{element1:element1, element2:element2}
        })
        if(relation.length === 0){
            return res.status(404).json({error: 'Relação não encontrada'})
        }
        return res.status(200).json(relation)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao acessar a relação'})
    }
    
}

module.exports = {
    getallelements,
    getelementbyid,
    getallelementsrelation,
    getrelationsforelement,
    getelementsrelation

}