// const ObjectId = require('mongodb').ObjectID;
// const { salesSchema } = require('../validation/sales');
// const { getProductByIdModel } = require('../models/products');
const { createSalesModel } = require('../models/sales');

const errorMessage = (message) => ({ code: 'invalid_data', message });

// Requisito 5
const createSalesService = async (sales) => {
  console.log('sales service');
  const [{ quantity }] = sales;
  if (quantity <= 0) throw errorMessage('Wrong product ID or invalid quantity');
  if (typeof quantity !== 'number') throw errorMessage('Wrong product ID or invalid quantity');
  const { id } = await createSalesModel(sales);
  
  return {
    _id: id,
    itensSold: [...sales],
  };
};

module.exports = {
  createSalesService,
};