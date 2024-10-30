//Importa e armazena o sequelize em uma constante
const Sequelize = require('sequelize');

//Importa as configurações da biblioteca dotenv
require('dotenv').config()

/*Estabelece uma conexão com o banco de dados inserido no arquivo .env 
com as especificações necessarias*/ 
const sequelize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT
    });

/*Caso tenha sucesso na conexão retorna uma mensagem positiva em relação a conexão,
caso falhe retorna uma mensagem negativa e o erro ocorrido*/
sequelize.authenticate()
    .then(function() {
        console.log("Conectado com sucesso ao banco de dados pokedb");
    })
    .catch(function(erro) {
        console.log("Falha ao se conectar ao banco de dados:", erro);
    });

//Exporta o sequelize para que seja usado em outro arquivo
module.exports = sequelize;
