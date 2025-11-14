var User = /** @class */ (function () {
    function User() {
        this._firstName = '';
        this._lastName = '';
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name');
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name');
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    User.greet = function () {
        console.log('Hello, my name is User!');
    };
    User.classId = 1;
    return User;
}());
// const farid = new User()
// farid.firstName = 'Muhammad'
// farid.lastName = 'Farid'
// console.log(farid.fullName)
User.greet;
