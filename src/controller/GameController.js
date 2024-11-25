const {json, where} = require('sequelize')
const conection = require('../database/dataindex')
const games = require('../models/GamesModel')(conection)

const getgames = async(req, res) => {
    try{
        const allgames = games.findAll()
        return res.status(200).json(allgames)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com os jogos'})
    }
}

const getgamebyid = async(req, res) =>{
    const id = req.params.id 
    if(!id){
        return res.status(400).json({error: 'O id do jogo é um parâmetro obrigatório!'})
    }
    try{
        const game = games.findByPk()
        if(!game){
            return res.status(404).json({error: 'Jogo não encontrado!'})
        }
        return res.status(200).json(game)
    }catch(error){
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgamebyreleasedate = async(req, res) =>{}

const getgamebyregion = async(req, res) =>{}

module.exports = {
    getgames,
    getgamebyid,
    getgamebyreleasedate,
    getgamebyregion,

}