const express = require("express")
const app = express()
const PokemonRoutes = require("./routes/PokemonRoutes")
const ElementRoutes = require("./routes/ElementRoutes")
const GameRoutes = require("./routes/GameRoutes")
const GenerationRoutes = require("./routes/GenerationRoutes")
const GymRoutes = require("./routes/GymRoutes")
const RegionRoutes = require("./routes/RegionRoutes")
const port = 3000

app.use(express.json())
app.use('/pokemon', PokemonRoutes)
app.use('/element', ElementRoutes)
app.use('/game', GameRoutes)
app.use('/generation', GenerationRoutes)
app.use('/gym', GymRoutes)
app.use('/region', RegionRoutes)

app.listen(port, () => {
    console.log('Servidor rodando!')
})