"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Gyms",
      [
        {
          name: "Pewter Gym",
          description: "Ginasio de pedra",
          element: 15,
          region: 1,
          city: "Pewter City",
          leader: "Brock",
          insignia: "Boulder Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cerulean Gym",
          description: "Ginasio de água",
          element: 2,
          region: 1,
          city: "Cerulean City",
          leader: "Misty",
          insignia: "Cascade Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vermilion Gym",
          description: "Ginasio elétrico",
          element: 4,
          region: 1,
          city: "Vermilion City",
          leader: "Lt. Surge",
          insignia: "Thunder Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celadon Gym",
          description: "Ginasio de planta",
          element: 3,
          region: 1,
          city: "Celadon City",
          leader: "Erika",
          insignia: "Rainbow Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fuchsia Gym",
          description: "Ginasio de veneno",
          element: 11,
          region: 1,
          city: "Fuchsia City",
          leader: "Koga",
          insignia: "Soul Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saffron Gym",
          description: "Ginasio psíquico",
          element: 5,
          region: 1,
          city: "Saffron City",
          leader: "Sabrina",
          insignia: "Marsh Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cinnabar Gym",
          description: "Ginasio de fogo",
          element: 1,
          region: 1,
          city: "Cinnabar Island",
          leader: "Blaine",
          insignia: "Volcano Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Viridian Gym",
          description: "Ginasio de terra",
          element: 12,
          region: 1,
          city: "Viridian City",
          leader: "Giovanni",
          insignia: "Earth Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rustboro Gym",
          description: "Ginasio de pedra",
          element: 15,
          region: 2,
          city: "Rustboro City",
          leader: "Roxanne",
          insignia: "Stone Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dewford Gym",
          description: "Ginasio de luta",
          element: 10,
          region: 2,
          city: "Dewford Town",
          leader: "Brawly",
          insignia: "Knuckle Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mauville Gym",
          description: "Ginasio elétrico",
          element: 4,
          region: 2,
          city: "Mauville City",
          leader: "Wattson",
          insignia: "Dynamo Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lavaridge Gym",
          description: "Ginasio de fogo",
          element: 1,
          region: 2,
          city: "Lavaridge Town",
          leader: "Flannery",
          insignia: "Heat Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Petalburg Gym",
          description: "Ginasio normal",
          element: 18,
          region: 2,
          city: "Petalburg City",
          leader: "Norman",
          insignia: "Balance Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fortree Gym",
          description: "Ginasio voador",
          element: 13,
          region: 2,
          city: "Fortree City",
          leader: "Winona",
          insignia: "Feather Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mossdeep Gym",
          description: "Ginasio psíquico",
          element: 5,
          region: 2,
          city: "Mossdeep City",
          leader: "Tate & Liza",
          insignia: "Mind Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sootopolis Gym",
          description: "Ginasio de água",
          element: 2,
          region: 2,
          city: "Sootopolis City",
          leader: "Wallace",
          insignia: "Rain Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oreburgh Gym",
          description: "Ginasio de pedra",
          element: 15,
          region: 3,
          city: "Oreburgh City",
          leader: "Roark",
          insignia: "Coal Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eterna Gym",
          description: "Ginasio de planta",
          element: 3,
          region: 3,
          city: "Eterna City",
          leader: "Gardenia",
          insignia: "Forest Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Veilstone Gym",
          description: "Ginasio de luta",
          element: 10,
          region: 3,
          city: "Veilstone City",
          leader: "Maylene",
          insignia: "Cobble Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pastoria Gym",
          description: "Ginasio de água",
          element: 2,
          region: 3,
          city: "Pastoria City",
          leader: "Crasher Wake",
          insignia: "Fen Badge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Gyms", null, {});
  },
};
