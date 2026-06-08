class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const keys = new Map();
        for (const num of nums) {
            if (!keys.has(num)) {
                keys.set(num, []);
            }
            keys.get(num).push(num);
        }
        const sorted = [...keys.entries()].sort((a, b) => a[1].length - b[1].length);
        const sliced = sorted.slice(-k);
        const result = [];
        sliced.map(([key, value]) => result.push(key));
        return result;
    }
}
