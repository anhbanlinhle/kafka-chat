import { MongoClient } from 'mongodb'; 

console.log('Creating connection pool...')

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

export default client;