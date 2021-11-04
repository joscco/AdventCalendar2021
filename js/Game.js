const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;
const HOUSE_SCALE = 0.4;
const DAYS = [];

let CURRENT_DAY_NUMBER;

let houseSprites = [];
let lighted = false;

let canvas;
let renderer;
let stage;

let moon;
let helpSign;
let ticker;


downHandler = function (event) {
    console.log("active");
    if (event.key === "Enter") {
        let result = [];
        for (let houseSprite of houseSprites) {
            result.push({
                "id_dark": houseSprite.dark_key,
                "id_light": houseSprite.light_key,
                "x": houseSprite.position.x,
                "y": houseSprite.position.y
            });
        }
        console.log(JSON.stringify(result));
    }
}

function Game() {

    const self = this;
    self.currentDay = null;

    self.setup = function () {

        let font = new FontFaceObserver("Gaegu", {});
        font.load().then(() => {

            let daybar = new DaySelectBar({
                dom: $("#day-select-bar"),
                days: [
                    {number: 1},
                    {number: 2},
                    {number: 3},
                    {number: 4},
                    {number: 5},
                    {number: 6},
                    {number: 7},
                    {number: 8},
                    {number: 9},
                    {number: 10},
                    {number: 11},
                    {number: 12},
                    {number: 13},
                    {number: 14},
                    {number: 15},
                    {number: 16},
                    {number: 17},
                    {number: 18},
                    {number: 19},
                    {number: 20},
                    {number: 21},
                    {number: 22},
                    {number: 23},
                    {number: 24}
                ]
            });
            canvas = document.getElementById('calender-canvas');
            renderer = new PIXI.Renderer({
                view: canvas,
                width: GAME_WIDTH,
                height: GAME_HEIGHT,
                backgroundColor: GAME_BACKGROUND_COLOR,
                resolution: window.devicePixelRatio,
                autoDensity: true
            });

            stage = new PIXI.Container();
            stage.sortableChildren = true;

            moon = new Moon({x: 10, y: GAME_WIDTH - 40, scale: 0.3});
            moon.init();

            let village = new Village({});
            village.setup();
            village.generateSnow();



            // Find Day, Init lighting
            CURRENT_DAY_NUMBER = new Date().getDate();
            self.prepareDay();

            // Start Updating function
            self.update();
        }, () => {
            alert("Unable to load Font!");
        });
    }

    self.prepareDay = function() {
        let id = "day" + 1;
        self.currentDay = DAYS.find(function(day){
            return day.id === id;
        });
        console.log(DAYS);
        console.log(id);
        console.log(self.currentDay);
        self.currentHouse = HOUSES.find(function(house){
            return house.owner === self.currentDay.quest.person;
        });

        // init Dialog Box
        let dialogBox = new DialogBox({text: self.currentDay.quest.text, answer: self.currentDay.quest.answers[0]});

        helpSign = new HelpSign({
            x: self.currentHouse.x, y: self.currentHouse.y - 50, isQuest: true, action: dialogBox.toggleShow
        });
        helpSign.setup();
    }


    self.update = function () {
        requestAnimationFrame(self.update);
        TWEEN.update();
        moon.update();
        helpSign.update();
        renderer.render(stage);
    }
}

