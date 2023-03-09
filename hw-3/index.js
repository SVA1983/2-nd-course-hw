// задание 1

let password = prompt('Введите пароль');
password = password.toLocaleLowerCase();
password === 'пароль' ? console.log("Пароль введен верно") : console.log("Пароль введен неправильно");

// задание 2


let c = prompt(`Введите любое число`)
if (c > 0 && c < 10) {console.log('Верно')}
else {console.log('Не верно')};


// задание 3

let d = 99;
let e = 919;
if (d > 100 || e > 100)  {console.log(`Верно`);} else {console.log('Не верно');};

// задание 4

let a = 2;
let b = 3;
alert(a + b);

// задание 5



let month = String(prompt('Введите название месяца'));
let monthNumber1 = 'Январь';
let monthNumber2 = 'Февраль';
let monthNumber3 = 'Март';
let monthNumber4 = 'Апрель';
let monthNumber5 = 'Май';
let monthNumber6 = 'Июнь';
let monthNumber7 = 'Июль';
let monthNumber8 = 'Август';
let monthNumber9 = 'Сентябрь';
let monthNumber10 = 'Октябрь';
let monthNumber11 = 'Ноябрь';
let monthNumber12 = 'Деабрь';
switch (month) {
        case monthNumber1 = 'январь': 
        alert('Второй месяц зимы')
        break;
        case monthNumber2 = 'февраль': 
        alert('Третий месяц зимы')
        break;
        case monthNumber3 = 'март': 
        alert('Первый месяц весны')
        break;
        case monthNumber4 = 'апрель': 
        alert('Второй месяц весны')
        break;
        case monthNumber5 = 'май': 
        alert('Третий месяц весны')
        break;
        case monthNumber6 = 'июнь': 
        alert('Первый месяц лета')
        break;
        case monthNumber7 = 'июль': 
        alert('Второй месяц лета')
        break;
        case monthNumber8 = 'август': 
        alert('Третий месяц лета')
        break;
        case monthNumber9 = 'сентябрь': 
        alert('Первый месяц осени')
        break;
        case monthNumber10 = 'октябрь': 
        alert('Второй месяц осени')
        break;
        case monthNumber11 = 'ноябрь': 
        alert('Третий месяц осени')
        break;
        case monthNumber12 = 'деабрь': 
        alert('Первый месяц зимы')
        break;
    default:
        alert('Этот месяц еще не изобрели :))')
        break;
}


// задание 7


let check = prompt ("Пожалуйста, введите любое число");
console.log(isNaN(check));
if(check % 2 == 0) {alert('Четное')} else {alert('Не четное')};

// задание 8,9

alert("Давайте определим систему и год выпуска Вашего телефона");
let clientOS = prompt("Если IOS, - нажмите 0, если Android, нажмите - 1");
let clientDeviceYear = prompt("Введите год выпуска Вашего устройства");
let light = clientDeviceYear >= 2015 ? '' : 'облегченное';
if (clientOS === 0) {alert(`Ваша система - IOS. Установите ${light} приложение`);}
else if(clientOS === 1) {alert(`Ваша система - Android. Установите ${light} приложение`);};




// if ((clientOS === 0) + (clientDeviceYear > 2015)) {alert('Ваша система - IOS. Ссылка на приложение "bankclientios.ru"')} 
// else if ((clientOS === 0) + (clientDeviceYear <= 2015)) {alert('Ваша система - IOS light. Ссылка на приложение "LLLbankclientandroid.ru"')}
// else if ((clientOS === 1) + (clientDeviceYear <= 2015)) {alert('Ваша система - Android light. Ссылка на приложение "LLLbankclientandroid.ru"')}
// else {alert('Ваша система - Android. Ссылка на приложение "bankclientandroid.ru"')};