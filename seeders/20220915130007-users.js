'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const timeNow = new Date();
    await queryInterface.bulkInsert('Users',[
     {
       username: 'tatang',
       email: 'tatang@gmail.com',
       createdAt: timeNow,
       updatedAt: timeNow
     },
     {
      username: 'asep',
      email: 'asep@gmail.com',
      createdAt: timeNow,
      updatedAt: timeNow
    },
    ])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
  }
};
