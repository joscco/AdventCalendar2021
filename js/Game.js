const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;
const HOUSE_SCALE = 0.4;
const DAYS = [];

const DOG_HAND_OFFSET = 200;

let CURRENT_DAY_NUMBER;
let GAME;

let canvas;
let renderer;
let stage;

const GAME_STATES = {
    WelcomeScreen: "WelcomeScreen",
    Main: "Main"
}

function Game() {

    const self = this;
    GAME = self;
    self.currentDay = null;
    self.hintSigns = [];
    self.dialogueSigns = [];

    self.numberOfAssets = 1;
    self.numberOfLoadedAssets = 0;
    self.loadingPercentage = 0;

    self.setupLoadingScreen = function (numberOfAssets) {
        self.numberOfAssets = numberOfAssets;
        self.loadingDiv = document.createElement("div");
        self.loadingDiv.className = "loading-screen";
        self.updateLoadingScreen(self.numberOfLoadedAssets);
        document.body.appendChild(self.loadingDiv);
    }

    self.updateLoadingScreen = function (numberOfLoadedAssets) {
        self.numberOfLoadedAssets = numberOfLoadedAssets;
        self.loadingPercentage = Math.round((self.numberOfLoadedAssets / self.numberOfAssets) * 100);
        self.loadingDiv.innerHTML = "Loading: " + self.loadingPercentage + "%";
    }

    self.handleLoadingComplete = function () {
        let font = new FontFaceObserver("Futura", {});
        font.load().then(() => {
            self.setupStage();
            self.gameState = GAME_STATES.WelcomeScreen;
            self.loadingDiv.style.opacity = "1";
            new TWEEN.Tween(self.loadingDiv.style)
                .delay(200)
                .to({opacity: "0"}, 400)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onComplete(() => {
                    document.body.removeChild(self.loadingDiv);
                    self.setupWelcomeScreen();
                })
                .start()
            self.update();
        }, () => {
            alert("Unable to load Font!");
        });
    }

    self.setupStage = function () {
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
        // We want to work with different z-indices!
        stage.sortableChildren = true;
    }


    self.setupWelcomeScreen = function () {
        CURRENT_DAY_NUMBER = new Date().getDate();
        self.daySelectBar = new DaySelectBar({
            dom: $("#day-select-bar"),
            daysSoFar: CURRENT_DAY_NUMBER
        });
        self.daySelectBar.reposition();
        window.addEventListener('resize', function () {
            self.daySelectBar.reposition();
        });

        self.startButton = new TextButton({
            x: GAME_WIDTH / 2,
            y: GAME_HEIGHT / 2,
            anchorX: 0.5,
            anchorY: 0.5,
            text: "Start Day " + CURRENT_DAY_NUMBER,
            action: function () {
                self.initMainGame(CURRENT_DAY_NUMBER);
            }
        });

        self.startButton.setup();
        self.startButton.setInvisible();
        self.startButton._addTo(stage);
        self.startButton.animateIn();
    }

    self.initMainGame = function (currentDayNumber) {
        CURRENT_DAY_NUMBER = currentDayNumber;
        self.daySelectBar.setCurrentDayButtonActive(CURRENT_DAY_NUMBER);
        let arm = new PIXI.Sprite(Loader.resources["hand"].texture);
        arm.scale.set(0.7);
        let graphics = new PIXI.Graphics();
        graphics.position.y = GAME_HEIGHT;
        graphics.zIndex = 1200;
        graphics.beginFill(0xffffff);
        graphics.drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        graphics.endFill();
        stage.addChild(graphics);

        let bigTextStyle = new PIXI.TextStyle({
            fontFamily: 'Futura',
            fontSize: 50,
            fontWeight: "bold",
            fill: "#000",
            padding: 10
        });

        arm.anchor.set(0.5, 1);
        arm.position.y = graphics.height + arm.scale.y * DOG_HAND_OFFSET;
        arm.position.x = GAME_WIDTH / 2;
        graphics.addChild(arm);

        let textObj = new PIXI.Text("Tag " + CURRENT_DAY_NUMBER, bigTextStyle);
        textObj.anchor.set(0.5);
        textObj.position.x = GAME_WIDTH / 2;
        textObj.position.y = 120;
        textObj.zIndex = 2000;

        graphics.addChild(textObj);
        self.startInTween(graphics);
    }

    self.startInTween = function (graphics) {
        new TWEEN.Tween(graphics.position)
            .to({y: 0}, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                self.startButton._removeFrom(stage);
                self.gameState = GAME_STATES.Main;
                self.setupMainGame();
                self.startOutTween(graphics);
            }).start();
    }

    self.startOutTween = function (graphics) {
        new TWEEN.Tween(graphics.position)
            .delay(200)
            .to({y: GAME_HEIGHT}, 1000)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
                stage.removeChild(graphics);
            }).start();
    }


    self.setupMainGame = function () {

        if (!self.moon) {
            self.moon = new Moon({x: GAME_WIDTH - 100, y: 100, scale: 0.3});
            self.moon.setup();
        }

        if (!self.village) {
            self.village = new Village({});
            self.village.setup();
        }
        //self.village.generateSnow();

        // // Nur für Anpassung!
        // moon.sprite.interactive = true;
        // moon.sprite.buttonMode = true;
        // moon.sprite.pointertap = function () {
        //     self.village.printPositions();
        // }

        // Find Day, Init lighting
        self.prepareDay();
    }

    self.createButtons = function (answers, hintNumber) {
        let buttons = [];
        for (let answer of answers) {
            let newButton;
            if (answer.type === "close") {
                newButton = new TextButton({
                    text: answer.text,
                    action: function () {
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "closeHint") {
                newButton = new TextButton({
                    text: answer.text,
                    action: function () {
                        self.hintHeard[hintNumber] = true;
                        self.hintSigns[hintNumber].setIconSlowly("check");
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "accept") {
                newButton = new TextButton({
                    text: answer.text,
                    action: function () {
                        self.questAccepted = true;
                        self.dialogBox.toggleShow();
                    }
                });
            } else if (answer.type === "rightAnswer") {
                newButton = new TextButton({
                    text: answer.text,
                    action: function () {
                        self.questSolved = true;
                        self.dialogBox.setText(answer.reaction.text);
                        self.dialogBox.setEmotion("happy");
                        self.dialogBox.setButtons(self.createButtons(answer.reaction.answers));
                    }
                });
            } else if (answer.type === "continue") {
                newButton = new TextButton({
                    text: answer.text,
                    action: function () {
                        if (answer.reaction.emotion) {
                            self.dialogBox.setEmotion(answer.reaction.emotion);
                        }
                        self.dialogBox.setText(answer.reaction.text);
                        self.dialogBox.setButtons(self.createButtons(answer.reaction.answers, hintNumber));

                        self.dialogBox.textObject.visible = false;
                        self.dialogBox.setButtonsInvisible();
                        let timeDelay = self.dialogBox.typeText();
                        self.dialogBox.fadeInButtons(timeDelay);
                    }
                });
            }
            buttons.push(newButton);
        }
        return buttons;
    }

    self.lightenHousesSoFar = function (dayNumber) {
        for (let house of self.village.houses) {
            if (house.questDay < dayNumber) {
                house.lighten();
            } else {
                house.unlighten();
            }
        }
    }

    self.prepareDay = function () {
        let id = "day" + CURRENT_DAY_NUMBER;
        self.currentDay = DAYS.find(function (day) {
            return day.id === id;
        });

        self.lightenHousesSoFar(CURRENT_DAY_NUMBER);

        // tearDown Stuff
        if (self.helpSign) {
            self.helpSign._remove();
        }

        if (self.hintSigns) {
            self.hintSigns.forEach(sign => sign._remove());
        }

        if (self.dialogueSigns) {
            self.dialogueSigns.forEach(sign => sign._remove());
        }

        // We cannot work without a current day
        if (!self.currentDay) {
            console.log("No day for today found :(");
            return;
        }

        console.log("Found day for today!");

        self.currentHouse = self.village.houses.find(function (house) {
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
            self.currentHouse.lighten();
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
            let hintHouse = self.village.houses.find(function (house) {
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
            let dialogueHouse = self.village.houses.find(function (house) {
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

        if (self.gameState === GAME_STATES.Main) {
            // Animating moon and helpSign
            self.moon.update();
            if (self.currentDay) {
                self.updateDay();
                self.helpSign.update();
                self.hintSigns.forEach(s => s.update());
                self.dialogueSigns.forEach(s => s.update());
            }
        }
        renderer.render(stage);
    }
}

