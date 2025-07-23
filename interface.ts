interface User {
    readonly id: number;
    name: string;
    email: string;
    googleId?: number;
    startTrail1: () => string
    startTrail2(): string;
    getDiscount(discountType: string, value: number): number
}

interface User {  // its callled re-opening of interface
    githubId: number
}

const Arindam: User = {
    id: 1245,
    name: "Arindam",
    email: "arind@email.com",
    startTrail1: () => {
        return "trail One"
    },
    startTrail2: () => {
        return "two"
    },

    // getDiscount: () => { // params not mandetoty optional
    //     return 10
    // } // OK

    getDiscount: (discountName: "tenpercent", mullo: 10) => { // dont need to mathch the paramiter name
        return 10
    },

    // getDiscount: (discountName: "tenpercent", mullo: "") => { // should match eatch params type
    //     return 10
    // }

    githubId: 12356
}

interface Admin extends User {
    role: "admin" | "user" | "lerner" | "stuff"
}

// interface Admin extends User, Owoner { // can extend multiple interface togather
//     role: "admin" | "user" | "lerner" | "stuff"
// }

const Sudipto: Admin = {
    id: 1245,
    role: "admin",
    name: "Arindam",
    email: "arind@email.com",
    startTrail1: () => {
        return "trail One"
    },
    startTrail2: () => {
        return "two"
    },

    // getDiscount: () => { // params not mandetoty optional
    //     return 10
    // } // OK

    getDiscount: (discountName: "tenpercent", mullo: 10) => { // dont need to mathch the paramiter name
        return 10
    },

    // getDiscount: (discountName: "tenpercent", mullo: "") => { // should match eatch params type
    //     return 10
    // }

    githubId: 12356
}

console.log(Arindam);
console.log(Sudipto);


export { }