//Importa e armazena a biblioteca do express em uma constante
const express = require("express")

//Cria uma instancia do express e armazena na constante app
const app = express()

//Armazena a porta em uma constante
const port = 3000

//busca o arquivo das rotas e armazena em constantes
const PokemonRoutes = require("./routes/PokemonRoutes")
const ElementRoutes = require("./routes/ElementRoutes")
const GameRoutes = require("./routes/GameRoutes")
const ProtectedRoutes = require("./routes/ProtectedRoutes")
const UserRoutes = require("./routes/UserRoutes")
// const GenerationRoutes = require("./routes/GenerationRoutes")
// const GymRoutes = require("./routes/GymRoutes")
const RegionRoutes = require("./routes/RegionRoutes")

//Permite com que a aplicação interprete o corpo das requisições em formato json automaticamente
app.use(express.json())

//Define o inicio de cada rota
app.use('/pokemon', PokemonRoutes)
app.use('/element', ElementRoutes)
app.use('/game', GameRoutes)
app.use('/protected', ProtectedRoutes)
app.use('/auth', UserRoutes)
// app.use('/generation', GenerationRoutes)
// app.use('/gym', GymRoutes)
app.use('/region', RegionRoutes)

//Inicia o servidor na porta 3000
app.listen(port, () => {
    console.log('Servidor rodando!')
})