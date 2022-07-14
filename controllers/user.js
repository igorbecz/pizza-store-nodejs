const Product = require("../models/Product");

exports.getIndex = (req, res, next) => {
  res.render("user/index", { title: "Homepage" });
};

exports.getContact = (req, res, next) => {
  res.render("user/contact", { title: "Contact" });
};

exports.getMenu = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log(JSON.stringify(products));
      res.render("user/menu", { title: "Menu", products: products });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOrder = (req, res, next) => {
  res.render("user/order", { title: "Order" });
};

exports.getTrackOrder = (req, res, next) => {
  res.render("user/track-order", { title: "Track Order" });
};
