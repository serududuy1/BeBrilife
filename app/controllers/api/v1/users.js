const { data_user } = require("../../../models");

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
  async createuser(req, res) {
    const existUser = await getUser(req.body.user_id);

    if (existUser) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "user_id already in use!",
      });
      return;
    }

    const data = {
      user_id: req.body.user_id,
      user_name: req.body.user_name,
      active: 0,
    };

    await data_user
      .create(data)
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: "Success create user",
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },

  async updateuser(req, res) {
    const existUser = await getUser(req.params.idUser);

    if (!existUser) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "user_id not found!",
      });
      return;
    }

    const data = {
      user_name: req.body.user_name,
      active: req.body.active,
    };

    await data_user
      .update(data, {
        where: {
          user_id: req.params.idUser,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: `Success create user ${req.params.idUser}`,
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
  async deleteuser(req, res) {
    const existUser = await getUser(req.params.idUser);

    if (!existUser) {
      res.status(422).json({
        ResponseCode: "01",
        ResponseDesc: "user_id not found!",
      });
      return;
    }

    await data_user
      .destroy({
        where: {
          user_id: req.params.idUser,
        },
      })
      .then((result) => {
        res.status(201).json({
          ResponseCode: "00",
          ResponseDesc: `Success delete user ${req.params.idUser}`,
          data: result,
        });
      })
      .catch((err) => {
        return err;
      });
  },
};
