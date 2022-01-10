// const { ObjectId } = require('mongodb');
const connection = require('./connection');

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

module.exports = {
  findProductByNameModel,
  createProductModel,
};
