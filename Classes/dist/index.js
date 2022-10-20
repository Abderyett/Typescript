"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    // public readonly name: string;
    // public age: number;
    // private _score: number = 0;
    function Player(name, age, _score) {
        if (_score === void 0) { _score = 0; }
        this.name = name;
        this.age = age;
        this._score = _score;
    }
    Player.prototype.secretMethod = function () {
        console.log('Secret method');
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.name, " ").concat(this.age);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error('Score must be positive');
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var superPlayer = /** @class */ (function (_super) {
    __extends(superPlayer, _super);
    function superPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    superPlayer.prototype.maxScore = function () {
        this._score = 99999;
    };
    return superPlayer;
}(Player));
var player1 = new Player('Colt', 35, 100);
player1.score = 99;
// player1.score = 23;
// it's still run method on runtime
// player1.secretMethod();
