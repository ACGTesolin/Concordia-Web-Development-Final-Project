const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {breweries} = require("./Data/breweryInfo.js");


const modifiedBrewery = [];

breweries.forEach((beer)=>{

    beer.logo[0] === "." ? beer.logo = beer.logo.slice(1) : beer.logo
    modifiedBrewery.push(beer)
});
console.log(modifiedBrewery)

const batchImportBreweries = async () => {

    const breweryArr = breweries

   
    const client = new MongoClient(MONGO_URI, options);

try {

    await client.connect();

    const db = await client.db("FPDB");

    console.log("connected")

    await db.collection("breweries").insertMany(modifiedBrewery)

    console.log({status:201, data:modifiedBrewery, message:"Data import successful"} )
}
catch (error) {
    console.log({status:500, message:error.message})
}
client.close();

};
batchImportBreweries();

