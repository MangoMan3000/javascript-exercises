const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    } 
    let fibArray = [];
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            fibArray.push(0);
        } else if (i == 1) {
            fibArray.push(1);
        } else {
            fibArray.push((fibArray[i-1]+fibArray[i-2]));
        }
    };
    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
