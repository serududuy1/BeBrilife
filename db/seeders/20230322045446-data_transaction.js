"use strict";

const user_id = ["B02", "C02", "A01"];

const qty_order = [3, 4, 2];

const product_id = [2, 1, 4];

const total_order = [600000, 200000, 70000];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();
    const data_transaction = user_id.map((uid, i) => ({
      trans_date: timestamp,
      user_id: uid,
      qty_order: qty_order[i],
      product_id: product_id[i],
      total_order: total_order[i],
      createdAt: timestamp,
      updatedAt: timestamp,
    }));

    await queryInterface.bulkInsert("data_transactions", data_transaction, {});
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
