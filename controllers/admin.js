const Product = require("../models/Product");

exports.getProductList = (req, res, next) => {
  res.render("admin/product-list", { title: "Product List" });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { title: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  Product.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  })
    .then(() => {
      console.log("Created product");
      res.redirect("/menu");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", { title: "Edit Product" });
};
