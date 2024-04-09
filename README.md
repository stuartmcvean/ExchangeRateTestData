# Mock server to provide exchange rate data

This is a simple mock server to serve mock exchange rates

Available currencies: GBP/EUR/USD/CAD/JPY/NZD/THB/CNY/AUD/CHF/ZAR

## Requirements

This app was built using Node 19 but any modern version of Node should work https://nodejs.org/en

## Running the server

To run the server you need to simply run 'npm install' and then 'node server.js' in the root of the project. This should start the server on port 8000.

## API

The API is simple, just call GET http://localhost:8000/rates/{currencyCode} to retrieve rates from 1 unit of selected currency to the other currencies.

### Example Request:

GET http://localhost:8000/rates/gbp

Response:
```
{
    "EUR": {
        "rate": 1.1661482,
        "name": "Euro"
    },
    "USD": {
        "rate": 1.2638436,
        "name": "US Dollar"
    },
    "CAD": {
        "rate": 1.7173866,
        "name": "Canadian dollar"
    },
    "JPY": {
        "rate": 191.63238,
        "name": "Japanese Yen"
    },
    "NZD": {
        "rate": 2.1018546,
        "name": "New Zealand Dollar"
    },
    "THB": {
        "rate": 46.45587,
        "name": "Thai Bhat"
    },
    "CNY": {
        "rate": 9.1417166,
        "name": "Chinese Yuan"
    },
    "AUD": {
        "rate": 1.9147731,
        "name": "Australian Dollar"
    },
    "CHF": {
        "rate": 1.1399409,
        "name": "Swiss Franc"
    },
    "ZAR": {
        "rate": 23.606591,
        "name": "South African Rand"
    }
}
```