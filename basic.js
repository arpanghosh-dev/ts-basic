"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hero;
function getHero(){
    return "hi";
}
hero = getHero();
// ==============================================
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
// ====================================================
function signupUser(name, email, isAdmin) {
    if (name === void 0) { name = "User"; }
    if (email === void 0) { email = "example@mail.com"; }
    if (isAdmin === void 0) { isAdmin = false; }
}
signupUser("amit", "a@a.com");
