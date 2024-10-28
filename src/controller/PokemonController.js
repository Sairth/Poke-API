const getpokemon = (req, res) => {
    res.json([
        {id:1, nome:'Bulbassauro', elemento: ['Planta', 'Venenoso']},
        {id:2, nome:'Ivyssauro', elemento: ['Planta', 'Venenoso']},
        {id:3, nome:'Venossauro', elemento:['Planta', 'Venenoso']},
        {id: 4, nome: 'Charmander', elemento: ['Fogo']}
    ])
}

const getpokemonbyid = (req, res) => {
    const id = req.params.id
    res.json({id, nome: `Pokemon ${id}`})
}

module.exports = {getpokemon, getpokemonbyid}