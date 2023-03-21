// Задание 1

const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
	if (num[i] === 0) break;
	console.log(num[i])
};


// Задание 2


const q = [1, 5, 4, 10, 0, 3]; 
let a = q.indexOf(4); console.log(a)


// Задание 3

let numbers = [1, 3, 5, 10, 20]; 
numbers = numbers.join(' '); console.log(numbers)

// Задание 4


let b = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1]
];

for (let c of b) {for (let d of c) {console.log(d)
    
}
    
}


// Задание 5


let x = [1, 1, 1]; 
x.push(2, 2, 2); console.log(x)



// Задание 6

let y = [9, 8, 7, 'a', 6, 5];
 y.sort(); 
 y.pop(); 
 console.log(y)

// Задание 7


let masNumb = [9, 8, 7, 6, 5]; 
let answer = Number(prompt('Введите число от 1 до 10'));
let result = masNumb.includes(answer)  if (result == true) {console.log('yes')  
} else {console.log('no')  
} 

// Задание 8
let str = 'abcdef'; 
let rev = str.split('').reverse().join(''); 
console.log(rev)

// Задание 9

let mas = [[1, 2, 3, ], [4, 5, 6]];
let result = [].concat(mas[0], mas[1]);
console.log(result)


// Задание 10

let num = [3, 2, 6, 4, 9]; 
	 for(let i = 0; i < num.length - 1; i++) { 
	let sum = (num[i] + num[i + 1]); console.log(sum)
}

// Задание 11

const conNumbers = prompt('Введите любые числа');
const numbers = Array.from(conNumbers);
let result = numbers.map(i => (i = i ** 2)); 
console.log(result)


// Задание 12

let str = ['пуля', 'дура', 'штык', 'молодец'];
let numStr = str.map((nm) => {
  return nm.length;
});
console.log(numStr)

// Задание 13


let str = prompt('Введите любые числа');
let strMas = str.split(''); 
strMas = strMas.map(nm => (nm * - 1)); 
console.log(strMas)



















