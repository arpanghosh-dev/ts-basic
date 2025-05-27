let hero: string;

function getHero(): string {
    return "hi";
}

hero = getHero();

// ==============================================
function addTwo(num: number): number {
    return num + 2;
}

console.log(addTwo(5));

// ====================================================


function signupUser(name: string = "User", email: string = "example@mail.com", isAdmin: boolean = false) {
}
signupUser("amit", "a@a.com");

// =======================================================

const getStringValue = (): string => {
    return "";
}

// =======================================================

const heros = ["thor", "iron-man", "captain-india", "hanoman"];

heros.map((hero): string => {
    return `name of hero is ${hero}`;
});

//=====================================================

function errLog(errMsg: string): void {
    console.log(errMsg);
}

//===================================================

function throwError(errMsg: string): never {
    throw new Error(errMsg);
}

//===================================================

const user = {
    name: "Amit mandal",
    email: "amit@emai.com",
    isAdmin: false
}

type createusertype = {
    name: string;
    email: string;
}

function createUser({ name, email }: createusertype) { }

// createUser({name:"amdjdj",email:"email@.com"}) // OK
// createUser({name:"amdjdj",email:"email@.com",isActive:false}) // NOT-OK


// let data = {name:"amdjdj",email:"email@.com",isActive:false}
// createUser(data); // FIX-OF-ABOVE

// ================================================


function createCourse(): { name: string, price: number } {

    return {
        name: "course",
        price: 12456
    }
}

//=================================================

// readonly

type NewUser = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    phoneNumber?: number; // optional
}

let user1: NewUser = {
    _id: "1245369856",
    name: "j",
    email: "",
    isActive: false
}

user1.email = "hello@email.com" // can be changeable
// user1._id = "12546325402152" // Cannot assign to '_id' because it is a read-only property.


// export { }