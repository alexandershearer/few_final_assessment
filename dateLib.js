const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return this._date.getFullYear().toString().substr(2, 3)
    }
    get month() {
        return months[this._date.getMonth()]
    }
    get m() {
        return months[this._date.getMonth()].toString().substr(0, 3)
    }
    get day() {
        return days[this._date.getDay()]
    }
    get dy() {
        return days[this._date.getDay()].toString().substr(0, 3)
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return this._date.getHours()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }

    formatDate(input) {
        let splitInput = input.split("")
        for (let i = 0; i < splitInput.length; i++) {
            switch (splitInput[i]) {
                case "Y":
                    splitInput[i] = this.year
                    break
                case "y":
                    splitInput[i] = this.yr
                    break
                case "M":
                    splitInput[i] = this.month
                    break
                case "m":
                    splitInput[i] = this.m
                    break
                case "D":
                    if (this.date.toString().length < 2) {
                        splitInput[i] = `0${this.date}`
                    }
                    break
                case "d":
                    splitInput[i] = this.date
                    break
                case "H":
                    if (this.hours.toString().length < 2) {
                        splitInput[i] = `0${this.hours}`
                    } else {
                        splitInput[i] = this.hours
                    }
                    break
                case "h":
                    splitInput[i] = this.hours
                    break
                case "I":
                    if (this.mins.toString().length < 2) {
                        splitInput[i] = `0${this.mins}`
                    } else {
                        splitInput[i] = this.mins
                    }
                    break
                case "i":
                    splitInput[i] = this.mins
                    break
                case "S":
                    if (this.secs.toString().length < 2) {
                        splitInput[i] = `0${this.secs}`
                    } else {
                        splitInput[i] = this.secs
                    }
                    break
                case "s":
                    splitInput[i] = this.secs
                    break
                default:
                    break
            }
        }
        return splitInput.join('')
    }

    when() {
        const now = new Date()

        if (this._date > now) {
            const y = this._date.getFullYear() - now.getFullYear()
            const m = this._date.getMonth() - now.getMonth()
            const d = this._date.getDate() - now.getDate()

            if (y > 0) {
                return `${y} year(s) from now`
            } else if (m > 0) {
                return `${m} month(s) from now`
            } else {
                return `${d} day(s) from now`
            }
        } else if (this._date < now) {
            const y = now.getFullYear() - this._date.getFullYear()
            const m = now.getMonth() - this._date.getMonth()
            const d = now.getDate() - this._date.getDate()

            if (y > 0) {
                return `${y} year(s) ago`
            } else if (m > 0) {
                return `${m} month(s) ago`
            } else {
                return `${d} day(s) ago`
            }
        } else {
            return 'Today'
        }

    }

}


module.exports = {
    D
}