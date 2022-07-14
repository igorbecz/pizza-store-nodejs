const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

/* GET */
router.get("/products-list", adminController.getProductList);

router.get("/add-product", adminController.getAddProduct);

router.get("/edit-product", adminController.getEditProduct);

/* POST */
router.post("/add-product", adminController.postAddProduct);

module.exports = router;