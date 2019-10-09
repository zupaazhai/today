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
today.next(1, 'month')
today.next(2, 'year')

return 

{
    weekDay: 'monday',
    date: 1,
    month: 6,
    year: 2019
}

```
