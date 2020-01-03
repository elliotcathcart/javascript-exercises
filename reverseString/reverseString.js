const reverseString = function(str) {
    reversed = "";
    for (i = str.length-1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

module.exports = reverseString
