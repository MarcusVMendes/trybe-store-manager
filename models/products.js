const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Requisito 1
const findProductByNameModel = async (name) => {
  const conn = await connection();
  const query = await conn.collection('products').findOne({ name });

  return query;
};

const createProductModel = async (name, quantity) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('products').insertOne({ name, quantity });
  
  return { id: insertedId };
};

// Requisito 2
const getAllProductsModel = async () => {
  const conn = await connection();
  const query = await conn.collection('products').find().toArray();

  return query;
};

const getProductByIdModel = async (id) => {
  const conn = await connection();
  const query = await conn.collection('products').findOne({ _id: ObjectId(id) });

  return query;
};

module.exports = {
  findProductByNameModel,
  createProductModel,
  getAllProductsModel,
  getProductByIdModel,
};
