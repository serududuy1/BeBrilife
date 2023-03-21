"use strict";

const product_name = [
  "Asuransi Mikro KKM",
  "Asuransi Pijar",
  "Asuransi LifeCare",
  "Asuransi AcciCare",
];

const premium = [50000, 200000, 75000, 35000];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();
    const data_produk = product_name.map((names, i) => ({
      product_name: names,
      premium: premium[i],
      createdAt: timestamp,
      updatedAt: timestamp,
    }));

    await queryInterface.bulkInsert("data_products", data_produk, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
