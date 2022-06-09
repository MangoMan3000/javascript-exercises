const palindromes = function (string) {
    const regex = /\w/;
    let stringArray = string.split('');
    let newStringArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (regex.test(stringArray[i])) {
            newStringArray.push(stringArray[i]);
        };
    };
    let checkString = newStringArray.join('').toLowerCase();
    let reverseString = newStringArray.reverse().join('').toLowerCase();
    if (checkString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
