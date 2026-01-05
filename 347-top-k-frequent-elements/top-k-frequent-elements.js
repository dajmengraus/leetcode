/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = new Map();
    for (let n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }

    let freq = Array.from(count).sort((a, b) => a[1] - b[1]);

    let result = [];

    for (let i = freq.length - 1; i >= freq.length - k; i--) {
        result.push(freq[i][0]);
    }

    return result;
};