const express = require('express');
const morgan = require("morgan");
const app = express();
const path = require('path');

const {
    getAllBreweries, 
    getAllBeers, 
    getBrewery, 
    getBeersByBrewery, 
    getBeer,
    addFavourite,
    getFavourites,
    deleteFavourite,
} = require("./handlers");


app.use(morgan("tiny"))
app.use(express.json())

app.use("/assets", express.static(path.join(__dirname, "assets")))

app.use("./assets", express.static(path.join(__dirname, "assets")))

// this endpoint  is used to access the entire list of brweries from the database

app.get("/api/breweries", getAllBreweries)

// this endpoint is used to access the entire list of beers from the database

app.get("/api/beers", getAllBeers)

//this endpoint is used to access a single brewery based on its Id

app.get("/api/brewery/:id", getBrewery)

//this endpoint retrieves all the beers from a single brewery

app.get("/api/brewery-beers/:id", getBeersByBrewery)

//this endpoint is used to access the information for a single beer

app.get("/api/beer/:id", getBeer)

//this endpoint is used to add a favourited beer to the database

app.post("/api/add-favourite", addFavourite)

//this endpoint is used to retrieve all the favourited beers for a specific user

app.get("/api/favourites/:id", getFavourites)

//this enpoindt is used to delete a favourited beer

app.delete("/api/delete-favourites/:id", deleteFavourite)





.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
