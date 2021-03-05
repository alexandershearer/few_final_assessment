const carPayments = require('./data.json')
const { D } = require('./dateLib')
const str = require('./stringLib')

function formatDatePurhcased(date) {
    let newDate = new D(date)
    return newDate.month + ' ' + newDate.date + ', ' + newDate.year
}

function formatLastPayment(date) {
    let newDate = new D(date)
    return newDate.when()
}

function phoneFormat(number) {
    let newNumber = ('' + number).replace(/\D/g, '')
    let format = newNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (format) {
        return '(' + format[1] + ')' + format[2] + '-' + format[3]
    }
    return 'Invalid number'
}

function formatCustomerInformation() {
    let customers = []
    for (let payment of carPayments) {
        let first_name = str.capitalize(payment.first_name)
        let last_name = str.capitalize(payment.last_name)

        let datePurchased = formatDatePurhcased(payment.purchased)

        let paymentDate = formatLastPayment(payment.lastpayment)
        let phoneNumber = phoneFormat(payment.phone)
        let make = str.capitalize(payment.make)
        let model = str.capitalize(payment.model)
        let city = str.capitalize(payment.city)

        formattedInfo = {
            first_name,
            last_name,
            datePurchased,
            paymentDate,
            phoneNumber,
            make,
            model,
            city
        }

        let formattedCustString = `${first_name} ${last_name} ${make} ${model} Purchased: ${datePurchased} Last Payment: ${paymentDate} Phone: ${phoneNumber} City: ${city}`
        console.log(formattedCustString + '\n')
        customers.push(formattedInfo)
    }
    return customers
}

newCustomerInformation = formatCustomerInformation()





module.exports = {
    phoneFormat
}

