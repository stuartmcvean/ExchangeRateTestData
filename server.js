// server.js
const express = require('express');
const app = express();
const port = 8000;

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
    if(req.params.basecurrency) {
        const currency = req.params.basecurrency.toUpperCase();
        const ratesForCurrency = getRateForCurrency(currency)
        res.send(ratesForCurrency ? ratesForCurrency : errorResponse)
    } else {
        res.send(errorResponse);
    }
})