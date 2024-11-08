'use strict';

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
        class Pokemon extends Model {
            static associate(models){
                Pokemon.belongsTo(models.Regions, {foreignKey: 'region', as: 'regionData'})
                Pokemon.belongsTo(models.Generations, {foreignKey: 'generation', as: 'generationData'})
            }
        }

        Pokemon.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false,
            },
            name:{
                type:DataTypes.STRING(45),
                allowNull:false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            rarity: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            stage: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            region: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'RegionsModel',
                    key: 'id',
                }
            },
            generation: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'GenerationsModel',
                    key: 'id',
                }
            },
            weight: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            height: {
                type: DataTypes.FLOAT,
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
            modelName: 'Pokemon',
            tableName: 'Pokemon',
            timestamps: true,
        }
    )
    return Pokemon
}