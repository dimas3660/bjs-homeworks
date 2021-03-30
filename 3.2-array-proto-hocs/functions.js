`use strict`
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(function(item){return item.name});
}

//console.log(getNames());

function getCountReliableWeapons(param) {
    return weapons.filter(function(item){return item.durability>param}).length;
}

//console.log(getCountReliableWeapons(200));

function hasReliableWeapons(param) {
     return weapons.map(function(item){return item.durability}).some(function (item) {return item>param});
}

function getReliableWeaponsNames(param) {
    return (weapons.filter(item => item.durability > param)).map(item => item.name);
}

function getTotalDamage() {
    return weapons.reduce((prev, cur) => prev + cur.attack, 0);
}

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
}

function memorize(fn, limit) {
    const memory = [];

    return function newF(...args) {
        const obj = memory.find(item => compareArrays(item.args, args));

        if (obj) {
            return obj.result;
        }

        const result = fn(...args);

        if (memory.length > limit) {
            memory.shift();
        }
        memory.push({
            args,
            result
        });
        return result;
    }
}
const mSum = memorize(sum, 2);