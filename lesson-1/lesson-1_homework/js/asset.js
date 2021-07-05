let budjet = prompt('Каков ваш бюджет?')
let magName = prompt('Как называеться ваш магазин?','Эльдорадо')

let mainList = {
	money: budjet,
	name: magName,
	shopGoods: [],
	employers:{},
	open:true
}

mainList.shopGoods[1] = prompt('Какой тип товара будем продавать?','Тыква')
mainList.shopGoods[2] = prompt('Какой тип товара будем продавать?','Арбуз')
mainList.shopGoods[3] = prompt('Какой тип товара будем продавать?','Дыня')

console.log(mainList)
alert(mainList['money'] / 30)

