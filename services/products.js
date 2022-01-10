const { createProductModel } = require('../models/products');
const { findProductByNameModel } = require('../models/products');
const { productSchema } = require('../validation/products');

const errorMessage = (message) => ({ code: 'invalid_data', message });

const createProductService = async (name, quantity) => {
  const { error } = productSchema.validate(name, quantity);

  if (error) {
    throw errorMessage(error.message);
  }
  const exists = await findProductByNameModel(name);
  
  if (exists) {
    throw errorMessage('Product already exists');
  }
  const { id } = await createProductModel(name, quantity);
  const newProduct = {
    _id: id,
    name,
    quantity,
  };

  return newProduct;
};

module.exports = {
  createProductService,
};