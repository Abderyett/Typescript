var User = /** @class */ (function () {
    function User(username, email) {
        this.username = username;
        this.email = email;
    }
    User.prototype.logout = function () {
        console.log("".concat(this.username, " is log out!"));
    };
    return User;
}());
export default User;
