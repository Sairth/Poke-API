'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemon', {
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
        type: Sequelize.TEXT, // TEXT para armazenar strings longas sem limite definido
        allowNull: true,
      },
      rarity: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      stage: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      region: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Regions', // Nome da tabela que esta chave estrangeira referencia
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      generation: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Generations', // Nome da tabela que esta chave estrangeira referencia
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      height: {
        type: Sequelize.FLOAT,
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemon');
  }
};
