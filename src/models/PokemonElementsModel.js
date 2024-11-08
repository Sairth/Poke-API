'use strict'

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
                class PokemonElements extends Model {
                        static associate(models){
                                PokemonElements.belongsTo(models.Pokemon,{foreignKey:'pokemon', as: 'pokemonData'})
                                PokemonElements.belongsTo(models.Elements, {foreignKey: 'element', as: 'elementData'})
                        }
                }
                PokemonElements.init({
                        id: {
                                type: DataTypes.INTEGER,
                                autoIncrement: true,
                                allowNull: false,
                                primaryKey: true,
                        },
                        pokemon: {
                                type: DataTypes.INTEGER,
                                allowNull: false,
                                references: {
                                        model: 'Pokemon',
                                        key: 'id',
                                }
                        },
                        element: {
                                type: DataTypes.INTEGER,
                                allowNull: false,
                                references: {
                                        model: 'Elements',
                                        key: 'id'
                                }
                        },
                        classification: {
                                type: DataTypes.INTEGER(1),
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
                        tableName: 'pokemon_elements',
                        modelName: 'PokemonElements',
                        timestamps: true,
                }
        )
        return PokemonElements
}