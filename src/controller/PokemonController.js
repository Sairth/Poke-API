const { json, where } = require('sequelize')
const conection = require('../database/dataindex')
const Pokemon = require('../models/PokemonModel')(conection)
const PokemonElements = require ('../models/PokemonElementsModel')(conection)

const getallpokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findAll()
        res.json(pokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Ocorreu um erro ao acessar os pokemon'})
    }
}

const getpokemonbyid = async (req, res) => {
    const id = req.params.pokemon
    if(!id){
        return res.status(400).json({error: 'O id é um parâmetro obrigatório'})
    }
    try {
        const pokemon = await Pokemon.findByPk(id)
        if (pokemon) {
            res.json(pokemon)
        } else {
            res.status(404).json({ error: 'Pokemon não encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ocorreu um erro ao acessar o pokemon' })
    }
}

const getpokemonbyrarity = async (req,res)=>{
    const rarity = req.params.rarity
    if(!rarity){
        return res.status(400).json({error: 'A raridade é um parâmetro obrigatório'})
    }
    try{
        const pokemon = await Pokemon.findAll({
            where: {
                rarity:rarity
            }
        })
        if(pokemon.length > 0 ){
            return res.status(200).json(pokemon)
        }else{
            return res.status(404).json({error: 'Nenhum pokemon com essa raridade encontrado'})
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Ocorreu um erro ao se comunicar com o banco de dados'})
    }
}

const getpokemonbyregion = async(req,res) => {
    const region = req.params.region
    if(!region){
        return res.status(400).json({error: 'O id da região é obrigatório'})
    }
    try{
        const pokemon = await Pokemon.findAll({where: {region:region}})
        if(pokemon.length > 0){
            return res.status(200).json(pokemon)
        }else{
            return res.status(404).json({error: 'Nenhum pokemon encontrado com essa região'})
        }
    }catch(error){
        return res.status(500).json({error: 'Ocorreu um erro ao se comunicar com o banco de dados'})
    }
}

const getpokemonbygeneration = async(req,res) => {
    const generation = req.params.generation
    if(!generation){
        return res.status(400).json({error: 'O id da geração é obrigatório!'})
    }
    try{
        const pokemon = await pokemon({where: {generation:generation}})
        if(pokemon.length > 0){
            res.status(200).json(pokemon)
        }else{
            return res.status(404).json({error: 'Nenhum Pokemon encontrado desta geração'})
        }
    }catch(error){
        return res.status(500).json({error: 'Ocorreu um erro ao se comunicar com o banco de dados'})
    }
}

const getpokemonbyelement = async (req, res) => {
    const elementId = req.params.element
    if (!elementId) {
        return res.status(400).json({ error: 'O id do elemento é obrigatório' })
    }

    try {
        // Primeiro, buscamos todos os registros na tabela de relacionamento `pokemon_elements` onde `element` é igual ao `elementId`
        const relatedPokemonIds = await PokemonElements.findAll({
            where: { element: elementId },
            attributes: ['pokemon'], // Seleciona apenas o ID do Pokémon
        })

        // Extrai os IDs dos Pokémon dos resultados
        const pokemonIds = relatedPokemonIds.map(record => record.pokemon)

        if (pokemonIds.length === 0) {
            return res.status(404).json({ error: 'Nenhum Pokémon encontrado com esse elemento' })
        }

        // Em seguida, buscamos os Pokémon na tabela `Pokemon` cujos IDs estão na lista de `pokemonIds`
        const pokemons = await Pokemon.findAll({
            where: {
                id: pokemonIds
            }
        })

        return res.status(200).json(pokemons)
    } catch (error) {
        return res.status(500).json({ error: 'Ocorreu um erro ao se comunicar com o banco de dados' })
    }
}

const getpokemonelementbyclassification = async (req, res) => {
    const elementId = req.params.element
    const classification = req.params.classification

    if (!elementId || !classification) {
        return res.status(400).json({ error: 'O id do elemento e a classificação são parâmetros obrigatórios' })
    }

    try {
        // Busca todos os registros na tabela de relacionamento `pokemon_elements`
        // onde `element` e `classification` correspondem aos valores fornecidos
        const relatedPokemonIds = await PokemonElements.findAll({
            where: {
                element: elementId,
                classification: classification
            },
            attributes: ['pokemon'], // Seleciona apenas o ID do Pokémon
        })

        // Extrai os IDs dos Pokémon dos resultados
        const pokemonIds = relatedPokemonIds.map(record => record.pokemon)

        if (pokemonIds.length === 0) {
            return res.status(404).json({ error: 'Nenhum Pokémon encontrado com esse elemento e classificação' })
        }

        // Busca os Pokémon na tabela `Pokemon` cujos IDs estão na lista de `pokemonIds`
        const pokemons = await Pokemon.findAll({
            where: {
                id: pokemonIds
            }
        })

        return res.status(200).json(pokemons)
    } catch (error) {
        return res.status(500).json({ error: 'Ocorreu um erro ao se comunicar com o banco de dados' })
    }
}



module.exports = {
    getallpokemon,
    getpokemonbyid,
    getpokemonbyrarity,
    getpokemonbyregion,
    getpokemonbygeneration,
    getpokemonbyelement,
    getpokemonelementbyclassification
}