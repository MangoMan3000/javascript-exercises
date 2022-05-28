const reverseString = function(word) {
    let wordArray = word.split('');
    reversedArray = wordArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
