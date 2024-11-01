'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gyms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      element: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Elements', // Nome da tabela referenciada
          key: 'id',         // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      region: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Regions', // Nome da tabela referenciada
          key: 'id',        // Coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      city: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      leader: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      insignia: {
        type: Sequelize.STRING(45),
        allowNull: true,
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
    await queryInterface.dropTable('Gyms');
  },
};
