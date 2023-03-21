"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data_transactions", {
      trans_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      trans_date: {
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: "data_users",
          key: "user_id",
          as: "user_id",
        },
        onDelete: "cascade",
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "data_products",
          key: "product_id",
          as: "product_id",
        },
        onDelete: "cascade",
      },
      qty_order: {
        type: Sequelize.INTEGER,
      },
      total_order: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("data_transactions");
  },
};
