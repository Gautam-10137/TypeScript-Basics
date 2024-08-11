"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase(); // I shouldn't be allowed to do this in ts, but it is ,due to type "any" 
    return num + 2;
}
addTwo(5);
addTwo("5"); //  allowed
// Solution : add implicit type to parameter
function addThree(num) {
    // num.toUpperCase();     not allowed
    return num + 3;
}
// addThree("5")    not allowed
addThree(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("gautam");
// getUpper(4);   not allowed
function signUpUser(name, email, isPaid) { }
signUpUser("gautam", "pahwa@test.com", false);
//  providing default value to parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("gautam", "pahwa@example.com");
function addFour(num) {
    return "hello";
}
addFour(5);
