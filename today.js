var Today = function (opts) {

    opts = opts || {}

    this.opts = {
        language: opts.language || 'no'
    }

    this.now = new Date
    this.format = 'Y-m-d H:i:s'
    this.local = {
        en: {
            day: ['sunday', 'monday', 'tueday', 'wednesday', 'thursday', 'friday', 'saturday']
        },
        no: {
            day: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
        }
    }

    return this
}

Today.prototype = {

    constructor: Today,

    getCurrent: function () {
        var now = this.now
        now.setHours(0)
        now.setMinutes(0)
        now.setSeconds(0)

        return this.now
    },

    setCurrent: function (year, month, date) {
        var date = new Date(year, month - 1, date)

        this.now = date

        return this
    },

    next: function (range, type) {
        var now = this.getCurrent(),
            nextDate = new Date


        if (['day', 'month', 'year'].indexOf(type) == -1) {
            return this.createFormat(now)
        }

        if (type == 'day') {
            nextDate.setDate(now.getDate() + range)
        }

        if (type == 'month') {
            nextDate.setDate(now.getDate())
            nextDate.setMonth(now.getMonth() + range)
        }

        if (type == 'year') {
            nextDate.setDate(now.getDate())
            nextDate.setDate(now.getMonth())
            nextDate.setYear(now.getFullYear() + range)
        }

        return this.createFormat(new Date(nextDate))
    },

    previous: function (range, type) {

        return this.next(range * -1, type)
    },

    current: function () {

        var current = this.getCurrent()

        return this.createFormat(current);
    },

    getDay: function (weekday) {

        return this.local[this.opts.language]['day'][weekday]
    },

    createFormat: function (date) {
        return {
            weekDay: this.getDay(date.getDay()),
            date: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    },

    equal: function (checkDate) {
        checkDate = this.parseDateString(checkDate)
        var current = this.createFormat(this.getCurrent())
        var checkDate = this.createFormat(new Date(checkDate))

        return current.date == checkDate.date &&
            current.month == checkDate.month &&
            current.year == checkDate.year
    },

    between: function (startDate, endDate) {
        startDate = this.parseDateString(startDate)
        endDate = this.parseDateString(endDate)

        var current = this.getCurrent().getTime()
        var startDate = new Date(startDate).getTime()
        var endDate = new Date(endDate).getTime()

        return current >= startDate && startDate <= endDate
    },

    moreThan: function (checkDate, withEqualCurrent) {

        checkDate = this.parseDateString(checkDate)

        var current = this.getCurrent().getTime()
        var checkDate = new Date(checkDate).getTime()

        withEqualCurrent = withEqualCurrent || false

        if (withEqualCurrent) {
            return current >= checkDate
        }

        return current > checkDate
    },

    moreThanEqual: function (checkDate) {

        return this.moreThan(checkDate, true)
    },

    lessThan: function (checkDate, withEqualCurrent) {

        checkDate = this.parseDateString(checkDate)

        var current = this.getCurrent().getTime()
        var checkDate = new Date(checkDate).getTime()

        withEqualCurrent = withEqualCurrent || false

        if (withEqualCurrent) {
            return current <= checkDate
        }

        return current < checkDate
    },

    lessThanEqual: function (checkDate) {

        return this.lessThan(checkDate, true)
    },

    parseDateString: function (checkDate) {

        var date = new Date(checkDate)
        date = this.createFormat(date)

        var date = [
            date.year,
            (date.month < 9 ? ('0' + date.month) : date.month),
            (date.date < 9 ? ('0' + date.date) : date.date)
        ]

        return date.join('-') + ' 00:00:00'
    }
}