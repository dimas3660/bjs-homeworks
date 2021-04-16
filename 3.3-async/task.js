"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, fn, id) {
        if (!id) {
            throw new Error("Ошибка! Id не передан!");
        }

        if (this.alarmCollection.some(item => item.id === id)) {
            return console.error("Ошибка! Id уже существует");
        }

        this.alarmCollection.push({
            time,
            fn,
            id
        });
    }

    removeClock(id) {
        let alarmLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        let alarmLengthNew = this.alarmCollection.length;
        if (alarmLength !== alarmLengthNew) {
            return true;
        } else {
            return false;
        }

    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        const getCurrentTime = this.getCurrentFormattedTime;

        function checkClock(clock) {
            if (getCurrentTime() === clock.time) {
                clock.fn();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item))
            }, 1000)
        }
    }



    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id} время: ${elem.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
const alarm = new AlarmClock;
console.log(alarm.getCurrentFormattedTime());
