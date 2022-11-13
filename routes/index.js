let express = require("express");
let router = express.Router();
let categoryRoutes = require("./categories.route");
let productRoutes = require("./products.route");

router.get("/" , (req,res,next) => {
    res.write("This is the base page");
    res.end();
});
// this is base route for categories
router.use("/categories", categoryRoutes);
// this is base route for products
router.use("/products", productRoutes);



module.exports = router;