
QUnit.test('setCurrent(), current()', function (assert) {

	var today = new Today({language: 'en'})
	  today.setCurrent(2019, 10, 4)
  
	  assert.deepEqual(today.current(), {
		"date": 4,
		"month": 10,
		"weekDay": "friday",
		"year": 2019
	  }, 'should return object of date 2019-10-04')
})

QUnit.test('next()', function (assert) {
	
	var today = new Today({language: 'en'})
	  today.setCurrent(2019, 10, 4)
  
	assert.deepEqual(today.next(1, 'days'), {
		date: 4,
		month: 10,
		weekDay: 'friday',
		year: 2019
	}, 'should return object of 2019-10-04 because "days" not in expected date type')
  
	assert.deepEqual(today.next(1, 'day'), {
		date: 5,
		month: 10,
		weekDay: 'saturday',
		year: 2019
	}, 'should return object of 2019-10-05')

	assert.deepEqual(today.next(10, 'day'), {
		date: 14,
		month: 10,
		weekDay: 'monday',
		year: 2019
	}, 'should return object of 2019-10-14 (next 10 days)')
	
	assert.deepEqual(today.next(1, 'month'), {
		date: 4,
		month: 11,
		weekDay: 'monday',
		year: 2019
	}, 'should return object of 2019-11-04 (next 1 month)')
	
	assert.deepEqual(today.next(2, 'month'), {
		date: 4,
		month: 12,
		weekDay: 'wednesday',
		year: 2019
	}, 'should return object of 2019-12-04 (next 2 months)')
	
	assert.deepEqual(today.next(2, 'year'), {
		date: 9,
		month: 10,
		weekDay: 'saturday',
		year: 2021
	}, 'should return object of 2021-10-09 (next 2 years)')

})

QUnit.test('previous()', function (assert) {
	var today = new Today({language: 'en'})
	  today.setCurrent(2019, 10, 4)
	  
	assert.deepEqual(today.previous(1, 'days'), {
		date: 4,
		month: 10,
		weekDay: 'friday',
		year: 2019
	}, 'should return object of 2019-10-04 because "days" not in expected date type')
  
  	assert.deepEqual(today.previous(1, 'day'), {
		date: 3,
		month: 10,
		weekDay: 'thursday',
		year: 2019
	}, 'should return object of 2019-10-03')
	
	assert.deepEqual(today.previous(10, 'day'), {
		date: 24,
		month: 9,
		weekDay: 'tueday',
		year: 2019
	}, 'should return object of 2019-09-24')
	
	
	assert.deepEqual(today.previous(1, 'month'), {
		date: 4,
		month: 9,
		weekDay: 'wednesday',
		year: 2019
	}, 'should return object of 2019-09-04')
	
	
	assert.deepEqual(today.previous(3, 'month'), {
		date: 4,
		month: 7,
		weekDay: 'thursday',
		year: 2019
	}, 'should return object of 2019-07-04')
	
	
	assert.deepEqual(today.previous(2, 'year'), {
		date: 9,
		month: 10,
		weekDay: 'monday',
		year: 2017
	}, 'should return object of 2017-10-09')
})

QUnit.test('equal()', function (assert) {

	var today = new Today
	
	today.setCurrent(2019, 10, 3)
	assert.notOk(today.equal('2019-10-02'), 'should return false because current date = 2019-10-03')
	 
	today.setCurrent(2019, 10, 4)
	assert.ok(today.equal('2019-10-04'), 'should return true because current date = 2019-10-04')
	
	today.setCurrent(2019, 9, 5)
	assert.ok(today.equal('2019-09-05'), 'should return true because current date = 2019-09-05')
})

QUnit.test('between()', function (assert) {
	
	var today = new Today;
	today.setCurrent(2019, 10, 4)
	
	assert.ok(today.between('2019-10-03', '2019-10-05'), 'should return true, 2019-10-04 in 2019-10-03 and 2019-10-05')
	
	assert.notOk(today.between('2019-10-05', '2019-10-06'), 'should return false, 2019-10-04 not in 2019-10-05 and 2019-10-06')
	
})

QUnit.test('moreThan()', function (assert) {

	var today = new Today;
	
	today.setCurrent(2019, 10, 4)
	assert.notOk(today.moreThan('2019-10-05'), 'should return false, because 2019-10-04 less than 2019-10-05')
	
	today.setCurrent(2019, 10, 3)
	assert.ok(today.moreThan('2019-10-02'), 'should retrun true, because 2019-10-03 more thab 2019-10-02')
})

QUnit.test('lessThan()', function (assert) {
	
	var today= new Today
	
	today.setCurrent(2019, 10, 4)
	assert.notOk(today.lessThan('2019-10-03'), 'should return false, because 2019-10-04 more than 2019-10-03')
	assert.ok(today.lessThan('2019-10-05'), 'should return true, because 2019-10-04 less than 2019-10-04')
})

QUnit.test('moreThanEqual', function (assert) {
	
	var today = new Today
	
	today.setCurrent(2019, 10, 4)
	assert.ok(today.moreThanEqual('2019-10-04'), 'should return true, because current checkdate = current date')
	assert.ok(today.moreThanEqual('2019-10-03'), 'should return true, because 2019-10-04 > 2019-10-03')
	assert.notOk(today.moreThanEqual('2019-10-05'), 'should return false, because 2019-10-05 > today')
	
})

QUnit.test('lessThanEqual', function (assert) {
	var today = new Today
	
	today.setCurrent(2019, 10, 4)
	assert.ok(today.lessThanEqual('2019-10-04'), 'should return true, because checkdate = current date')
	assert.notOk(today.lessThanEqual('2019-10-03'), 'should return true, because 2019-10-03 < current date')
	assert.ok(today.lessThanEqual('2019-10-05'), 'should return true, because 2019-10-03 < current date')
	
})

QUnit.test('parseDateString()', function (assert) {
	
	var today = new Today
	
	assert.equal(today.parseDateString('2019-10-04'), '2019-10-04 00:00:00', 'should return 2019-10-04 00:00:00')
	assert.equal(today.parseDateString('2019-10-05'), '2019-10-05 00:00:00', 'should return 2019-10-05 00:00:00')
	
	assert.equal(today.parseDateString('2019-10-05 00:00:00'), '2019-10-05 00:00:00', 'should return 2019-10-05 00:00:00')
})