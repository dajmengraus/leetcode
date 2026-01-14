/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    const stack = [];

    for (const char of s) {
        if (map.has(char)) {
            if (stack.pop() !== map.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};