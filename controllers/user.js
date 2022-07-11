exports.getIndex = (req, res, next) => {
  res.render("index", { title: "Homepage" });
};

exports.getContact = (req, res, next) => {
  res.render("contact", { title: "Contact" });
};

exports.getMenu = (req, res, next) => {
  res.render("menu", { title: "Menu" });
};

exports.getOrder = (req, res, next) => {
  res.render("order", { title: "Order" });
};

exports.getTrackOrder = (req, res, next) => {
  res.render("track-order", { title: "Track Order" });
};
