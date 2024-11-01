'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Regions_Game', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      game: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Games', // Nome da tabela referenciada
          key: 'id',      // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      region: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Regions', // Nome da tabela referenciada
          key: 'id',        // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('RegionsGame');
  },
};
