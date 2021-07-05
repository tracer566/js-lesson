function check(){
	let cbox
	cbox = document.getElementById('one')
	console.log(cbox)

	if(cbox.checked){
		alert('Чекбокс отмечен')
	} else {
		alert('Галочка снята')
	}
}

function checkAll(){
	let radio = document.querySelectorAll('input[type="radio"]')
	console.log(radio)
	for(let i = 0; i < radio.length;i++){
		if(radio[i].checked === false){
			radio[i].checked = true
		} else {
			radio[i].checked = false
		}
	}
}

let num = 8

// if(num > 5){
// 	console.log('Условие верно')
// } else if(num == '8' ){
// 	console.log('Условие неверно')
// } else {
// 	console.log('Условие неопределенно')
// }

num > 5 
? console.log('Условие верно') 
: num == '8' 
? console.log('Условие неверно')
: console.log('Условие неопределенно')

let unknow

// if(true && false){
// 	unknow = 66
// } else {
// 	unknow = 3266
// }

unknow = true && true ? 66 : 3266
console.log(unknow)

let numForSwitch = 1000
switch(numForSwitch){
	case 1200:
		console.log('Больше чем ' + numForSwitch)
		break
	case 1000:
		console.log('Условия равны')
		break
	case 700:
		console.log('Меньше чем '+ numForSwitch)
		break
	default:
		console.log('Не число')
		break

}

// цикл while

// let numForWhile = 2
// while(numForWhile < 40){
// 	console.log(numForWhile)
// 	numForWhile+=10
// }

//цикл do while

// do {
// 	console.log(numForWhile)
// 	numForWhile+=5
// } while (numForWhile < 50)

// цикл for

for(let i = 22;i < 124; i+=10){
	console.log('i:',i)
}