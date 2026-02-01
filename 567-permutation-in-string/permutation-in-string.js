/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    const freq = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    // Count chars in s1
    for (let c of s1) {
        freq[c.charCodeAt(0) - a]++;
    }

    let left = 0;
    let right = 0;
    let needed = s1.length;

    while (right < s2.length) {
        const rIdx = s2.charCodeAt(right) - a;

        // If char is still needed, reduce needed count
        if (freq[rIdx] > 0) {
            needed--;
        }

        // Always decrement freq
        freq[rIdx]--;
        right++;

        // When window size exceeds s1.length, shrink from left
        if (right - left > s1.length) {
            const lIdx = s2.charCodeAt(left) - a;

            if (freq[lIdx] >= 0) {
                needed++;
            }

            freq[lIdx]++;
            left++;
        }

        // All chars matched
        if (needed === 0) return true;
    }

    return false;
};
