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



let monthNumber = String(prompt('Введите название месяца'));
switch (monthNumber) {
        case monthNumber = '1': 
        alert('Январь, второй месяц зимы.')
        break;
        case monthNumber = '2': 
        alert('Февраль, третий месяц зимы.')
        break;
        case monthNumber = '3': 
        alert('Март, первый месяц весны.')
        break;
        case monthNumber = '4': 
        alert('Апрель, второй месяц весны.')
        break;
        case monthNumber = '5':
        alert('Май, третий месяц весны.')
        break;
        case monthNumber = '6': 
        alert('Июнь, первый месяц лета.')
        break;
        case monthNumber = '7': 
        alert('Июль, второй месяц лета.')
        break;
        case monthNumber = '8':
        alert('Август, третий месяц лета.')
        break;
        case monthNumber = '9': 
        alert('Сентябрь, первый месяц осени.')
        break;
        case monthNumber = '10':
        alert('Октябрь, второй месяц осени.')
        break;
        case monthNumber = '11':
        alert('Ноябрь, третий месяц осени.')
        break;
        case monthNumber = '12': 
        alert('Декабрь, первый месяц зимы.')
        break;
    default:
        alert('Этот месяц еще не изобрели :))')
        break;
};


// задание 7


let check = prompt ("Пожалуйста, введите любое число");
console.log(isNaN(check));
if(check % 2 == 0) {alert('Четное')} else {alert('Не четное')};

// задание 8,9

alert("Давайте определим систему и год выпуска Вашего телефона");
let clientOS = Number(prompt("Если IOS, - нажмите 0, если Android, нажмите - 1"));
let clientDeviceYear = Number(prompt("Введите год выпуска Вашего устройства"));
if ((clientOS === 0) && (clientDeviceYear > 2015 ))  {alert('Ваша система - IOS. Ссылка на приложение "Full"')} 
else if((clientOS === 0) && (clientDeviceYear <= 2015)) {alert('Ваша система - IOS light. Ссылка на приложение "Light"')}
else if ((clientOS === 1) && (clientDeviceYear <= 2015)) {alert('Ваша система - Android light. Ссылка на приложение "Light"')}
else {alert('Ваша система - Android. Ссылка на приложение "Full"')};

