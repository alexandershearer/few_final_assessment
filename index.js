const carPayment = require('./data.json')
const { D } = require('./dateLib')

function camelName() {
    let customer = []
    for (let payment of carPayment) {
        let first_name = payment.first_name[0].toUpperCase() + payment.first_name.slice(1)
        let last_name = payment.last_name[0].toUpperCase() + payment.last_name.slice(1)
        customer.push({
            first_name, last_name
        })
    }
    return customer
}

function purchaseDate() {
    for (let payment of carPayment) {
        let datePurchased = new D(payment.purchased)
        console.log('Purchased: ' + datePurchased.month + ' ' + datePurchased.date + ', ' + datePurchased.year)
    }
}

function lastPayment() {
    for (let payment of carPayment) {
        let paymentDate = new D(payment.lastpayment)
        console.log('Last payment: ' + paymentDate.when())
    }
}

function phoneFormat(number) {
    let newNumber = ('' + number).replace(/\D/g, '')
    let format = newNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (format) {
        return '(' + format[1] + ')' + format[2] + '-' + format[3]
    }
    return 'Invalid number'
}

module.exports = {
    camelName,
    purchaseDate,
    lastPayment,
    phoneFormat
}


console.log(camelName())
purchaseDate()
lastPayment()

console.log(phoneFormat(5555555555))
