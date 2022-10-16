"use strict";
var Player = /** @class */ (function () {
    function Player(name, age) {
        this.score = 0;
        this.name = name;
        this.age = age;
    }
    Player.prototype.secretMethod = function () {
        console.log('Secret method');
    };
    return Player;
}());
var player1 = new Player('Jesse', 23);
// player1.score = 23;
// it's still run method on runtime
// player1.secretMethod();
