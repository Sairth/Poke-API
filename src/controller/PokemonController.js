const {Pokemon} = require('../models/PokemonModel')

const getpokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findAll()
        res.json(pokemon)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a acessar os Pokemon' })
    }
}

const getpokemonbyid = async (req, res) => {
    const id = req.params.id
    try {
        const pokemon = await Pokemon.findByPk(id)
        if (pokemon) {
            res.json(pokemon)
        } else {
            res.status(404).json({ error: 'Pokemon não encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error ao acessar o Pokemon' })
    }
}



module.exports = {getpokemon, getpokemonbyid}