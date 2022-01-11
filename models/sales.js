// const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Requisito 5
const createSalesModel = async (sales) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('sales').insertOne({ itensSold: sales });
  
  return { id: insertedId };
};

module.exports = {
  createSalesModel,
};