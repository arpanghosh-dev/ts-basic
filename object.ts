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

//====================================

type cardNumber = {
    cardnumber: string
}

type carDate = {
    carddate : string
}

type cardDetails = carDate & cardNumber & {
    cvv : number
}

//===========================================

let friends: Array<string> = [];
// let friends: string[] = [];

let rollnumbers: number[] = [];
// let rollnumbers: Array<number> = [];

type User = {
    name:string;
    age:number;
}

let allUsers: User[] = [];

allUsers.push({name:"amin",age:4}) // OK
// allUsers.push({age:4}) // NOT-OK 
export {}