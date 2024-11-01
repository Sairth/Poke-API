'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Regions', [
      {
        name: 'Kanto',
        description: 'Primeira região da franquia Pokémon, conhecida por seus 151 Pokémon originais.',
        teacher: 'Professor Oak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Johto',
        description: 'Região conhecida por sua rica cultura e a introdução de 100 novos Pokémon.',
        teacher: 'Professor Elm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hoenn',
        description: 'Região tropical com uma grande variedade de ambientes e Pokémon.',
        teacher: 'Professor Birch',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sinnoh',
        description: 'Região montanhosa com uma rica história mitológica e novos Pokémon.',
        teacher: 'Professor Rowan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Unova',
        description: 'Região inspirada em Nova Iorque, conhecida por sua diversidade de Pokémon.',
        teacher: 'Professor Juniper',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kalos',
        description: 'Região baseada na França, introduzindo Pokémon de tipo Fada.',
        teacher: 'Professor Sycamore',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alola',
        description: 'Região tropical que apresenta formas regionais de Pokémon.',
        teacher: 'Professor Kukui',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Galar',
        description: 'Região inspirada na Grã-Bretanha, conhecida por suas batalhas dinâmicas.',
        teacher: 'Professor Magnolia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
