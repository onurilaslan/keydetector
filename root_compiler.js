const t = require("./t.json");
const fs = require("fs");
const d = fs.readFileSync("./keys.txt", { encoding: "utf-8" });
const words = d.match(/[^\r\n]+/g);
const obj = {
    keys: words,
};
const json = JSON.stringify(obj);
fs.writeFileSync("t.json", json, "utf-8");
// console.log(require("./main.js").username)
// setInterval(
//     () => console.log(t["keys"][parseInt(Math.random() * t["keys"].length)]),
//     1000
// );