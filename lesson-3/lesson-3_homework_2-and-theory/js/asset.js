let carName = "Mustang"
let carYear = 1987
let personYear = 1998

function calcAge(year){
	let current = 2021
	let result = current - year
	return result
}

function checkLogAge(year,object,compareTo){
	if(calcAge(year) > compareTo ){
	console.log('Возраст ' + object + ' больше ' + compareTo + ' лет')
} else {
	console.log('Возраст ' + object + ' меньше ' + compareTo + ' лет')
}
}

checkLogAge(carYear,'машины',69)
checkLogAge(personYear,'человека',20)