"use strict";
console.clear();
function triple(thing) {
    if (typeof thing === 'string') {
        return thing.repeat(3);
    }
    return thing * 3;
}
console.log(triple(3));
var printLetter = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        console.log('there is nothing');
    }
};
// Equality narrowing
function doThing(x, y) {
    if (x === y) {
        return x.toUpperCase();
    }
}
function getRuntime(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    else {
        return media.duration;
    }
}
console.log(getRuntime({ title: 'Shawshank redemption', duration: 140 }));
console.log(getRuntime({ title: 'Mentalist', numEpisodes: 60, episodeDuration: 50 }));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    return console.log(new Date(date).toUTCString());
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(username) {
        this.username = username;
    }
    return Company;
}());
function printEntity(entity) {
    if (entity instanceof User) {
        console.log(entity.name);
    }
    else {
        console.log(entity.username);
    }
}
