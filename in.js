const json = require("./t.json");

let queue = [];
let keys = json["keys"];
let leftKeys = keys;
let runnedAt = new Date().getTime();

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
        // console.log(key);
        // console.log(leftKeys.length);
        setTimeout(() => resolve(key), 1);
    });


(async() => {
    while (true) {
        await wait();
        try {
            const v = await smth(leftKeys);

            if (v == "989848488445454545454as5fd4a5sfafkangkag!^!'^!'^!'Rsf54as5f45asf45as4f54asfagmkadjgkjadgknakgarojqw4oqwu4uqw") {
                console.log('password detected $password:[' + v + "]", `${((new Date().getTime() - runnedAt) /1000).toFixed(2)}s`)
                break;
            }
            if (leftKeys.length <= 0) {
                console.log('test is over', `${((new Date().getTime() - runnedAt) /1000).toFixed(2)}s`)
                break;
            }
        } finally {
            shift();
        }
    }
})();