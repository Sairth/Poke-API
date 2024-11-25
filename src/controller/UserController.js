const jwt = require('jsonwebtoken');
const conection = require('../database/dataindex');
const User = require('../models/UserModel')(conection);
const { JWT_SECRET, JWT_EXPIRES } = process.env;

// Gerar Token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES,
    });
};

// Login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user || !(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = generateToken(user);
        res.status(200).json({ user: { id: user.id, username: user.username }, token });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Erro ao realizar login' });
    }
};

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Verifica se os campos necessários foram enviados
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Verifica se o usuário ou email já existem
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email já está em uso' });
        }

        // Cria o usuário
        const newUser = await User.create({ username, email, password });
        return res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o usuário' });
    }
};

