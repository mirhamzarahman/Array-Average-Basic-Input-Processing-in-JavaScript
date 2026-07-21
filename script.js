const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += input[i];
}

console.log(sum / n);
