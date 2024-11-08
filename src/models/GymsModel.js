'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
        class Gyms extends Model {
            static associate(models){
                Gyms.belongsTo(models.Elements, {foreignKey: 'element', as: 'elementData'})
                Gyms.belongsTo(models.Regions, {foreignKey: 'region', as: 'regionsData'})
            }
        }
        Gyms.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            element: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Elements',
                    key: 'id',
                }
            },
            region : {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Regions',
                    key: 'id'
                }
            },
            city: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            leader: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            insignia: {
                type: DataTypes.STRING(45),
                allowNull: true,
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
            modelName: 'Gyms',
            tableName: 'Gyms',
            timestamps: true
        }
    )
    return Gyms
}