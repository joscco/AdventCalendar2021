function DialogBox(config) {
    const self = this;
    self.hidden = true;
    self.x = 50;
    self.y = -400;
    self.width = 860;
    self.height = 360;
    self.person = config.person;
    self.emotion = config.emotion;
    self.text = config.text;
    self.textObject = null;
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
        self.drawButtons();
    }

    self.setButtons = function(buttons) {
        self.buttons.forEach(btn => self.box.removeChild(btn.sprite));
        self.buttons = buttons;
        self.drawButtons();
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

    self.setEmotion = function(emotion) {
        self.emotion = emotion;
        updatePersonFaceSprite();
    }

    const updatePersonSprite = function() {
        self.personSprite.texture = baseTextures[self.person];
    }

    const updatePersonFaceSprite = function() {
        self.personFaceSprite.texture = getEmotionTextures(self.emotion)[self.person];
    }

    const getEmotionTextures = function(emotion) {
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
            new PIXI.TextStyle({fontFamily: 'Gaegu', fontSize: 40, fill: "#000", padding: 10}));
        self.textObject.position.x = 240;
        self.textObject.position.y = 30;
        self.box.addChild(self.textObject);
    }

    self.drawButtons = function () {
        if (self.buttons) {
            for (let i = 0; i < self.buttons.length; i++) {
                self.buttons[i].sprite.position.x = self.box.width - 50 - (self.buttons.length - i) * self.buttons[i].sprite.width;
                self.buttons[i].sprite.position.y = 230;
                self.box.addChild(self.buttons[i].sprite);
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

    // self.changeText = function (test, answers) {
    //
    // }

    self.fadeIn = function () {
        self.box.position.y = -400;
        stage.addChild(self.box);
        self.hidden = false;
        new TWEEN.Tween(self.box.position)
            .to({y: 20}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }

    self.fadeOut = function () {
        new TWEEN.Tween(self.box.position)
            .to({y: -400}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => {
                    stage.removeChild(self.box);
                    self.hidden = true;
                }
            )
            .start();
    }

}

