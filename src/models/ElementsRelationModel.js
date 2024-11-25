'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    class ElementsRelation extends Model {
        static associate(models) {
            ElementsRelation.belongsTo(models.Elements, {foreignKey: 'element1', as: 'element_1_data'})
            ElementsRelation.belongsTo(models.Elements, {foreignKey: 'element2', as: 'element_2_data'})
        }
    }
    ElementsRelation.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        element1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Elements',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        element2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Elements',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        relation: {
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
    }, {
        sequelize,
        modelName: 'ElementsRelation',
        tableName: 'elements_relation',
        timestamps: true,
    })
    return ElementsRelation 
}