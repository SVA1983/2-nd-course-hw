// Задание 1

const string = 'Шторм';
console.log(string.toUpperCase());

// Задание 2


function animals(a) 
{
const search = 'ко';
let arr = [];
a.forEach((a) => {
	if (a.toLowerCase().startsWith(search.toLowerCase())) arr.push(a); console.log(arr);
	
});}; animals(['Кошка', 'Кит', 'Комар', 'Носорог'])




// Задание 3

let num = 32.58884;
Math.ceil(num);


let num = 32.58884;
Math.floor(num);

let num = 32.58884;
Math.round(num);


// Задание 4


Math.min(52, 53, 49, 77, 21, 32);
Math.max(52, 53, 49, 77, 21, 32);

// Задание 5


function numRandom() {
  return Math.round(Math.random() * 10);
}

console.log(numRandom());

// задание 6

let num = prompt();
let a = 0;
let b = num;
let arr = []
for(i = 0; i < Math.floor(b / 2); i++) {arr.push((Math.round(Math.random())) * (b - a) + a)}; console.log(arr) 


// Задание 7

let a = Number(prompt());
let e = Number(prompt());
console.log(Math.round(Math.random() * ((e - a) + a)));  

// Задание 8

let myDate = new Date(); 
console.log(+myDate)

// задание 9

let day = new Date();
day.setDate(day.getDate() + 73)
console.log(day)

// Задание 10

let nowDate = new Date();
console.log(nowDate);

function rusFormat(nowDate) 
{
    let now = nowDate.getDay();
    let mounth = (nowDate.getMonth());
    let year = nowDate.getFullYear();
    let week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб',];
    let mounts = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Ин', 'Ил', 'Авг', 'Сен', 'Окт', 'Дек',];

 return `${week[now]}, ${now}, ${mounts[mounth]}, ${year}`;   
}
 console.log(rusFormat(nowDate));
    

																								// Fri Mar 24 2023 19:52:52 GMT+0530 (Индия)
