'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
            class RegionsGame extends Model {
                static associate(models){
                    RegionsGame.belongsTo(models.Games, {foreignKey: 'game', as: 'gameData'})
                    RegionsGame.belongsTo(models.Regions, {foreignKey: 'region', as: 'regionData'})
                }
            }
            RegionsGame.init({
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                game: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Games',
                        key: 'id'
                    }
                },
                region: {
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
                tableName: 'regions_game',
                modelName: 'RegionsGame'
            }
        )
        return RegionsGame
}