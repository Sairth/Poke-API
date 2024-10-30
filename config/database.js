const Sequelize = require('sequelize');

const sequelize = new Sequelize('pokedb', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(function() {
        console.log("Conectado com sucesso ao banco de dados pokedb");
    })
    .catch(function(erro) {
        console.log("Falha ao se conectar ao banco de dados:", erro); // Corrigido o operador de concatenação
    });

module.exports = sequelize;
