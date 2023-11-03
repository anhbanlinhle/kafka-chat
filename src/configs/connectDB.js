import { MongoClient } from 'mongodb';

require('dotenv').config()

console.log('Creating connection pool...')

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

export default client;