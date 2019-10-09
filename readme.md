# today.js

## JS ltbrary use for check date

### How to use

#### setCurrent()
```
var today = new Today

# set current date, if no set current date, default is today
today.setCurrent(2010, 10, 4)
```

#### next()
```
# get next date, month and year

today.next(2, 'day')

output 
{
    weekDay: 'sunday',
    date: 6,
    month: 10,
    year: 2019
}

today.next(1, 'month')

output 
{
    weekDay: 'monday',
    date: 4,
    month: 11,
    year: 2019
}

today.next(2, 'year')

output 
{
    weekDay: 'sunday',
    date: 4,
    month: 10,
    year: 2020
}
```

#### previous()
```
# get previous date, month and year

today.previous(2, 'day')

output 
{
    weekDay: 'wednesday',
    date: 2,
    month: 10,
    year: 2019
}

today.previous(1, 'month')

output 
{
    weekDay: 'wednesday',
    date: 4,
    month: 9,
    year: 2019
}

today.previous(2, 'year')

output 
{
    weekDay: 'wednesday',
    date: 4,
    month: 10,
    year: 2018
}
```

#### equal()
```
# check today equal selected date, return true/false

today.equal('2019-10-05')
```

#### between()
```
# check today between in selected date, return true/false

today.between('2019-10-05', '2019-10-30')
```

#### moreThan()
```
# check today more than selected date, return true/false

today.between('2019-10-03')
```

#### moreThanEqual()
```
# check today more than or equal selected date, return true/false

today.between('2019-10-04')
```

#### lessThan()
```
# check today less than selected date, return true/false

today.lessThan('2019-10-03')
```

#### lessThanEqual()
```
# check today less than or equal selected date, return true/false

today.lessThanEqual('2019-10-03')
```