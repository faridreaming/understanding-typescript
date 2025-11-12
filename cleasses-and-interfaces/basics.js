"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // name: string
    // age: number
    // public hobbies: string[] = []
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log('My age:', this.age);
    };
    return User;
}());
var user1 = new User('Farid', 20);
user1.greet();
