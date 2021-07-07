let budjet = prompt('Каков ваш бюджет?')
let magName = prompt('Как называеться ваш магазин?','Эльдорадо')
let time = 19

let mainList = {
	money: budjet,
	name: magName,
	shopGoods: [],
	employers:{},
	open:true
}

// for(let i = 0;i < 5;i++){
// 	let a = prompt(i + '.' + ' Какой тип товара будем продавать?','Тыква')

// //проверка на правильность ввода данных (typeof (a)) !== null отвечает за кнопку отмены
// 	if((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ){
// 		console.log('Все введено верно')
// 		mainList.shopGoods[i] = a
// 	} else {
// 		alert('Неправильный ввод данных')
// 	}
// }

// цикл while
// let z = 0
// while(z < 5){
// 	let a = prompt(z + '.' + ' Какой тип товара будем продавать?','Тыква')

// 		if((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ){
// 		console.log('Все введено верно')
// 		mainList.shopGoods[z] = a
// 	} else {
// 		alert('Неправильный ввод данных')
// 	}

// 	z++
// }
// цикл while

// цикл do while
let y = 0
do{
let a = prompt(y + '.' + ' Какой тип товара будем продавать?','Тыква')

		if((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ){
		console.log('Все введено верно')
		mainList.shopGoods[y] = a
	} else {
		alert('Неправильный ввод данных')
	}

	y++
} while (y < 5)
// цикл do while

if(time < 0){
	console.log('Это невозможно')
} else if(time > 8 && time < 20){
	console.log('Наше время работы')
} else if (time < 24 && time < 8){
	console.log('Слишком рано или поздно работать')
} else {
	console.log('В сутках 24 часа')
}


alert(mainList['money'] / 30)
console.log(mainList)

