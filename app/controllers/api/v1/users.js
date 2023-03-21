const { data_user } = require("../../../models");

module.exports = {
  async getAllusers(req, res) {
    await data_user
      .findAll()
      .then((result) => {
        res.status(200).json({
          ResponseCode: "00",
          ResponseDesc: "Success get all users",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
  async getAllusersCount(req, res) {
    await data_user
      .findAndCountAll()
      .then((result) => {
        res.status(200).json({
          ResponseCode: "00",
          ResponseDesc: "Success get all users",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
};
