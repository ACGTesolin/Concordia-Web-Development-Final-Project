const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {beers} = require("./Data/beerInfo.js");

const modifiedBeers = [];

beers.forEach((beer)=>{

    beer.img[0] === "." ? beer.img = beer.img.slice(1) : beer.img
    modifiedBeers.push(beer)
});
console.log(modifiedBeers)
const batchImportBeers = async () => {

    const client = new MongoClient(MONGO_URI, options);

try {

    await client.connect();

    const db = await client.db("FPDB");


    await db.collection("beers").insertMany(modifiedBeers)

    console.log({status:201, data:  modifiedBeers, message:"Data import successful"} )
}
catch (error) {
    console.log({status:500, message:error.message})
}
client.close();

};

batchImportBeers();