/*задание 1*/
// let x = 5
// alert(x++) //выведет 5

/*задание 2*/
console.log([ ] + false - null + true )
// выведет NaN

/*задание 3*/
let y = 1;
let x = y = 2;
console.log(x) //выведет 2
/*задание 4*/
console.log([ ] + 1 + 22) //выведет 122 строкой
/*задание 5*/
console.log( "1"[0]) //выведет 1 строкой
/*задание 6*/
console.log(2 && 1 && null && 0 && undefined ) //выведет null т.к оператор && выводит меньшее значение у чисел,а || наоборот
/*задание 7*/
let a = 1
let b = 1
console.log('!!( a && b ) ',!!( a && b ) )
console.log('( a && b ) ',( a && b ) )
/*задание 8*/
console.log('( null || 2 && 3 || 4 )',( null || 2 && 3 || 4 )) //выведет 3
/*задание 9*/
	a = [1, 2, 3];
 b = [1, 2, 3];
 console.log('a==b',a == b) //выведет false
/*задание 10*/
console.log( +"Infinity" ) //выведет infinity
/*задание 11*/
console.log("ёжик" > "яблоко") //выведет true
/*задание 12*/
console.log(0 || "" || 2 || undefined || true || falsе) //выведет 2