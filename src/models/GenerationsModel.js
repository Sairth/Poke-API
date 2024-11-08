'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    class Generations extends Model {
        static associate(models) {
            Generations.belongsTo(models.Regions, {foreignKey: 'region', as: 'regionsData'})
        }
    }
        Generations.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            region : {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Regions',
                    key: 'id'
                }
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
        },{
            sequelize,
            modelName: 'Generations',
            tableName: 'Generations',
            timestamps: true,
        }
    )
    return Generations
}