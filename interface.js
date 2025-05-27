"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arindam = {
    id: 1245,
    name: "Arindam",
    email: "arind@email.com",
    startTrail1: function () {
        return "trail One";
    },
    startTrail2: function () {
        return "two";
    },
    // getDiscount: () => { // params not mandetoty optional
    //     return 10
    // } // OK
    getDiscount: function (discountName, mullo) {
        return 10;
    },
    // getDiscount: (discountName: "tenpercent", mullo: "") => { // should match eatch params type
    //     return 10
    // }
    githubId: 12356
};
