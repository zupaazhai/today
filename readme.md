# Today.js
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

return 

{
    weekDay: 'sunday',
    date: 6,
    month: 10,
    year: 2019
}

today.next(1, 'month')

return 
{
    weekDay: 'monday',
    date: 4,
    month: 11,
    year: 2019
}

today.next(2, 'year')

return 
{
    weekDay: 'sunday',
    date: 4,
    month: 10,
    year: 2020
}

```
