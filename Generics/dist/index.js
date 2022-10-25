"use strict";
// Build in Generics
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
