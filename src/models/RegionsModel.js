'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
        class Regions extends Model {}
        Regions.init({
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
            teacher: {
                type: DataTypes.STRING(45),
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
            modelName: 'Regions',
            tableName: 'regions'
        }
    )
    return Regions
}