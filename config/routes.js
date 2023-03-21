const express = require("express");
const router = express.Router();

const api = require("../app/controllers/api/");

// end point products
router.get("/products", api.v1.product.getAllProduct);
router.post("/product", api.v1.product.createProduct);
router.put("/product/:id", api.v1.product.updateProduct);
router.delete("/product/:id", api.v1.product.deleteProduct);

// end point users
router.get("/users", api.v1.user.getAllusers);
router.post("/users", api.v1.user.createuser);
router.put("/users/:idUser", api.v1.user.updateuser);
router.delete("/users/:idUser", api.v1.user.deleteuser);

router.get("/total", api.v1.user.getAllusersCount);

// end point transaction
router.get("/transaction", api.v1.transaction.getAllTransaction);
router.post("/transaction", api.v1.transaction.createTransaction);

module.exports = router;
