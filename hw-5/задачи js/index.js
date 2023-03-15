// Задание 1

function minNumber(c, b) {
    c = 96; b = 12; return (c < b ? c : b);
 console.log()
}; 
minNumber();



// Задание 2

function number(a) {
    let b = prompt(a);

    if (b % 2 === 0) {console.log('четное');
        
    } else {console.log('не четное');
       
    }   

};
number("введите число");



// Задание 3.1

let squared = (a) => a ** 2; console.log(squared(6))

// Задание 3.2

function squared(b) {
    a = b; return (a = a ** 2); console.log();
};

squared(6); 



// Задание 4 

function userAge() {
    let age = prompt('Сколько Вам лет?');

if (age < 0) {alert('Вы ввели неправильное значение')
}

else if (age <= 12) {
    alert('Привет, друг!')
}
    
else {alert('Добро пожаловать!')
}
    
};

userAge()



// задание 5

function numberSum(x, y) {
    (x = Number(prompt('введите число')), y = Number(prompt('введите число'))); 
    
    return isNaN(x) === false && isNaN(y) === false ? alert(x + y) : alert('Одно или оба значения не являются числом')  
}; 

numberSum();



// задание 6

function numberMult() {
    (n = Number(prompt('введите число'))); 
    
    return isNaN(n) === false ? alert(`n в кубе равняется ${n = n ** 3}`) 
    : alert('Одно или оба значения не являются числом')
    
}; 
numberMult();



// Задание 7 

function getArea() {return this.area = (this.radius ** 2) * 3.14;  
}
function getPerimeter() {return this.perimeter = this.radius * 2 * 3.14;  
}

const circle1 = {
    radius: 20,
    area: getArea,
};
const circle2 = {
    radius: 10,
    perimeter: getPerimeter,
};

console.log(circle1.area());
console.log(circle2.perimeter());