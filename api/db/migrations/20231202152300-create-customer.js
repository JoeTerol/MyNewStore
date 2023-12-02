'use strict';

const { CustomerSchemaSchema, CUSTOMER_TABLE} = require('../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
  await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchemaSchema)
  },

  async down (queryInterface) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};

