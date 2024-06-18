/**
 * decide whether a string is head, tail repeated
 * given a string 'abccba', return true
 * given '', return false
 * given 'abcba' return true
 * given 'baba' return false
 * @param {string} param - a string to be tested
 * @return {boolean} whether the string is repeated
 */
function repeatedString(s){
    if (s.length <= 0) return false;
    let left = 0, right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]) return false;
        left++;
        right--;  
    }
    return true;
}

console.log(repeatedString('abccba'));
console.log(repeatedString(''));
console.log(repeatedString('abcba'));
console.log(repeatedString('baba'));
