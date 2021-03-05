"use strict";
exports.__esModule = true;
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
function capitalizeWords(str) {
    return str.toUpperCase();
}
function capitalizeHeadline(str) {
    var strArray = str.split(' ');
    var charArray = [];
    for (var x = 0; x < strArray.length; x++) {
        charArray.push(strArray[x].charAt(0).toUpperCase() + strArray[x].slice(1));
    }
    return charArray.join(" ");
}
function removeExtraSpaces(str) {
    var newStr = String.trim(str);
    var strArray = newStr.split(' ');
    return strArray.join(" ");
}
function kabobCase(str) {
    var strArray = str.split(' ');
    var newStr = "";
    for (var x = 0; x < strArray.length; x++) {
        if (x === strArray.length - 1) {
            newStr += strArray[x];
        }
        else {
            newStr += strArray[x] + '-';
        }
    }
    return newStr;
}
function snakeCase(str) {
    var strList = str.split(' ');
    var newStr = "";
    for (var x = 0; x < strList.length; x++) {
        if (x === strList.length - 1) {
            newStr += strList[x];
        }
        else {
            newStr += strList[x] + '_';
        }
    }
    return newStr;
}
function camelCase(str) {
    var newString = str.split(' ');
    var newStr = "";
    for (var x = 0; x < newString.length; x++) {
        if (x == 0) {
            newStr += newString[x];
        }
        else {
            newStr += capitalizeHeadline(newString[x]);
        }
    }
    return newStr;
}
function shift(str) {
    var letterArray = str.split('');
    var firstLetter = letterArray[0];
    var newArray = letterArray.slice(1);
    newArray.push(firstLetter);
    newArray = newArray.join('');
    return newArray;
}
function makeHashTag(str) {
    var capitol = capitalizeWords(str).split(' ');
    var result = capitol.join('');
    return '#' + result;
}
function isEmpty(str) {
    var isEmpty = true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t') {
            return true;
        }
        else {
            isEmpty = false;
        }
    }
    return isEmpty;
}

module.exports = {
    capitalize: capitalize,
    capitalizeWords: capitalizeWords,
    capitalizeHeadline: capitalizeHeadline,
    isEmpty: isEmpty,
    removeExtraSpaces: removeExtraSpaces,
    kabobCase: kabobCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag
};
