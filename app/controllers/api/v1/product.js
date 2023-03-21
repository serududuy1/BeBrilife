const { data_product } = require("../../../models");

module.exports = {
  async getAllProduct(req, res) {
    await data_product
      .findAll()
      .then((result) => {
        res.status(200).json({
          ResponseCode: "00",
          ResponseDesc: "Success get all product",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
  async createProduct(req, res) {
    const countId = await data_product.findAndCountAll();

    const data = {
      product_id: countId.count + 1,
      product_name: req.body.product_name,
      premium: req.body.premium,
    };

    await data_product
      .create(data)
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: "Success create product",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },

  async updateProduct(req, res) {
    const data = {
      product_name: req.body.product_name,
      premium: req.body.premium,
    };
    console.log(data);
    await data_product
      .update(data, {
        where: {
          product_id: req.params.id,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: "Success create product",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
  async deleteProduct(req, res) {
    console.log(req.params.id);
    await data_product
      .destroy({
        where: {
          product_id: req.params.id,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: "Success create product",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
};
