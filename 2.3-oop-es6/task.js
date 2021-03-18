"use strict"
//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }

}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }

}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }

}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }

}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }

}

//Задача №2
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let one = this.books[i];
            if (one[type] === value) {
                return one;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }

}


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//Задача 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.journal = {};
        this.marks = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!(subject in this.journal)) {
            this.journal[subject] = [];
        }
        if (grade >= 1 && grade <= 5) {
            this.journal[subject].push(grade);
        } else {
            console.log(`Поставлена неверная оценка ${grade} по предмету ${subject}. Допускаются только оценки от 1 до 5`);
        }
        return this.journal[subject].lenght;
    }

    getAverageBySubject(subject) {
        let marks;
        if (subject in this.journal) {
            marks = this.journal[subject];
        } else if (!(subject in this.journal)) {
            return 0;
        }
        let numberRatings = this.journal[subject].length;
        let averageSection = 0;
        if (numberRatings == 0) {
            return 0;
        }
        for (let i = 0; i < marks.length; i++) {
            averageSection += marks[i];
        }
        averageSection /= marks.length;
        return averageSection;
    }

    getTotalAverage() {
        let scoreAverage = {};
        let marksAverage = [];
        for (let prop in this.journal) {
            scoreAverage[prop] = this.getAverageBySubject(prop);
            marksAverage.push(this.getAverageBySubject(prop));
        }
        let result = 0;
        let grade = function () {
            for (let i = 0; i < marksAverage.length; i++) {
                result += marksAverage[i];
            }
            result /= marksAverage.length;
            return result;
        }
        scoreAverage.average = grade();
        return scoreAverage.average;
    }

}


const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());
