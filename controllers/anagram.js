function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let freqMap1 = {};
    let freqMap2 = {};

    for (let char of str1) {
        freqMap1[char] = (freqMap1[char] || 0);
    }
    for (let char of str2) {
        freqMap2[char] = (freqMap2[char] || 0);
    }

    for (let char in freqMap1) {
        if (freqMap1[char] !== freqMap2[char]) {
            return false;
        }
    }

    return true;  // The strings are anagrams
}

// Test cases
// console.log(areAnagrams("listen", "silent"));  // true
// console.log(areAnagrams("hello", "world"));    // false
// console.log(areAnagrams("Dormitory", "Dirtyroom")); // true (ignores spaces and case)

module.exports = { areAnagrams }