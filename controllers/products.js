const { 
  createProductService,
  getAllProductsService,
  getProductByIdService,
} = require('../services/products');

// Requisito 1
const createProductController = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await createProductService(name, quantity);
    return res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

// Requisito 2
const getAllProductsController = async (_req, res, next) => {
  try {
    const products = await getAllProductsService();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProductController,
  getAllProductsController,
  getProductByIdController,
};