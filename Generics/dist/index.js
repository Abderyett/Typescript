"use strict";
// Build in Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.clear();
var num = [];
var colors = [];
var input = document.querySelector('#username');
input.value = 'Jesse James';
var btn = document.querySelector('.btn');
// Generic function
function indentity(item) {
    return item;
}
indentity('Hello');
indentity(5);
function getRandElement(list) {
    var raIdx = Math.floor(Math.random() * list.length);
    return list[raIdx];
}
console.log(getRandElement(['a', 'b', 'c', 'd', 'e', 'f']));
getRandElement([5, 8, 5, 5]);
// Type constrain
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var combo = merge({ name: 'Colt' }, { pets: ['Bird', 'fish'] });
console.log(combo);
function printDoubleLength(thing) {
    return thing.length * 2;
}
function printDoubleLength2(thing) {
    return thing.length * 2;
}
var Playlis = /** @class */ (function () {
    function Playlis() {
        this.queue = [];
    }
    return Playlis;
}());
