const removeFromArray = function() {
    const numbers = arguments[0];
    let newArray = [];

    for (i = 0; i < numbers.length; i++) {
      var contains = false;
        for (j = 1; j < arguments.length; j++) {
          if (numbers[i] === arguments[j]) {
            contains = true;
          }
        }
      if (!contains) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;
}

module.exports = removeFromArray
