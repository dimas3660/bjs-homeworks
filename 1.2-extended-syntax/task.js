"use strict";
function getResult(a, b, c) {
    let discriminant = (b ** 2) - (4 * a * c);//вычисление дискриминанта
    let x = [];

    if (discriminant == 0) { //проверка на равенство дискриминанта 0. Если равен, то выводится массив одного элемента
        x[0] = (((-b) + Math.sqrt(discriminant)) / (2 * a));

    } else if (discriminant > 0) { //проверка дискиминанта. Если больше 0, то выводится массив одного элемента
        x[0] = (((-b) + Math.sqrt(discriminant)) / (2 * a));
        x[1] = (((-b) - Math.sqrt(discriminant)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks) {
    let ratings = marks; // присваиваем переменной значение входящее в функцию (массив)
    let numberRatings = ratings.length; // присваиваем переенной длину массива
    let average = 0; // присваиваем начальное среднне 0
    let arrayRatings = []; // массив для сброса лишних оценок
    
    if (numberRatings == 0) { // проверка на 0 массива
        return 0;
    }
    
    arrayRatings = ratings.splice(5); //обрезка оценок до 5 штук

    for (let i = 0; i < ratings.length; i++) {
        average += ratings[i]; //высчитавается общая сумма оценок
    }

    average /= ratings.length; // расчет средней оценки
    return average;

}

function askDrink(name, dateOfBirthday) {
    let date = dateOfBirthday.getFullYear(); //берем год от вводимой даты
    let currentDate = new Date();//берем текущую дату компьютера
    let date1 = currentDate.getFullYear();//берем год от текущей даты
    
    if ((date1-date) > 18) { //вычисляем возраст разницей текущей даты и даты пользователя
        return `Не желаете ли олд-фэшн, ${name}?` //выврдим ответ если возраст больше 18
    } else {
       return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!` // выводим ответ если возраст меньше 18
    }
    
    }
