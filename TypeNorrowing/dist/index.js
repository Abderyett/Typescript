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
