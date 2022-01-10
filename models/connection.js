const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
const DB_NAME = 'StoreManager';

module.exports = () => mongodb.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });