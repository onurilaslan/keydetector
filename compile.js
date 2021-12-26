const json = require("./t.json");

let queue = [];
let keys = json["keys"];
let leftKeys = keys;

function wait() {
    const next = queue.length ?
        queue[queue.length - 1].promise :
        Promise.resolve();
    let res;
    const promise = new Promise((resolve) => {
        res = resolve;
    });
    queue.push({ res, promise });
    return next;
}

function shift() {
    const deferred = queue.shift();
    if (typeof deferred !== "undefined") deferred.res();
}

const smth = async(keys) =>
    new Promise((resolve) => {
        if (keys.length <= 0) stop = true;
        let key = keys[0];
        leftKeys = keys.splice(1);
        console.log(key);
        console.log(leftKeys.length);
        setTimeout(resolve, 100);
    });

async function execute() {
    await wait();
    try {
        await smth(leftKeys);
    } finally {
        shift();
    }
}

for (const e of leftKeys) {
    execute();
}