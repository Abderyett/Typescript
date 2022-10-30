"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
console.clear();
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(function (res) {
    console.log(res.data);
})
    .catch(function (err) { return console.log(err); });
