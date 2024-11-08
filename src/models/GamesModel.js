'use strict'

const {Model,DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    class Games extends Model{}
        Games.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name : {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            release: {
                type: DataTypes.DATEONLY,
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
        },{
            sequelize,
            modelName: 'Games',
            tableName: 'Games',
            timestamps: true,
        }
    )
    return Games
}