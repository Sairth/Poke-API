'use strict'

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {}
        async checkPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                const bcrypt = require('bcrypt');
                user.password = await bcrypt.hash(user.password, 10);
            },
        },
    });

    return User;
};
