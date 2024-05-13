"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const practice002_1 = require("./practice002");
test("rowSumOfOddNumbers", () => {
    expect((0, practice002_1.rowSumOfOddNumbers)(1)).toBe(1);
    expect((0, practice002_1.rowSumOfOddNumbers)(2)).toBe(8);
    expect((0, practice002_1.rowSumOfOddNumbers)(3)).toBe(27);
    expect((0, practice002_1.rowSumOfOddNumbers)(4)).toBe(64);
    expect((0, practice002_1.rowSumOfOddNumbers)(5)).toBe(125);
    expect((0, practice002_1.rowSumOfOddNumbers)(86)).toBe(636056);
});
