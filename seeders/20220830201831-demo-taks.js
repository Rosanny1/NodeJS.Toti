'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Tasks', [{
      description:"Executando o Node js" ,
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description:"Instalando o npm" ,
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: "Simplificando com Node puro",
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

   async down (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
