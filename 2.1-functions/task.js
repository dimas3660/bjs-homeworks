"use strict"

function getSolutions(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    if (D < 0) {
        return {
            D: D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = (-b) / (2 * a);
        return {
            D: D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (((-b) + Math.sqrt(D)) / (2 * a));
        let x2 = (((-b) - Math.sqrt(D)) / (2 * a));
        return {
            D: D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    if (result.D < 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`, `Значене дискриминанта: ${result.D}`, `Уравнение не имеет вещестенных корней`);
    } else if (result.D === 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`, `Значене дискриминанта: ${result.D}`, `Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`, `Значене дискриминанта: ${result.D}`, `Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]} `);
    }
}
// Задача №2

function getAverageScore(data) { 
    let scoreAverage = {}; 
    let averageMark = []; 
    for (let key in data) { 
        scoreAverage[key] = getAverageMark(data[key]);
        averageMark.push(getAverageMark(data[key]));
    }
    scoreAverage.average = getAverageMark(averageMark);

    return scoreAverage;
}

function getAverageMark(marks) {
    let numberRatings = marks.length;
    let average = 0;

    if (numberRatings == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }

    average /= marks.length;
    return average;
}

// Задача №3
function getPersonData(secretData) {
   let person = {};
    person.firstName = getDecodedValue(secretData["aaa"]);
    person.lastName = getDecodedValue(secretData["bbb"]);

    return person;
}

function getDecodedValue(secret) {
    let name;
    if (secret == 0) {
        name = "Родриго";
    }
    else {
        name = "Эмильо";
    }
    
    return name;
}