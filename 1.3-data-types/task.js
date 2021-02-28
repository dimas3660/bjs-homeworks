"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let contr = parseInt(contribution,10);//преобразование строки в число
    //console.log(typeof(contr));
    let Amount = parseInt(amount,10);//преобразование строки в число
    //console.log(typeof(Amount));
    let P = percent/(100*12); //расчет 1\12 процентной ставки
    let date1 = new Date();//берем текущую дату
    
    let day = (date.getTime() - date1.getTime()) / (1000 * 3600 * 24); // 1000 мс в 1 сек, секунд в минуте 60, в часе 60 мин, поэтому 3600 сек в часе  - итого разница в днях 
    let month = 30.4375; // среднее количество дней в месяце
    let n = Math.round(day / month); // считаем месяцы
    let S = Amount - contr; //вычисляем тело кредита
    let payment = S*(P+P/(((1+P)**n)-1));
    let totalAmount = parseFloat((payment * n).toFixed(2));//функция  toFixed дает 2 цифры после запятой, parseFloat преобразует строку в число с дробной частью
    
    return totalAmount;

}

function getGreeting(name) {
    if (typeof (name) == "undefined" || name == "") {
        name = "Аноним";
    }

    return `Привет, мир! Меня зовут ${name}.`
}
