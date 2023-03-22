const {
  data_transaction,
  data_product,
  data_user,
} = require("../../../models");

const getProduct = async (params) => {
  return await data_product
    .findOne({
      where: {
        product_id: params,
      },
    })
    .then((result) => {
      return result;
    });
};
const getUser = async (params) => {
  return await data_user
    .findOne({
      where: {
        user_id: params,
      },
    })
    .then((result) => {
      return result;
    });
};

const getTransaction = async (params) => {
  return await data_transaction
    .findOne({
      where: {
        trans_id: params,
      },
    })
    .then((result) => {
      return result;
    });
};

module.exports = {
  async getAllTransaction(req, res) {
    await data_transaction
      .findAll()
      .then((result) => {
        res.status(200).json({
          ResponseCode: "00",
          ResponseDesc: "Success get all transaction",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },

  async createTransaction(req, res) {
    const countId = await data_transaction.findAndCountAll();

    const product = await getProduct(req.body.product_id);

    if (!product) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "product not found!",
      });
      return;
    }
    const user = await getUser(req.body.user_id);

    if (!user) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "user not found!",
      });
      return;
    }

    const totalTransaction = parseInt(product.premium * req.body.qty_order);

    const data = {
      //  trans_id: countId.count + 1,
      trans_date: req.body.trans_date,
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      qty_order: req.body.qty_order,
      total_order: totalTransaction,
    };

    await data_transaction
      .create(data)
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: `Total order Rp. ${totalTransaction}`,
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },

  async updateTransaction(req, res) {
    const transaction = await getTransaction(req.params.id);

    if (!transaction) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "transaction not found!",
      });
      return;
    }

    const product = await getProduct(req.body.product_id);

    if (!product) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "product not found!",
      });
      return;
    }
    const user = await getUser(req.body.user_id);

    if (!user) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "user not found!",
      });
      return;
    }
    const totalTransaction = parseInt(product.premium * req.body.qty_order);

    const data = {
      //  trans_id: countId.count + 1,
      trans_date: req.body.trans_date,
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      qty_order: req.body.qty_order,
      total_order: totalTransaction,
    };

    await data_transaction
      .update(data, {
        where: {
          trans_id: req.params.id,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: `Total order Rp. ${totalTransaction}`,
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },

  async deleteTransaction(req, res) {
    const transaction = await getTransaction(req.params.id);

    if (!transaction) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "transaction not found!",
      });
      return;
    }

    await data_transaction
      .destroy({
        where: {
          trans_id: req.params.id,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: `Success delete transaction id ${req.params.id}`,
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
};
