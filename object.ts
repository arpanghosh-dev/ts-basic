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

export {}