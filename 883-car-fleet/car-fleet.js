/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);

    let stack = [];

    for (let [pos, speed] of cars) {
        const time = (target - pos) / speed;
        if (!stack.length || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }

    return stack.length;
};