'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Regions_Game', [
      // Kanto
      { game: 1, region: 1, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Red
      { game: 2, region: 1, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Blue
      { game: 3, region: 1, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Yellow
      { game: 10, region: 1, createdAt: new Date(), updatedAt: new Date() }, // Pokémon FireRed
      { game: 11, region: 1, createdAt: new Date(), updatedAt: new Date() }, // Pokémon LeafGreen

      // Johto
      { game: 4, region: 2, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Gold
      { game: 5, region: 2, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Silver
      { game: 6, region: 2, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Crystal
      { game: 15, region: 2, createdAt: new Date(), updatedAt: new Date() }, // Pokémon HeartGold
      { game: 16, region: 2, createdAt: new Date(), updatedAt: new Date() }, // Pokémon SoulSilver

      // Hoenn
      { game: 7, region: 3, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Ruby
      { game: 8, region: 3, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Sapphire
      { game: 9, region: 3, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Emerald
      { game: 20, region: 3, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Omega Ruby
      { game: 21, region: 3, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Alpha Sapphire

      // Sinnoh
      { game: 12, region: 4, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Diamond
      { game: 13, region: 4, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Pearl
      { game: 14, region: 4, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Platinum

      // Unova
      { game: 17, region: 5, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Black
      { game: 18, region: 5, createdAt: new Date(), updatedAt: new Date() }, // Pokémon White
      { game: 19, region: 5, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Black 2
      { game: 20, region: 5, createdAt: new Date(), updatedAt: new Date() }, // Pokémon White 2

      // Kalos
      { game: 22, region: 6, createdAt: new Date(), updatedAt: new Date() }, // Pokémon X
      { game: 23, region: 6, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Y

      // Alola
      { game: 24, region: 7, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Sun
      { game: 25, region: 7, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Moon
      { game: 26, region: 7, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Ultra Sun
      { game: 27, region: 7, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Ultra Moon

      // Galar
      { game: 28, region: 8, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Sword
      { game: 29, region: 8, createdAt: new Date(), updatedAt: new Date() }, // Pokémon Shield
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Regions_Game', null, {});
  }
};
