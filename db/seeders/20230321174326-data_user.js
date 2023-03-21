"use strict";

const user_name = [
  "user A01",
  "user A02",
  "user B01",
  "user B02",
  "user C01",
  "user C02",
];

const user_id = ["A01", "A02", "B01", "B02", "C01", "C02"];

const active = [1, 1, 0, 1, 0, 1];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();
    const data_produk = user_name.map((names, i) => ({
      user_id: user_id[i],
      user_name: names,
      active: active[i],
      createdAt: timestamp,
      updatedAt: timestamp,
    }));

    await queryInterface.bulkInsert("data_users", data_produk, {});
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
