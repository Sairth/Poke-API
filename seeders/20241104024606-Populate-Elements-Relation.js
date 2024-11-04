'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Elements_Relation', [
      // Relações existentes
      // Fogo é forte contra Planta
      { element1: 1, element2: 3, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Planta
      { element1: 1, element2: 14, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Inseto
      { element1: 1, element2: 2, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Fogo < Água
      { element1: 1, element2: 12, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Fogo < Pedra

      // Água é forte contra Fogo
      { element1: 2, element2: 1, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Fogo
      { element1: 2, element2: 12, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Terra
      { element1: 2, element2: 4, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Água < Elétrico
      { element1: 2, element2: 3, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Água < Planta

      // Planta é forte contra Água
      { element1: 3, element2: 2, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Água
      { element1: 3, element2: 12, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Terra
      { element1: 3, element2: 1, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Planta < Fogo
      { element1: 3, element2: 14, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Planta < Inseto

      // Elétrico é forte contra Água
      { element1: 4, element2: 2, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Água
      { element1: 4, element2: 12, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Elétrico < Terra

      // Sombrio é forte contra Psíquico
      { element1: 8, element2: 5, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Psíquico
      { element1: 8, element2: 9, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Sombrio < Fada

      // Dragão é forte contra Dragão
      { element1: 7, element2: 7, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Dragão > Dragão
      { element1: 7, element2: 9, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Dragão < Fada

      // Relações adicionais
      { element1: 1, element2: 9, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Fogo < Fada
      { element1: 2, element2: 9, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Fada
      { element1: 2, element2: 8, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Água < Sombrio
      { element1: 3, element2: 9, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Planta < Fada
      { element1: 3, element2: 11, relation: 'fraco', createdAt: new Date(), updatedAt: new Date() }, // Planta < Venenoso
      { element1: 4, element2: 14, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Voador
      { element1: 8, element2: 7, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Fantasma
      { element1: 9, element2: 7, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Dragão
      { element1: 9, element2: 8, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Sombrio

      // Relações faltantes
      // Fogo
      { element1: 1, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Venenoso
      { element1: 1, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Metal
      { element1: 1, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Fantasma
      { element1: 1, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fogo > Normal

      // Água
      { element1: 2, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Venenoso
      { element1: 2, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Metal
      { element1: 2, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Fantasma
      { element1: 2, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Água > Normal

      // Planta
      { element1: 3, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Venenoso
      { element1: 3, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Metal
      { element1: 3, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Fantasma
      { element1: 3, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Planta > Normal

      // Elétrico
      { element1: 4, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Venenoso
      { element1: 4, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Metal
      { element1: 4, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Fantasma
      { element1: 4, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Elétrico > Normal

      // Sombrio
      { element1: 8, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Venenoso
      { element1: 8, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Metal
      { element1: 8, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Fantasma
      { element1: 8, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Sombrio > Normal

      // Dragão
      { element1: 7, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Dragão > Venenoso
      { element1: 7, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Dragão > Metal
      { element1: 7, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Dragão > Fantasma
      { element1: 7, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Dragão > Normal

      // Fada
      { element1: 9, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Venenoso
      { element1: 9, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Metal
      { element1: 9, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Fantasma
      { element1: 9, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fada > Normal

      // Inseto
      { element1: 10, element2: 11, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Inseto > Venenoso
      { element1: 10, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Inseto > Metal
      { element1: 10, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Inseto > Fantasma
      { element1: 10, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Inseto > Normal

      // Venenoso
      { element1: 11, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Venenoso > Metal
      { element1: 11, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Venenoso > Fantasma
      { element1: 11, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Venenoso > Normal

      // Terra
      { element1: 12, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Terra > Venenoso
      { element1: 12, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Terra > Metal
      { element1: 12, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Terra > Fantasma
      { element1: 12, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Terra > Normal

      // Voador
      { element1: 14, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Voador > Venenoso
      { element1: 14, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Voador > Metal
      { element1: 14, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Voador > Fantasma
      { element1: 14, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Voador > Normal

      // Pedra
      { element1: 13, element2: 10, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Pedra > Venenoso
      { element1: 13, element2: 13, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Pedra > Metal
      { element1: 13, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Pedra > Fantasma
      { element1: 13, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Pedra > Normal

      // Metal
      { element1: 10, element2: 15, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Metal > Fantasma
      { element1: 10, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Metal > Normal

      // Fantasma
      { element1: 15, element2: 16, relation: 'forte', createdAt: new Date(), updatedAt: new Date() }, // Fantasma > Normal
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Elements_Relation', null, {});
  },
}; 