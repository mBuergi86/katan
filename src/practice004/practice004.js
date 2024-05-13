"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inArray = void 0;
function inArray(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
        if (a1.filter(function (x) { return a2.includes(x); })) {
            result.push(a1[i]);
        }
    }
    return result;
}
exports.inArray = inArray;
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var a1 = ["arp", "live", "strong"];
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]
