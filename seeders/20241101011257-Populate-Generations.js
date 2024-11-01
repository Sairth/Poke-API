'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Generations', [
      {
        name: 'Geração I',
        description: 'Introduz os 151 Pokémon originais.',
        region: 1, // Kanto
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração II',
        description: 'Introduz 100 novos Pokémon e a região de Johto.',
        region: 2, // Johto
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração III',
        description: 'Adiciona 135 novos Pokémon e a região de Hoenn.',
        region: 3, // Hoenn
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração IV',
        description: 'Introduz 107 novos Pokémon e a região de Sinnoh.',
        region: 4, // Sinnoh
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração V',
        description: 'Adiciona 156 novos Pokémon e a região de Unova.',
        region: 5, // Unova
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração VI',
        description: 'Introduz 72 novos Pokémon e a região de Kalos.',
        region: 6, // Kalos
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração VII',
        description: 'Adiciona 88 novos Pokémon e a região de Alola.',
        region: 7, // Alola
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Geração VIII',
        description: 'Introduz 89 novos Pokémon e a região de Galar.',
        region: 8, // Galar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Generations', null, {});
  },
};
