/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let map = new Map([
        ["+", (first, second) => first + second],
        ["-", (first, second) => first - second],
        ["*", (first, second) => first * second],
        ["/", (first, second) => Math.trunc(first / second)]
    ])
    for (let t of tokens) {
        if (t === "+" || t === "-" || t === "*" || t === "/") {
            let second = stack.pop();
            let first = stack.pop();
            let result = map.get(t)(first, second);
            stack.push(result);
        } else {
            stack.push(Number(t));
        }
    }
    return stack[0];
};