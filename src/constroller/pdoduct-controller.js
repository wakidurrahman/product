/**
 * Schema require list
 */
const ProductModel = require("../shared-models/products/product-model");

/**
 * Own modules and dependency function
 */

const asyncHandler = require("../middleware/async-middleware");
const mongooseQuery = require("../utils/mongoose-query");

// @desc    Fetch all Products
// @route   GET /api/v1/Products
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const { searchKeyWord } = req.query;
  if (searchKeyWord) {
    const searchItem = searchKeyWord
      ? { name: { $regex: searchKeyWord, $options: "i" } }
      : {};
    const [searchProduct, count] = await Promise.all([
      mongooseQuery.find(ProductModel, { ...searchItem }),
      mongooseQuery.countDocuments(ProductModel, { ...searchItem }),
    ]);

    res.status(200).json({
      status: "success",
      message: "All Data fetching successful!",
      data: {
        results: searchProduct,
        count,
      },
    });
  } else {
    const data = mongooseQuery.find(ProductModel);
    res.status(200).json({
      status: "success",
      message: "All Data fetching successful!",
      data,
    });
  }
});
