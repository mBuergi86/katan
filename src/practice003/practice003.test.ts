import { alphaNumeric } from "./practice003";

test("alphaNumeric", () => {
  expect(alphaNumeric("abc123")).toBeTruthy();
  expect(alphaNumeric("abc123!")).toBeFalsy();
  expect(alphaNumeric("abc123!@#")).toBeFalsy();
  expect(alphaNumeric("abc123!@# ")).toBeFalsy();
});
