// server.js
const express = require('express');
const app = express();
const port = 8000;
const mockAPIKey = "85f7ccfd-677a-4e5a-a5eb-21c19734edf7";

const { getRateForCurrency } = require('./data');
  
app.listen(port, function (err) { 
   if(err){ 
       console.log("Error while starting server"); 
   } 
   else{ 
       console.log("Server has been started at "+port); 
   } 
})

const errorResponse = {
    message: "Invalid request"
}

app.get('/rates/:basecurrency', function (req, res) {
    if(req.header("x-api-key") && req.header("x-api-key") !== mockAPIKey) {
        res.status(401).send({
            message: "Invalid API key"
        });
    } else if(req.params.basecurrency && req.header("x-api-key")) {
        const currency = req.params.basecurrency.toUpperCase();
        const ratesForCurrency = getRateForCurrency(currency)
        res.send(ratesForCurrency ? ratesForCurrency : errorResponse)
    } else {
        res.send(errorResponse);
    }
})