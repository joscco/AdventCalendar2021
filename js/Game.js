const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;

// January is 0 and so on
const DECEMBER_NUMBER = 11;
const TEST_MODE = false;
const FAST_MODE = false;
const DAYS = [];

const HAND_OFFSET = 200;

let CURRENT_DAY_NUMBER;
let GAME;

let canvas;
let renderer;
let stage;
let soundManager;

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

    self.allowUpdate = true;

    self.bigTextStyle = new PIXI.TextStyle({
        fontFamily: 'Futura',
        fontSize: 50,
        fontWeight: "bold",
        fill: "#000",
        padding: 10
    });

    self.bigWhiteTextStyle = new PIXI.TextStyle({
        fontFamily: 'Futura',
        fontSize: 50,
        fontWeight: "bold",
        fill: "#FFF",
        padding: 10
    });

    self.mediumWhiteTextStyle = new PIXI.TextStyle({
        fontFamily: 'Futura',
        fontSize: 35,
        fill: "#FFF",
        padding: 10
    });

    self.noTickering = function () {
        const ticker = PIXI.Ticker.shared;
        const systemTicker = PIXI.Ticker.system;
        ticker.autoStart = false;
        systemTicker.autoStart = false;
        ticker.stop();
        systemTicker.stop();
    }

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
            self.setupSound();
            if (TEST_MODE || new Date().getMonth() === DECEMBER_NUMBER) {
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
            } else {
                new TWEEN.Tween(self.loadingDiv.style)
                    .delay(200)
                    .to({opacity: "0"}, 400)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onComplete(() => {
                        document.body.removeChild(self.loadingDiv);
                        self.setupNoDecemberScreen();
                    })
                    .start();
                self.update();
            }
        }, () => {
            alert("Unable to load Font!");
        });
    }

    self.setupStage = function () {
        canvas = document.getElementById('calender-canvas');
        renderer = PIXI.autoDetectRenderer({
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

    self.setupSound = function () {
        soundManager = new SoundManager();
        soundManager.drawSoundButton();
    }

    self.setupWelcomeScreen = function () {
        CURRENT_DAY_NUMBER = Math.min(new Date().getDate(), 24);
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

    self.setupNoDecemberScreen = function () {
        let fadeInOffsetY = 50;

        let bigText = new PIXI.Text("Wowowowow...\nDu bist zu früh!", self.bigWhiteTextStyle);
        bigText.anchor.set(0.5);
        bigText.position.x = GAME_WIDTH / 2;
        bigText.position.y = GAME_HEIGHT / 2 + fadeInOffsetY;
        bigText.alpha = 0;
        stage.addChild(bigText);
        let mediumText = new PIXI.Text("Warte bitte bis Dezember.", self.mediumWhiteTextStyle);
        mediumText.anchor.set(0.5);
        mediumText.position.x = GAME_WIDTH / 2;
        mediumText.position.y = GAME_HEIGHT / 2 + 100 + fadeInOffsetY;
        mediumText.alpha = 0;

        stage.addChild(mediumText);

        new TWEEN.Tween(bigText)
            .to({
                alpha: 1,
                position: {
                    y: bigText.position.y - fadeInOffsetY
                }
            }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

        new TWEEN.Tween(mediumText)
            .to({
                alpha: 1,
                position: {
                    y: mediumText.position.y - fadeInOffsetY
                }
            }, 500)
            .delay(500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                self.stopUpdate();
            })
            .start();
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

        arm.anchor.set(0.5, 1);
        arm.position.y = graphics.height + arm.scale.y * HAND_OFFSET;
        arm.position.x = GAME_WIDTH / 2;
        graphics.addChild(arm);

        let textObj = new PIXI.Text("Tag " + CURRENT_DAY_NUMBER, self.bigTextStyle);
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

        if (self.village) {
            stage.removeChild(self.village.container);
            self.village.removeGroundSnow();
            self.village.removeSnowFlakes();
        }
        self.village = new Village({});
        self.village.setup(stage);
        self.village.generateGroundSnow();
        self.village.generateSnowFlakes();

        // DEEEESTRUCTION!!!
        if (self.helpSign) {
            self.helpSign._remove();
        }

        if (self.hintSigns) {
            self.hintSigns.forEach(sign => sign._remove());
        }

        if (self.dialogueSigns) {
            self.dialogueSigns.forEach(sign => sign._remove());
        }

        if(self.dialogBox) {
            self.dialogBox._remove();
        }

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

                        self.dialogBox.textObject.visible = false;
                        self.dialogBox.setButtonsInvisible();
                        let timeDelay = self.dialogBox.typeText();
                        self.dialogBox.fadeInButtons(timeDelay);
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

        // We cannot work without a current day
        if (!self.currentDay) {
            return;
        }

        self.currentHouse = self.village.houses.find(function (house) {
            return house.owner === self.currentDay.quest.person;
        });

        // Init Answer Buttons:
        self.dialogBox = new DialogBox({
            text: self.currentDay.quest.text,
            person: self.currentDay.quest.person,
            emotion: self.currentDay.quest.emotion
        });
        self.dialogBox.setup();

        let buttons = self.createButtons(self.currentDay.quest.answers);
        self.dialogBox.setButtons(buttons);

        self.helpSign = new HelpSign({
            x: self.currentHouse.x,
            y: self.currentHouse.y - 50,
            isQuest: true,
            action: self.dialogBox.show
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
        self.dayResolvedBoxShown = false;
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

        if(self.questSolved && self.dialogBox.hidden && !self.dayResolvedBoxShown) {
            self.dayResolvedBox = new DayResolvedBox({text: "Du hast Tag " + CURRENT_DAY_NUMBER + " gemeistert!"});
            let finishedButton = new TextButton({
                text: "Yeah!",
                action: function () {
                    self.dayResolvedBox.toggleShow();
                }
            });
            self.dayResolvedBox.setup();
            self.dayResolvedBox.setButton(finishedButton);
            self.dayResolvedBox.toggleShow();
            self.dayResolvedBoxShown = true;
        }
    }

    self.setOnFinishedMode = function () {
        self.helpSign.setIconSlowly("big_heart");
        self.helpSign.setAction(function () {
            self.dialogBox.setPerson(self.currentDay.quest.person);
            self.dialogBox.setText(self.currentDay.onFinishedDialogues.text);
            self.dialogBox.setEmotion("happy");
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
            self.hintSigns[i] = hintSign;
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

    self.stopUpdate = function () {
        self.allowUpdate = false;
        PIXI.Ticker.system.stop();
    }

    self.restartUpdate = function () {
        self.allowUpdate = true;
        PIXI.Ticker.system.start();
    }

    self.update = function () {
        if (self.allowUpdate) {
            renderer.render(stage);

            // For animating things
            TWEEN.update();

            if (self.gameState === GAME_STATES.Main) {
                // Animating moon and helpSign
                self.moon.update();
                self.village.update();
                if (self.currentDay) {
                    self.updateDay();
                    self.helpSign.update();
                    self.helpSign.setInteractive(self.dialogBox.hidden)
                    self.hintSigns.forEach(s => {
                        s.setInteractive(self.dialogBox.hidden);
                        s.update();
                    });
                    self.dialogueSigns.forEach(s => {
                        s.setInteractive(self.dialogBox.hidden);
                        s.update();
                    });
                }
            }
            requestAnimationFrame(self.update);
        }
    }
}

