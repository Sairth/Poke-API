'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Elements', [
      {
        name: 'Fogo',
        description: 'Elemento de fogo, associado a ataques de chama.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Água',
        description: 'Elemento de água, associado a ataques aquáticos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Planta',
        description: 'Elemento da natureza, associado a plantas e terra.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elétrico',
        description: 'Elemento de eletricidade, associado a ataques de raios.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Psíquico',
        description: 'Elemento de poderes mentais e espirituais.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gelo',
        description: 'Elemento de frio e ataques de gelo.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dragão',
        description: 'Elemento associado a habilidades e ataques de dragão.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sombrio',
        description: 'Elemento associado à escuridão e à noite.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fada',
        description: 'Elemento de magia, associado a criaturas míticas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lutador',
        description: 'Elemento associado a artes marciais e força física.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Venenoso',
        description: 'Elemento de toxinas e ataques venenosos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Terra',
        description: 'Elemento associado à terra e ataques terrestres.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Voador',
        description: 'Elemento associado ao vento e habilidades aéreas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Inseto',
        description: 'Elemento associado a habilidades de insetos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pedra',
        description: 'Elemento associado a pedras e rochas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Metal',
        description: 'Elemento associado a ataques e defesas metálicas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fantasma',
        description: 'Elemento associado a poderes espirituais e fantasmas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Normal',
        description: 'Elemento associado a ataques gerais, sem elemento específico.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Elements', null, {});
  },
};
