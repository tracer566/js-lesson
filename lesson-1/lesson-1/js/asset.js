
{
	var firstVar = 55
}
{
	let twoVar = 66
}
const threeVar = 'Письмо навечно'

console.log(threeVar)


let num = 1236
let str = 'Shink'
let bool = true
let und
let symbol = Symbol()
let list = null
let nan = NaN
let obj = [
	'a',2
]


let inf = 4/0
console.log(typeof inf)
console.log(typeof list)

obj = {
	name: "Jerry",
	age: 255,
	isMarried:false
}

console.log(obj['name'])
console.log(obj.age)

// function modalAl(){
// 	alert('Внимание есть мысль!')
// }

// modalAl() //подвисает localhost

// let question = confirm('Вам есть 2500лет?')
// let question2 = +prompt('Вам скока лет?','infinity')

console.log(typeof question)
console.log(typeof question2)

let incr = 20
				decr = 30

console.log(++incr)
console.log(decr--)

console.log(7%2)

console.log('20' === 20)

let isChecked = false
let ModalOpen = false

console.log('isChecked || ModalOpen:',isChecked || !ModalOpen)