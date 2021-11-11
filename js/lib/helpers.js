// JQuery nano
const $ = function (query) {
    return document.querySelector(query);
};

const randomBetween = function (x, y) {
    return x + Math.random() * (y - x);
}

const capitalizeFirstLetter = function (str) {
    if (str == null || str.length === 0) {
        return "";
    }

    let result;
    result = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        result += str.charAt(i).toLowerCase();
    }

    return result;
}