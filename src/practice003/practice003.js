"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphaNumeric = void 0;
function alphaNumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}
exports.alphaNumeric = alphaNumeric;
console.log(alphaNumeric("abc123")); // true
console.log(alphaNumeric("abc123!")); // false
console.log(alphaNumeric("abc123!@#")); // false
console.log(alphaNumeric("abc123!@# ")); // false
