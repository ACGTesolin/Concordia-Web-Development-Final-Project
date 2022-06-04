const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {beers} = require("./Data/beerInfo.js");

const batchImportBeers = async () => {

    const client = new MongoClient(MONGO_URI, options);

try {

    await client.connect();

    const db = await client.db("FPDB");

    console.log("connected")

    await db.collection("beers").insertMany(beers)

    console.log({status:201, data:  beers, message:"Data import successful"} )
}
catch (error) {
    console.log({status:500, message:error.message})
}
client.close();

};

batchImportBeers();