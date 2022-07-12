exports.getProductList = (req, res, next) => {
    res.render("admin/product-list", { title: "Product List" });
  };

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", { title: "Add Product" });
  };

exports.getEditProduct = (req, res, next) => {
    res.render("admin/edit-product", { title: "Edit Product" });
  };