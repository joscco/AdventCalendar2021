// JQuery nano
const $ = function (query) {
    return document.querySelector(query);
};

const randomBetween = function (x, y) {
    return x + Math.random() * (y - x);
}