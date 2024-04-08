const ratesPerGBP = {
    EUR: {
        rate: 1.1661482,
        name: "Euro"
    },
    USD: {
        rate:  1.2638436,
        name: "US Dollar"
    },
    CAD: {
        rate:  1.7173866,
        name: "Canadian dollar"
    },
    JPY: {
        rate:  191.63238,
        name: "Japanese Yen"
    },
    NZD: {
        rate:  2.1018546,
        name: "New Zealand Dollar"
    },
    THB: {
        rate:  46.45587,
        name: "Thai Bhat"
    },
    CNY: {
        rate:  9.1417166,
        name: "Chinese Yuan"
    },
    INR: {
        rate:  105.27494,
        name: "Indian Rupee"
    },
    CHF: {
        rate:  1.1399409,
        name: "Swiss Franc"
    },
    ZAR: {
        rate:  23.606591,
        name: "South African Rand"
    }
}

const getRateForCurrency = (currency) => {
    if(currency === "GBP") {
        return ratesPerGBP;
    } else if(ratesPerGBP[currency]){
        const gbpToCurrencyRate = ratesPerGBP[currency].rate
        let response = {}
        for (const [key, value] of Object.entries(ratesPerGBP)) {
            if(key === currency) {
                response = {
                    GBP: {
                        rate: parseFloat((1/gbpToCurrencyRate).toFixed(7)),
                        name: "British Pound"
                    },
                    ...response
                }
            } else {
                response[key] = {
                    rate: parseFloat(((1/gbpToCurrencyRate)*value.rate).toFixed(7)),
                    name: value.name
                }
            }
        }
        return response;
    } else {
        return null;
    }
}

exports.getRateForCurrency = getRateForCurrency