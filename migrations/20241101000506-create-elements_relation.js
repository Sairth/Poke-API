'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Elements_Relation', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      element1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements', // Nome da tabela referenciada
          key: 'id',          // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      element2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Elements', // Nome da tabela referenciada
          key: 'id',          // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      relation: {
        type: Sequelize.STRING(45), // Adicionando a nova coluna relation
        allowNull: false,            // Definindo como não nula
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
    await queryInterface.dropTable('Elements_Relation');
  },
};
