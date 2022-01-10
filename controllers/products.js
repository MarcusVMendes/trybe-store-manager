const { createProductService } = require('../services/products');

const createProductController = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await createProductService(name, quantity);
    return res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProductController,
};