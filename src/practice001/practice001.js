"use strict";
const order = (words) => {
    return words
        .split(" ")
        .sort((a, b) => {
        const numA = +(a.match(/\d+/) || []).join(" ");
        const numB = +(b.match(/\d+/) || []).join(" ");
        return numA - numB;
    })
        .join(" ");
};
console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
