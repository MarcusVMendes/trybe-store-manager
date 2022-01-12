const ObjectId = require('mongodb').ObjectID;
const { 
  createSalesModel,
  getAllSalesModel,
  getSaleByIdModel,
  updateSaleModel,
  deleteSaleModel,
 } = require('../models/sales');

const errorMessage = (message) => ({ code: 'invalid_data', message });

const notFoundError = {
  /* dica da turma no whatsapp, para capturar um code e uma message de erro diferente no middleware */
  notFound: true,
  code: 'not_found',
  message: 'Sale not found',
};

// Requisito 5
const createSalesService = async (sales) => {
  const [{ quantity }] = sales;
  if (quantity <= 0) throw errorMessage('Wrong product ID or invalid quantity');
  if (typeof quantity !== 'number') throw errorMessage('Wrong product ID or invalid quantity');
  const { id } = await createSalesModel(sales);
  
  return {
    _id: id,
    itensSold: [...sales],
  };
};

// Requisito 6
const getAllSalesService = async () => {
  const listAllSales = await getAllSalesModel();
  
  return {
    sales: [...listAllSales],
  };
};

const getSaleByIdService = async (id) => {
  const idIsValid = ObjectId.isValid(id);
  /* https://stackoverflow.com/questions/11985228/mongodb-node-check-if-objectid-is-valid */
  if (!idIsValid) throw notFoundError;
  const sale = await getSaleByIdModel(id);
  if (!sale) throw notFoundError;
   
  return {
    _id: sale.id,
    itensSold: [...sale.itensSold],
  };
};

// Requisito 7
const updateSaleService = async (id, sales) => {
  const [{ quantity }] = sales;
  if (quantity <= 0) throw errorMessage('Wrong product ID or invalid quantity');
  if (typeof quantity !== 'number') throw errorMessage('Wrong product ID or invalid quantity');
  await updateSaleModel(id, sales);
  return {
    _id: id,
    itensSold: [...sales],
  };
};

// Requisito 8
const deleteSaleService = async (idSale) => {
  const idIsValid = ObjectId.isValid(idSale);
  if (!idIsValid) throw errorMessage('Wrong sale ID format');
  const sale = await getSaleByIdService(idSale);
  await deleteSaleModel(idSale);

  return sale;
};

module.exports = {
  createSalesService,
  getAllSalesService,
  getSaleByIdService,
  updateSaleService,
  deleteSaleService,
};