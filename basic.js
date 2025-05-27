var hero;
function getHero() {
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
// =======================================================
var getStringValue = function () {
    return "";
};
// =======================================================
var heros = ["thor", "iron-man", "captain-india", "hanoman"];
heros.map(function (hero) {
    return "name of hero is ".concat(hero);
});
//=====================================================
function errLog(errMsg) {
    console.log(errMsg);
}
//===================================================
function throwError(errMsg) {
    throw new Error(errMsg);
}
//===================================================
var user = {
    name: "Amit mandal",
    email: "amit@emai.com",
    isAdmin: false
};
function createUser(_a) {
    var name = _a.name, email = _a.email;
}
// createUser({name:"amdjdj",email:"email@.com"}) // OK
// createUser({name:"amdjdj",email:"email@.com",isActive:false}) // NOT-OK
// let data = {name:"amdjdj",email:"email@.com",isActive:false}
// createUser(data); // FIX-OF-ABOVE
// ================================================
function createCourse() {
    return {
        name: "course",
        price: 12456
    };
}
var user1 = {
    _id: "1245369856",
    name: "j",
    email: "",
    isActive: false
};
user1.email = "hello@email.com"; // can be changeable
// user1._id = "12546325402152" // Cannot assign to '_id' because it is a read-only property.
// export { }
