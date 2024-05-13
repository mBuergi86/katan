"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const practice003_1 = require("./practice003");
test("alphaNumeric", () => {
    expect((0, practice003_1.alphaNumeric)("abc123")).toBeTruthy();
    expect((0, practice003_1.alphaNumeric)("abc123!")).toBeFalsy();
    expect((0, practice003_1.alphaNumeric)("abc123!@#")).toBeFalsy();
    expect((0, practice003_1.alphaNumeric)("abc123!@# ")).toBeFalsy();
});
