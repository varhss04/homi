const { MongoClient } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);

  cachedClient = client;
  cachedDb = client.db('homi_lunch');
  
  return cachedDb;
}

module.exports = connectDB;
