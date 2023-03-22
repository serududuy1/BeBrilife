"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      data_transaction.belongsTo(models.data_user, {
        foreignKey: {
          name: "user_id",
          as: "user_id",
        },
      });
      data_transaction.hasOne(models.data_product, {
        foreignKey: {
          name: "product_id",
        },
      });
    }
  }
  data_transaction.init(
    {
      trans_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      trans_date: DataTypes.DATE,
      user_id: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
      qty_order: DataTypes.INTEGER,
      total_order: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "data_transaction",
    }
  );
  return data_transaction;
};
