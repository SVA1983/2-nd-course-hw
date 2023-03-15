function mounth() {let season = Number(prompt('Введите календарный номер месяца'));
if (season === 12 || season === 1 || season === 2 ) return(alert("Зима"))
else if (season === 3 || season === 4 || season === 5 ) return(alert("Весна"))
else if (season === 6 || season === 7 || season === 8 ) return(alert("Лето"))
else if (season === 9 || season === 10 || season === 11 ) return(alert("Осень"))
else alert('Вы ввели неправильное значение!');
}
mounth()