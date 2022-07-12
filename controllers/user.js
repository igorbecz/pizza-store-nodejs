exports.getIndex = (req, res, next) => {
  res.render("user/index", { title: "Homepage" });
};

exports.getContact = (req, res, next) => {
  res.render("user/contact", { title: "Contact" });
};

exports.getMenu = (req, res, next) => {
  res.render("user/menu", { title: "Menu" });
};

exports.getOrder = (req, res, next) => {
  res.render("user/order", { title: "Order" });
};

exports.getTrackOrder = (req, res, next) => {
  res.render("user/track-order", { title: "Track Order" });
};
