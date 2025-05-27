"use strict";
// enum position {
//     FIRST,
//     SECOND,
//     THIRD,
//     FOURTH
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const pos1 = position.FIRST;
//================================
// enum position {
//     FIRST = 10,
//     SECOND,
//     THIRD,
//     FOURTH
// }
// const pos1 = position.FIRST;
//=============================
var position;
(function (position) {
    position["FIRST"] = "first";
    position["SECOND"] = "second";
    position["THIRD"] = "third";
    position["FOURTH"] = "fourth";
})(position || (position = {}));
var pos1 = position.FIRST;
