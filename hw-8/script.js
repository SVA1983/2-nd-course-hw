// Задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

function name(arr, instr) { 
return instr(arr)
    
}

function mix(array) {
return array.sort((a, b) => (a.age - b.age))
    
}
name(people, mix)

// Задание 2

function isPositive(arr) {
 return arr.filter((a => a >= 0))

}

function isMale(arr2) { 
return arr2.filter(a => (a.gender == 'male'))

}

function filter(array, instr) { 
return instr(array)

};
const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

// Задание 3


const timer = (deadline) => {
	const interval = setInterval(() => {
let a = new Date(Date.now());
		console.log(a);
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 10000)
};

timer(3);

// Задание 4

function delayForSecond(callback) {
 return setTimeout(callback, 3000)
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond((setTimeout(() => sayHi('Глеб'), 1001)))








