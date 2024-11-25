const { json, where } = require('sequelize')
const conection = require('../database/dataindex')
const Region = require('../models/RegionsModel')(conection)

const createRegion = async (req, res) => {
    const { name, description, teacher } = req.body;

    // Validação básica dos campos obrigatórios
    if (!name || !teacher) {
        return res.status(400).json({ error: 'Os campos "name" e "teacher" são obrigatórios' });
    }

    try {
        // Criar uma nova região
        const newRegion = await Region.create({
            name,
            description,
            teacher,
        });

        // Retornar a região criada
        return res.status(201).json(newRegion);
    } catch (error) {
        console.error('Erro ao adicionar a região:', error);
        return res.status(500).json({ error: 'Falha ao adicionar a região no banco de dados' });
    }
};

module.exports = {
    createRegion,
}