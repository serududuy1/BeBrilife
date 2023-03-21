const { data_transaction } = require("../../../models");

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
};
