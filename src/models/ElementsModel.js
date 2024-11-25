'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    class Elements extends Model {
        static associate(models) {
            // Não precisa de associações aqui, já que é unidirecional
        }
    }
    
    Elements.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        modelName: 'Elements',
        tableName: 'elements',
        timestamps: true,
    });
    
    return Elements;
}