const Product = require("../models/Product");

exports.getProductList = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/product-list", {
        title: "Admin - Product List",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
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

exports.postDeleteProduct = (req, res, next) => {
  Product.findByPk(req.body.productId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => {
      console.log("Deleted product");
      res.redirect("/admin/products-list");
    })
    .catch((err) => {
      console.log(err);
    });
};
