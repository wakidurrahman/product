const router = require("express").Router();

//Invoked Controller.
const { getProducts } = require("./constroller/pdoduct-controller");

router.route("/").get(getProducts);

module.exports = router;
