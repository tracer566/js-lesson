let budjet,
				magName,
				time,
				price


function start(){
budjet = prompt('Каков ваш бюджет?')

// isNaN - true,если не число
if(isNaN(budjet) || budjet === "" || budjet === null ){
	budjet = prompt('Каков ваш бюджет?')
}
console.log(typeof budjet)

 magName = prompt('Как называеться ваш магазин?','Эльдорадо').toUpperCase()
	time = 19
}

// start()


let mainList = {
	money: budjet,
	name: magName,
	shopGoods: [],
	employers:{},
	open:true,
	discount: false
}


function chooseGoods(){
for(let i = 0;i < 5;i++){
	let a = prompt(i + '.' + ' Какой тип товара будем продавать?','Тыква')

//проверка на правильность ввода данных (typeof (a)) !== null отвечает за кнопку отмены
	if((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50 ){
		console.log('Все введено верно')
		mainList.shopGoods[i] = a
	} else {
		i = i - 1
	}
}

}

// chooseGoods()

	function workTime(time){
				if(time < 0){
			console.log('Это невозможно')
			} else if(time > 8 && time < 20){
			console.log('Наше время работы')
			} else if (time < 24 && time < 8){
			console.log('Слишком рано или поздно работать')
			} else {
			console.log('В сутках 24 часа')
			}
	}

	workTime(67)


alert(mainList['money'] / 30)
console.log(mainList)


