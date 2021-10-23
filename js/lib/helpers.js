// JQuery nano
const $ = function(query){
    return document.querySelector(query);
};

const Tween_get = function(target){
    return createjs.Tween.get(target, {useTicks:true});
}

const _s = function(seconds) {
    return Math.ceil(createjs.Ticker.framerate*seconds);
}