const ObjectId = require('mongodb').ObjectID;
const { productSchema } = require('../validation/products');
const { 
  createProductModel, 
  findProductByNameModel,
  getAllProductsModel,
  getProductByIdModel,
  updateProductModel,
} = require('../models/products');

const errorMessage = (message) => ({ code: 'invalid_data', message });

// Requisito 1
const createProductService = async (name, quantity) => {
  const { error } = productSchema.validate({ name, quantity });
  if (error) throw errorMessage(error.message);
  const exists = await findProductByNameModel(name);
  if (exists) throw errorMessage('Product already exists');
  const { id } = await createProductModel(name, quantity);
  const newProduct = {
    _id: id,
    name,
    quantity,
  };

  return newProduct;
};

// Requisito 2
const getAllProductsService = async () => {
  const products = await getAllProductsModel();

  return {
    products: [...products],
  };
};

const getProductByIdService = async (id) => {
  const idIsValid = ObjectId.isValid(id);
  /* https://stackoverflow.com/questions/11985228/mongodb-node-check-if-objectid-is-valid */
  if (!idIsValid) throw errorMessage('Wrong id format');
  const product = await getProductByIdModel(id);
   
  return product;
};

// Requisito 3
const updateProductService = async (id, name, quantity) => {
  const idIsValid = ObjectId.isValid(id);
  if (!idIsValid) throw errorMessage('Wrong id format');
  const { error } = productSchema.validate({ name, quantity });
  if (error) throw errorMessage(error.message);
  await updateProductModel(id, name, quantity);
  const updatedProduct = {
    _id: id,
    name,
    quantity,
  };
  
  return updatedProduct;
};

module.exports = {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
};