'use strict'

const {Model,DataTypes} = require('sequelize')

module.exports = (sequelize) => {
        class ElementsRelation extends Model {
            static associate(models) {
                ElementsRelation.belongsTo(models.Elements, {foreignKey: 'element', as: 'elementData'})
            }
        }
        ElementsRelation.init ({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            element_1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'ElementsModel',
                    key: 'id'
                }
            },
            element_2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'ElementsModel',
                    key: 'id'
                }
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
            modelName: 'ElementRelations',
            tableName: 'Elements_Relation',
            timestamps: true,
        }
    )
    return ElementsRelation 
}