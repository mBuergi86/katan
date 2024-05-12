import { rowSumOfOddNumbers } from "./practice002";

test("rowSumOfOddNumbers", () => {
  expect(rowSumOfOddNumbers(1)).toBe(1);
  expect(rowSumOfOddNumbers(2)).toBe(8);
  expect(rowSumOfOddNumbers(3)).toBe(27);
  expect(rowSumOfOddNumbers(4)).toBe(64);
  expect(rowSumOfOddNumbers(5)).toBe(125);
  expect(rowSumOfOddNumbers(86)).toBe(636056);
});
