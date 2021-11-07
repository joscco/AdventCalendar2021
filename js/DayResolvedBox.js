function DayResolvedBox(config) {
    const self = this;
    self.hidden = true;
    self.width = 860;
    self.height = 360;
    self.x = GAME_WIDTH / 2;
    self.y = GAME_HEIGHT / 22;
    self.text = config.text;
    self.textObject = null;
    //self.wonSound = Loader.sounds["won"].volume(0.01);
    self.typeSpeed = 40;
    self.breakLineTimeOut = 500;
    self.button = null
    self.box = null;

    self.setup = function () {
        self.box = new PIXI.Container();
        self.box.position.x = self.x - self.width/2;
        self.box.position.y = self.y - self.height/2;
        // Won window on top of everything else
        self.box.zIndex = 1100;

        self.drawRoundedRectangle();
        self.drawText();
    }

    self.setButton = function (button) {
        if(self.button) {
            self.button._removeFrom(self.box);
        }
        self.button = button;
        self.setupButton();
    }

    self.setText = function (text) {
        self.text = text;
        self.textObject.text = self.text;
    }

    self.drawRoundedRectangle = function () {
        self.rect = new PIXI.Graphics();
        self.rect.beginFill(0xFFFFFF);
        self.rect.drawRoundedRect(0, 0, self.width, self.height, 10);
        self.rect.endFill();
        self.box.addChild(self.rect)
    }

    self.drawText = function () {
        self.textObject = new PIXI.Text(
            self.text,
            new PIXI.TextStyle({
                fontFamily: 'Futura',
                fontSize: 30,
                fill: "#000",
                padding: 10,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: self.width - 200
            }));
        self.textObject.position.x = self.width/2;
        self.textObject.position.y = self.height/2;
        self.textObject.anchor.set(0.5);
        self.box.addChild(self.textObject);
    }

    self.setupButton = function () {
        if (self.button) {
                self.button.x = self.width/2;
                self.button.y = self.height/2 + 100;
                self.button.anchorX = 0.5;
                self.button.anchorY = 0.5;
                self.button.setup();
                self.button.setInvisible();
                self.button._addTo(self.box);
        }
    }

    self.toggleShow = function () {
        if (self.hidden) {
            self.fadeIn();
        } else {
            self.fadeOut();
        }
    };

    self.show = function () {
        if (self.hidden) {
            self.fadeIn();
        }
    };

    self.unshow = function () {
        if (!self.hidden) {
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
                    //self.typeSound.play();
                }, self.typeSpeed * (i - numberOfSpaces) + numberOfLineBreaks * self.breakLineTimeOut);
            }
        }

        return self.typeSpeed * (wholeText.length - numberOfSpaces) + numberOfLineBreaks * self.breakLineTimeOut;
    }

    self.fadeInButtons = function (timeDelay) {
            self.button.animateIn(timeDelay);
    }

    self.setButtonsInvisible = function () {
        self.button.setInvisible();
        self.button.setInteractive(false);
    }

    self.setButtonsVisible = function () {
        self.button.setVisible();
        self.button.setInteractive(true);
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

