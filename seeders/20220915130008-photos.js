'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   const timeNow = new Date();
   await queryInterface.bulkInsert('Photos',[
    {
      title: 'photo 1',
      caption: 'deskripsi poto1',
      image_url: 'http://photos.com/photos1',
      createdAt: timeNow,
      updatedAt: timeNow
    },
    {
      title: 'photo 2',
      caption: 'deskripsi poto 2',
      image_url: 'http://photos.com/photos1',
      createdAt: timeNow,
      updatedAt: timeNow
    },
    {
      title: 'photo 3',
      caption: 'deskripsi poto 3',
      image_url: 'http://photos.com/photos3',
      createdAt: timeNow,
      updatedAt: timeNow
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Photos', null, {});
  }
};
