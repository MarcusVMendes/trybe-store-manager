const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Requisito 5
const createSalesModel = async (sales) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('sales').insertOne({ itensSold: sales });
  
  return { id: insertedId };
};

// Requisiito 6
const getAllSalesModel = async () => {
  const conn = await connection();
  const query = await conn.collection('sales').find({}).toArray();

  return query;
};

const getSaleByIdModel = async (id) => {
  const conn = await connection();
  const query = await conn.collection('sales').findOne({ _id: ObjectId(id) });

  return query;
};

// Requisito 7
const updateSaleModel = async (id, sales) => {
  const conn = await connection();
  const query = conn.collection('sales').updateOne({ _id: ObjectId(id) }, {
    $set: { ...sales },
  });

  return query;
};

// Requisito 8
const deleteSaleModel = async (id) => {
  const conn = await connection();
  const { insertedId } = conn.collection('sales').deleteOne({ _id: ObjectId(id) });

  return { id: insertedId };
};

module.exports = {
  createSalesModel,
 getAllSalesModel,
 getSaleByIdModel,
 updateSaleModel,
 deleteSaleModel,
};