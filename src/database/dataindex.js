//Importa e armazena o sequelize em uma constante
const Sequelize = require('sequelize');
const dbconfig = require('../../config/sequelizedb')
//Importa as configurações da biblioteca dotenv
require('dotenv').config()

/*Estabelece uma conexão com banco de dados utilizando-se das configurações estabelecidas no arquivo "sequelizedb"*/ 
const conection = new Sequelize(dbconfig);

//Adiciona os modelos para serem inicializados
const pokemon = require('../models/PokemonModel')(conection)
const pokemon_elements = require('../models/PokemonElementsModel')(conection)

/*Caso tenha sucesso na conexão retorna uma mensagem positiva em relação a conexão,
caso falhe retorna uma mensagem negativa e o erro ocorrido*/
async function connectToDatabase() {
    try {
        await conection.authenticate();
        console.log("Conectado com sucesso ao banco de dados pokedb");
    } catch (erro) {
        console.error("Falha ao se conectar ao banco de dados:", erro);
    }
}

connectToDatabase();


//Exporta o sequelize para que seja usado em outro arquivo
module.exports = conection;
