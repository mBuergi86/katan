export function alphaNumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(alphaNumeric("abc123")); // true
console.log(alphaNumeric("abc123!")); // false
console.log(alphaNumeric("abc123!@#")); // false
console.log(alphaNumeric("abc123!@# ")); // false
