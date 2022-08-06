'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      name: 'Dede Laga',
      profession: 'IT',
      role: 'admin',
      email: 'dedeelaga@gmail.com',
      password: await bcrypt.hash('dedelaga', 10),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Pratama',
      profession: 'IT Support',
      role: 'guest',
      email: 'dbn@gmail.com',
      password: await bcrypt.hash('dedelaga', 10),
      created_at: new Date(),
      updated_at: new Date(),
    }]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
