'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    class Elements extends Model {}
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
        },{
            sequelize,
            modelName: 'Elements',
            tableName: 'Elements',
            timestamps: true,
        }
    )
    return Elements
}