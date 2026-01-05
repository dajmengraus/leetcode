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

    let buckets = Array(nums.length + 1).fill(null).map(() => []);

    for (let [num, freq] of count) {
        buckets[freq].push(num);
    }

    let result = [];

    for (let i = buckets.length - 1; i >= 0 || result.length < k; i--) {
        result.push(...buckets[i]);
    }

    return result.slice(0, k);
};