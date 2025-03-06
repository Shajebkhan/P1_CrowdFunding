const mongoose = require('mongoose')

// mongoose connection url

const url = process.env.MONGODB_URI; // Use the MongoDB URI from environment variables
console.log(`MongoDB URI: ${url}`); // Log the MongoDB URI for debugging

// fun to connect to mongodb using mongoose database
const connectDB = async () => {
    try{
      const conn =  await mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true} );
      console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error('error conncting to mongodb: ', err);
    }
}
module.exports = connectDB;
