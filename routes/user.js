const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

/* GET */
/* GET home page. */
router.get("/", userController.getIndex);

router.get("/menu", userController.getMenu);

router.get("/order", userController.getOrder);

router.get("/track-order", userController.getTrackOrder);

router.get("/contact", userController.getContact);

module.exports = router;
