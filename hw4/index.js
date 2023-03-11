// задание 1

let q = 1; while(q <= 2) {console.log('Привет'); q++};

// задание 2

let w = 1; while(w <= 5) {console.log(w); w++};

// задание 3

for(i = 7; i <= 22; i++) {console.log(i)}

// задание 4

let obj = {
    Коля: '200',
    Вася: '300', 
    Петя: '400',
}; 
for(let key in obj) {console.log(key+' — зарплата '+obj[key]+' долларов');}

// задание 5

let num = 0; for(let n = 1000; n >= 25; n = n / 2)  {console.log(n); num++;}

// задание 6

let friday = 6; for(let friday = 6; friday <=31; friday = friday + 7) {console.log(`Сегодня пятница, ${friday} - е число. Необходимо подготовить отчет`);}