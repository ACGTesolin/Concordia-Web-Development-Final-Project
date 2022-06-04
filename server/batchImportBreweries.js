const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {breweries} = require("./Data/breweryInfo.js");

const batchImportBreweries = async () => {

    const breweryArr = breweries

    console.log(breweryArr)
    const client = new MongoClient(MONGO_URI, options);

try {

    await client.connect();

    const db = await client.db("FPDB");

    console.log("connected")

    await db.collection("breweries").insertMany(breweryArr)

    console.log({status:201, data:  breweries, message:"Data import successful"} )
}
catch (error) {
    console.log({status:500, message:error.message})
}
client.close();

};

batchImportBreweries();

