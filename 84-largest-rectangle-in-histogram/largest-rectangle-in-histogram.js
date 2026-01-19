/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const h = [...heights, 0];

    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < h.length; i++) {
        while (stack.length && h[i] < h[stack[stack.length - 1]]) {
            const height = h[stack.pop()];
            const width = stack.length
                ? i - stack[stack.length - 1] - 1
                : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};