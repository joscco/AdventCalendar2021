const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;
const HOUSE_SCALE = 0.4;
const DAYS = [];

let CURRENT_DAY_NUMBER;
let GAME;

let houseSprites = [];

let canvas;
let renderer;
let stage;

let moon;


downHandler = function (event) {
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
    GAME = self;
    self.currentDay = null;
    self.hintSigns = [];
    self.dialogueSigns = [];

    self.setup = function () {

        let font = new FontFaceObserver("Dudu", {});
        font.load().then(() => {

            new DaySelectBar({
                dom: $("#day-select-bar"),
                days: [
                    {number: 1}
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

            self.village = new Village({});
            self.village.setup();
            self.village.generateSnow();

            // Nur für Anpassung!
            moon.sprite.interactive = true;
            moon.sprite.buttonMode = true;
            moon.sprite.click = function () {
                self.village.printPositions();
            }


            // Find Day, Init lighting
            //CURRENT_DAY_NUMBER = new Date().getDate();

            // For now;
            CURRENT_DAY_NUMBER = 1;
            self.prepareDay();

            // Start Updating function
            self.update();
        }, () => {
            alert("Unable to load Font!");
        });
    }

    self.createButtons = function (answers, hintNumber) {
        let buttons = [];
        for (let answer of answers) {
            let newButton;
            if (answer.type === "close") {
                newButton = new Button({
                    text: answer.text,
                    action: function () {
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "closeHint") {
                newButton = new Button({
                    text: answer.text,
                    action: function () {
                        self.hintHeard[hintNumber] = true;
                        self.hintSigns[hintNumber].setIconSlowly("check");
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "accept") {
                newButton = new Button({
                    text: answer.text,
                    action: function () {
                        self.questAccepted = true;
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "rightAnswer") {
                newButton = new Button({
                    text: answer.text,
                    action: function () {
                        self.questSolved = true;
                        self.dialogBox.typeText(answer.reaction.text);
                        self.dialogBox.setEmotion("happy");
                        self.dialogBox.setButtons(self.createButtons(answer.reaction.answers));
                    }
                });
            } else if (answer.type === "continue") {
                newButton = new Button({
                    text: answer.text,
                    action: function () {
                        if (answer.reaction.emotion) {
                            self.dialogBox.setEmotion(answer.reaction.emotion);
                        }
                        self.dialogBox.typeText(answer.reaction.text);
                        self.dialogBox.setButtons(self.createButtons(answer.reaction.answers, hintNumber));
                    }
                });
            }
            buttons.push(newButton);
        }
        return buttons;
    }

    self.prepareDay = function () {
        let id = "day" + CURRENT_DAY_NUMBER;
        self.currentDay = DAYS.find(function (day) {
            return day.id === id;
        });

        // We cannot work without a current day
        if (!self.currentDay) {
            return;
        }

        self.currentHouse = HOUSES.find(function (house) {
            return house.owner === self.currentDay.quest.person;
        });

        // Init Answer Buttons:
        self.dialogBox = new DialogBox({
            text: self.currentDay.quest.text,
            person: self.currentDay.quest.person,
            emotion: self.currentDay.quest.emotion
        });

        let buttons = self.createButtons(self.currentDay.quest.answers);
        self.dialogBox.setup();
        self.dialogBox.setButtons(buttons);

        self.helpSign = new HelpSign({
            x: self.currentHouse.x,
            y: self.currentHouse.y - 50,
            isQuest: true,
            action: self.dialogBox.toggleShow
        });
        self.helpSign.setup();
        self.helpSign._add();

        // more variables
        self.questAccepted = false;
        self.hintsShown = false;
        self.hintHeard = []
        for (let i = 0; i < self.currentDay.hints.length; i++) {
            self.hintHeard.push(false);
        }
        self.allHintsHeard = false;
        self.questSolved = false;
        self.finalQuestShown = false;
        self.hintsRemoved = false;
    }

    self.updateDay = function () {
        if (!self.questAccepted) {
            return;
        }

        if (self.questAccepted && !self.isHintsShown) {
            self.showHints();
            self.helpSign._remove();
            self.isHintsShown = true;
        }

        self.updateHintStatus();

        if (self.allHintsHeard && !self.questSolved && !self.finalQuestShown) {
            self.showFinalQuestDialog()
            self.finalQuestShown = true;
        }

        if (self.questSolved && !self.hintsRemoved) {
            self.removeHints();
            self.hintsRemoved = true;
            self.setOnFinishedMode();
        }
    }

    self.setOnFinishedMode = function () {
        self.helpSign.setIconSlowly("big_heart");
        self.helpSign.setAction(function () {
            self.dialogBox.setPerson(self.currentDay.quest.person);
            self.dialogBox.setText(self.currentDay.onFinishedDialogues.text);
            self.dialogBox.setButtons(self.createButtons(self.currentDay.onFinishedDialogues.answers));
            self.dialogBox.toggleShow();
        });
        self.hintSigns = [];
        self.showFinalModeDialogues();
    }

    self.updateHintStatus = function () {
        let allHeard = true;
        for (let hintBoolean of self.hintHeard) {
            allHeard &= hintBoolean;
        }
        self.allHintsHeard = allHeard;
    }

    self.showFinalQuestDialog = function () {
        self.helpSign.setIcon("question");
        self.helpSign._add();
        self.helpSign.setAction(function () {
            self.dialogBox.setPerson(self.currentDay.quest.person);
            self.dialogBox.setEmotion("sad");
            self.dialogBox.setText(self.currentDay.solutionDialog.text);
            self.dialogBox.setButtons(self.createButtons(self.currentDay.solutionDialog.answers));
            self.dialogBox.toggleShow();
        })
    }

    self.removeHints = function () {
        for (let hintSign of self.hintSigns) {
            hintSign._remove();
        }
    }

    self.showHints = function () {
        for (let i = 0; i < self.currentDay.hints.length; i++) {
            let hint = self.currentDay.hints[i];
            let hintNumber = i;
            let hintHouse = HOUSES.find(function (house) {
                return house.owner === hint.person;
            });

            let hintSign = new HelpSign({
                x: hintHouse.x,
                y: hintHouse.y - 50,
                isQuest: false,
                hintNumber: hintNumber,
                action: function () {
                    self.dialogBox.setText(hint.text);
                    self.dialogBox.setPerson(hint.person);
                    self.dialogBox.setEmotion(hint.emotion);
                    let buttons = self.createButtons(hint.answers, hintNumber);
                    self.dialogBox.setButtons(buttons);
                    self.dialogBox.toggleShow();
                }
            });
            self.hintSigns.push(hintSign);
            hintSign.setup();
            hintSign._add();
        }
    }

    self.showFinalModeDialogues = function () {
        for (let i = 0; i < self.currentDay.onFinishedDialogues.others.length; i++) {
            let dialogue = self.currentDay.onFinishedDialogues.others[i];
            let dialogueHouse = HOUSES.find(function (house) {
                return house.owner === dialogue.person;
            });

            let dialogueSign = new HelpSign({
                x: dialogueHouse.x,
                y: dialogueHouse.y - 50,
                isQuest: false,
                action: function () {
                    self.dialogBox.setText(dialogue.text);
                    self.dialogBox.setPerson(dialogue.person);
                    self.dialogBox.setEmotion(dialogue.emotion);
                    let buttons = self.createButtons(dialogue.answers);
                    self.dialogBox.setButtons(buttons);
                    self.dialogBox.toggleShow();
                }
            });
            self.dialogueSigns.push(dialogueSign);
            dialogueSign.setup();
            dialogueSign._add();
        }
    }


    self.update = function () {
        requestAnimationFrame(self.update);

        // For animating things
        TWEEN.update();

        // Update Quest
        // Animating moon and helpSign
        moon.update();
        if (self.currentDay) {
            self.updateDay();
            self.helpSign.update();
            self.hintSigns.forEach(s => s.update());
            self.dialogueSigns.forEach(s => s.update());
        }
        renderer.render(stage);
    }
}

