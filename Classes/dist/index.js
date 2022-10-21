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
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var bike1 = new Bike('red');
var Jacket = /** @class */ (function () {
    function Jacket(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.brand, " ").concat(this.color, " Jacket"));
    };
    return Jacket;
}());
var jacket1 = new Jacket('prada', 'black');
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FulltimeEmployee.prototype.getPayed = function () {
        return this.salary;
    };
    return FulltimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, workedHour) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.workedHour = workedHour;
        return _this;
    }
    PartTimeEmployee.prototype.getPayed = function () {
        return this.hourlyRate * this.workedHour;
    };
    return PartTimeEmployee;
}(Employee));
var ben = new FulltimeEmployee('Ben', 'white', 5000);
console.log(ben.getPayed());
var rob = new PartTimeEmployee('Rob', 'Holding', 20, 60);
console.log(rob.getPayed());
