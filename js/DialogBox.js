function DialogBox(config) {
    const self = this;
    self.hidden = true;
    self.width = 860;
    self.height = 360;
    self.x = GAME_WIDTH / 2 - self.width / 2;
    self.y = GAME_HEIGHT / 2 - self.height / 2;
    self.person = config.person;
    self.emotion = config.emotion;
    self.text = config.text;
    self.textObject = null;
    self.typeSound = Loader.sounds["typeSound"].volume(0.01);
    self.typeSpeed = 40;
    self.breakLineTimeOut = 500;
    self.buttons = [];
    self.box = null;

    const baseTextures = Loader.resources["base_people_sheet"].textures;
    const sadTextures = Loader.resources["sad_people_sheet"].textures;
    const happyTextures = Loader.resources["happy_people_sheet"].textures;
    const neutralTextures = Loader.resources["neutral_people_sheet"].textures;

    self.setup = function () {
        self.box = new PIXI.Container();
        self.box.position.x = self.x;
        self.box.position.y = self.y;
        // Dialog window on top of everything else
        self.box.zIndex = 1100;

        self.drawRoundedRectangle();
        self.drawPerson();
        self.drawText();
        self.setupButtons();
    }

    self.setButtons = function (buttons) {
        self.buttons.forEach(btn => btn._removeFrom(self.box));
        self.buttons = buttons;
        self.setupButtons();
    }

    self.setText = function (text) {
        self.text = text;
        self.textObject.text = self.text;
    }

    self.setPerson = function (person) {
        self.person = person;
        updatePersonSprite();
        updatePersonFaceSprite();
    }

    self.setEmotion = function (emotion) {
        self.emotion = emotion;
        updatePersonFaceSprite();
    }

    const updatePersonSprite = function () {
        self.personSprite.texture = baseTextures[self.person];
    }

    const updatePersonFaceSprite = function () {
        self.personFaceSprite.texture = getEmotionTextures(self.emotion)[self.person];
    }

    const getEmotionTextures = function (emotion) {
        if (emotion === "happy") {
            return happyTextures;
        } else if (emotion === "neutral") {
            return neutralTextures;
        } else if (emotion === "sad") {
            return sadTextures;
        }
        return null;
    }

    self.drawRoundedRectangle = function () {
        self.rect = new PIXI.Graphics();
        self.rect.beginFill(0xFFFFFF);
        self.rect.drawRoundedRect(0, 0, self.width, self.height, 10);
        self.rect.endFill();
        self.box.addChild(self.rect)
    }

    self.drawPerson = function () {
        self.personSprite = new PIXI.Sprite(baseTextures[self.person]);
        self.personSprite.scale.set(0.7);
        self.personSprite.anchor.set(0, 1);
        self.personSprite.position.x = 0;
        self.personSprite.position.y = self.height - 10;
        self.personFaceSprite = new PIXI.Sprite(getEmotionTextures(self.emotion)[self.person]);
        self.personFaceSprite.anchor.set(0, 1);
        self.personSprite.addChild(self.personFaceSprite);
        self.box.addChild(self.personSprite);
    }

    self.drawText = function () {
        self.textObject = new PIXI.Text(
            self.text,
            new PIXI.TextStyle({
                fontFamily: 'Futura',
                fontSize: 22,
                fill: "#000",
                padding: 10,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: self.width - self.personSprite.width - 20
            }));
        self.textObject.position.x = 0.9 * self.personSprite.width;
        self.textObject.position.y = 50;
        self.box.addChild(self.textObject);
    }

    self.setupButtons = function () {
        if (self.buttons) {
            let widthSoFar = 0;
            for (let i = 0; i < self.buttons.length; i++) {
                self.buttons[i].x = self.personSprite.width + widthSoFar;
                self.buttons[i].y = 250;
                self.buttons[i].setup();
                self.buttons[i].setInvisible();
                self.buttons[i]._addTo(self.box);
                widthSoFar += self.buttons[i].width + 15;
            }
        }
    }

    self.toggleShow = function () {
        if (self.hidden) {
            self.fadeIn();
        } else {
            self.fadeOut();
        }
    };

    self.typeText = function () {
        if (!self.text) {
            return;
        }

        let wholeText = self.text;
        self.setText("");
        let currentText = "";

        // show Text if it hasn't been shown yet
        self.textObject.visible = true;

        let numberOfSpaces = 0;
        let numberOfLineBreaks = 0;
        for (let i = 0; i < wholeText.length; i++) {
            if (wholeText.charAt(i) === " ") {
                numberOfSpaces++;
            } else if (wholeText.charAt(i) === "\n") {
                numberOfLineBreaks++;

            } else {
                currentText = wholeText.substring(0, i + 1);
                let tmpText = currentText;
                setTimeout(() => {
                    self.setText(tmpText);
                    self.typeSound.play();
                }, self.typeSpeed * (i - numberOfSpaces) + numberOfLineBreaks * self.breakLineTimeOut);
            }
        }

        return self.typeSpeed * (wholeText.length - numberOfSpaces) + numberOfLineBreaks * self.breakLineTimeOut;
    }

    self.fadeInButtons = function (timeDelay) {
        for (let i = 0; i < self.buttons.length; i++) {
            self.buttons[i].animateIn(timeDelay + i * 200);
        }
    }

    self.setButtonsInvisible = function () {
        self.buttons.forEach(btn => btn.setInvisible());
    }

    self.setButtonsVisible = function () {
        self.buttons.forEach(btn => btn.setVisible());
    }

    self.fadeIn = function () {
        self.box.position.y = -GAME_HEIGHT;
        stage.addChild(self.box);
        self.hidden = false;
        self.textObject.visible = false;
        self.setButtonsInvisible();

        self.fadeInTween = new TWEEN.Tween(self.box.position)
            .to({y: self.y}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => {
                let typingTime = self.typeText();
                self.fadeInButtons(typingTime);
            })
            .start();
    }

    self.fadeOut = function () {
        new TWEEN.Tween(self.box.position)
            .to({y: -GAME_HEIGHT}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => {
                    stage.removeChild(self.box);
                    self.hidden = true;
                }
            )
            .start();
    }

}

