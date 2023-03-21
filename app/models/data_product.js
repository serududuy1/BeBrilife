"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class data_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      product_name: DataTypes.STRING,
      premium: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "data_product",
    }
  );
  return data_product;
};
