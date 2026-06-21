class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (let str of strs) {
            result += `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while (i < str.length) {
            let hash = str.indexOf("#", i);
            let length = parseInt(str.substring(i, hash));
            let stringStart = hash + 1;
            let stringEnd = stringStart + length;
            let originalString = str.substring(stringStart, stringEnd);
            result.push(originalString);
            i = stringEnd
        }
        return result;
    }













































$0
}
