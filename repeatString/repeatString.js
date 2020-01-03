const repeatString = function(word, times) {
    repeat = "";
    for (i = 0; i < times; i++) {
        repeat += word;
    }
    if (times < 0) {
        repeat = "ERROR";
    }
    return repeat;
}

module.exports = repeatString
