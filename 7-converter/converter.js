const converter = (amount, accountCurrency, getCurrency) => {
    accountCurrency = accountCurrency.toUpperCase();
    getCurrency = getCurrency.toUpperCase();

    if (amount < 0 || typeof amount !== 'number') {
        return 'unexpected_amount'
    }
    if (accountCurrency === getCurrency) {
        return 'cannot_convert_one_currency'
    }

    const allowedCurrencies = ['RUB', 'EUR', 'USD'];

    if (!allowedCurrencies.includes(accountCurrency)) {
        return 'unexpected_account_currency'
    }
    if (!allowedCurrencies.includes(getCurrency)) {
        return 'unexpected_get_currency'
    }

    const EURtoRUB = 89.15;
    const USDtoRUB = 76.50;
    const EURtoUSD = 1.17;

    let res;

    if (accountCurrency === 'RUB' && getCurrency === 'EUR') {
        res = amount / EURtoRUB
    } else if (accountCurrency === 'RUB' && getCurrency === 'USD') {
        res = amount / USDtoRUB
    } else if (accountCurrency === 'USD' && getCurrency === 'EUR') {
        res =  amount / EURtoUSD
    } else if (accountCurrency === 'USD' && getCurrency === 'RUB') {
        res = amount * USDtoRUB
    } else if (accountCurrency === 'EUR' && getCurrency === 'RUB') {
        res = amount * EURtoRUB
    } else {
        res = amount * EURtoUSD
    }

    return res.toFixed(2)
}

console.log(converter(1000, 'RUB', 'EUR'))