function openConf(text){
let x = confirm('Это была функция')
console.log(x + ' ' + text)

}

// openConf('Привет функция!')

/*возращение результата после return функция остановиться*/
function numbers(){
	let xx = 55
	let y = 35
	return xx + y
}


console.log(numbers())
// console.log(xx) //локальная переменная функции,ее не видно вне функции

function calc(x,y){
	return x * y
}

console.log(calc(55,66))
console.log(calc(575,676))
console.log(calc(585,686))
console.log(calc(595,696))


// эту функцию нельзя вызвать до объявления,а другие можно
let summ = function(r,u){
	let res = r + u + ' -Это просто текст'
	return res
}

console.log('summ:',summ(55,77))


let arrow = (x,z) => {
	let step = (x + z)**4
	return step
}

console.log('стрелочная функция',arrow(66,66))

let str = "Длина текста: lenght"
console.log('str-lenght',str.length)
console.log('str-toUpperCase',str.toUpperCase())
console.log('str-toLoverCase',str.toLowerCase())

let numb = 55.789
let num_str = '55.789'
console.log('Math.round:',Math.round(numb))
console.log('parseInt:',parseInt(num_str))
console.log('parseFloat:',parseFloat(num_str))


const btn = document.querySelector('input[type="button"]')
const input = document.querySelector('input[type="text"]')

btn.addEventListener('click', inputAdgvard)


function inputAdgvard(){
let value = input.value
if(value === '' && value === null && (typeof (value) === 'number')){
	alert('Ввод неправильный')
} else {
	alert('Все гуд')
	console.log(value)
}
}

/*callback функции*/
function first(){
	// выполнится 1 раз с задержкой в 1000мс
	setTimeout(function(){
		console.log(1)
	},1000)

}

function second(){
	console.log(2)
}

first()
second()

// 2-ой пример

function learnJs(lang,callback){
	console.log('Я учу ' + lang)
	callback()
}

// вторая функция выполниться строго после 1-ой и передаеться вторым параметром как callback()
learnJs('Javascript', function(){
	console.log('Как же это сложно, что то учить')
})