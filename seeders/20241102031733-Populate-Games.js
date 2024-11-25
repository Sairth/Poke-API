"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          name: "Pokémon Red",
          description: "Primeira versão do jogo, lançado para Game Boy.",
          release: "1996-02-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Blue",
          description:
            "Versão complementar a Pokémon Red, lançado para Game Boy.",
          release: "1996-02-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Yellow",
          description:
            "Versão especial inspirada no anime, com Pikachu como parceiro inicial.",
          release: "1998-09-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Gold",
          description:
            "Introduz a segunda geração de Pokémon e a região de Johto.",
          release: "1999-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Silver",
          description: "Versão complementar a Pokémon Gold.",
          release: "1999-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Crystal",
          description:
            "Versão aprimorada de Pokémon Gold e Silver, com várias melhorias.",
          release: "2000-12-14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Ruby",
          description:
            "Primeira versão da terceira geração, introduz a região de Hoenn.",
          release: "2002-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Sapphire",
          description: "Versão complementar a Pokémon Ruby.",
          release: "2002-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Emerald",
          description:
            "Versão aprimorada de Ruby e Sapphire, com novas mecânicas.",
          release: "2004-09-16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon FireRed",
          description: "Remake de Pokémon Red para Game Boy Advance.",
          release: "2004-01-29",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon LeafGreen",
          description: "Remake de Pokémon Green para Game Boy Advance.",
          release: "2004-01-29",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Diamond",
          description:
            "Primeira versão da quarta geração, introduz a região de Sinnoh.",
          release: "2006-09-28",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Pearl",
          description: "Versão complementar a Pokémon Diamond.",
          release: "2006-09-28",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Platinum",
          description: "Versão aprimorada de Diamond e Pearl.",
          release: "2008-09-13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon HeartGold",
          description: "Remake de Pokémon Gold com gráficos aprimorados.",
          release: "2009-09-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon SoulSilver",
          description: "Remake de Pokémon Silver com gráficos aprimorados.",
          release: "2009-09-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Black",
          description:
            "Primeira versão da quinta geração, introduz a região de Unova.",
          release: "2010-09-18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon White",
          description: "Versão complementar a Pokémon Black.",
          release: "2010-09-18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Black 2",
          description:
            "Sequência de Pokémon Black, com novos personagens e história.",
          release: "2012-06-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon White 2",
          description:
            "Sequência de Pokémon White, com novos personagens e história.",
          release: "2012-06-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon X",
          description:
            "Primeira versão da sexta geração, introduz a região de Kalos.",
          release: "2013-10-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Y",
          description: "Versão complementar a Pokémon X.",
          release: "2013-10-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Omega Ruby",
          description: "Remake de Pokémon Ruby para Nintendo 3DS.",
          release: "2014-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Alpha Sapphire",
          description: "Remake de Pokémon Sapphire para Nintendo 3DS.",
          release: "2014-11-21",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Sun",
          description:
            "Primeira versão da sétima geração, introduz a região de Alola.",
          release: "2016-11-18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Moon",
          description: "Versão complementar a Pokémon Sun.",
          release: "2016-11-18",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Ultra Sun",
          description: "Versão expandida de Pokémon Sun.",
          release: "2017-11-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Ultra Moon",
          description: "Versão expandida de Pokémon Moon.",
          release: "2017-11-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Sword",
          description:
            "Primeira versão da oitava geração, introduz a região de Galar.",
          release: "2019-11-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pokémon Shield",
          description: "Versão complementar a Pokémon Sword.",
          release: "2019-11-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("games", null, {});
  },
};
