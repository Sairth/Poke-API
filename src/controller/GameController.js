const {json, where} = require('sequelize')
const conection = require('../database/dataindex')
const games = require('../models/GamesModel')(conection)
const region_game = require('../models/RegionsGameModel')(conection)

const getgames = async(req, res) => {
    try{
        const allgames = await games.findAll()
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
        const game = await games.findByPk()
        if(!game){
            return res.status(404).json({error: 'Jogo não encontrado!'})
        }
        return res.status(200).json(game)
    }catch(error){
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgamebyreleasedate = async(req, res) =>{
    const releaseraw = req.params.release
    if (isNaN(Date.parse(releaseraw))) {
        return res.status(400).json({ error: 'Data inválida' });
    }
    if(!releaseraw){
        return res.status(400).json({error: 'A data de lançamento é um parametro obrigatório'})
    }
    const release = new Date(releaseraw);

    try{
        const game = await games.findAll({where: {release:release}})
        if(game.length === 0){
            return res.status(404).json({error: 'Nenhum jogo lançado nesta data'})
        }
        return res.status(200).json(game)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const getgamebyregion = async(req, res) =>{
    const region = req.params.region
    if(!region){
        return res.status(400).json({error: 'O id da região é um parâmetro obrigatório'})
    }
    try{
        const game = await region_game.findAll({where: {region:region}})
        if(game.length === 0){
            return res.status(404).json({error: 'nenhum jogo encontrado nesta região'})
        }
        return res.status(200).json(game)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Falha ao se comunicar com o banco de dados'})
    }
}

const createGame = async (req, res) => {
    const { name, description, release } = req.body;

    if (!name || !release) {
        return res.status(400).json({ error: 'Os campos "name" e "release" são obrigatórios' });
    }

    if (isNaN(Date.parse(release))) {
        return res.status(400).json({ error: 'A data de lançamento (release) é inválida' });
    }

    try {
        const newGame = await games.create({
            name,
            description,
            release: new Date(release),
        });

        return res.status(201).json(newGame);
    } catch (error) {
        console.error('Erro ao adicionar o jogo:', error);
        return res.status(500).json({ error: 'Falha ao adicionar o jogo no banco de dados' });
    }
};

module.exports = {
    getgames,
    getgamebyid,
    getgamebyreleasedate,
    getgamebyregion,
    createGame
}