import { MongoClient } from 'mongodb';

console.log('Creating connection pool...')

const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/';
const client = new MongoClient(uri);

export default client;