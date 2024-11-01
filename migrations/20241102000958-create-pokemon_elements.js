'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemon_Elements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pokemon: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pokemon', // Nome da tabela referenciada
          key: 'id',        // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      element: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements', // Nome da tabela referenciada
          key: 'id',         // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      classification: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PokemonElements');
  },
};
