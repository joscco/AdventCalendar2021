function HelpSign(config) {
    const self = this;

    self.x = config.x;
    self.y = config.y;
    self.isQuest = config.isQuest;
    self.action = config.action;
    self.hintNumber = config.hintNumber;
    self.isAnimating = false;

    self.sprite = null;
    self.subSprite = null

    self.textures = Loader.resources["annotations_sheet"].textures;

    self.setup = function () {
        self.sprite = new PIXI.Sprite(self.textures["speech_bubble"]);
        self.sprite.anchor.set(0.5, 0);
        self.sprite.scale.set(0.5);
        self.sprite.x = self.x;
        self.sprite.y = self.y;
        self.sprite.zIndex = 1000;

        self.subSprite = self.isQuest ? new PIXI.Sprite(self.textures["exclamation"]) : new PIXI.Sprite(self.textures["dots"]);
        self.subSprite.anchor.set(0.5, 0);
        self.sprite.addChild(self.subSprite);
        self.setAction(self.action);
    }

    self.setIcon = function (iconString) {
        if (iconString === "dots") {
            self.subSprite.texture = self.textures["dots"];
        } else if (iconString === "exclamation") {
            self.subSprite.texture = self.textures["exclamation"];
        } else if (iconString === "question") {
            self.subSprite.texture = self.textures["question"];
        } else if (iconString === "check") {
            self.subSprite.texture = self.textures["check"];
        } else if (iconString === "big_heart") {
            self.subSprite.texture = self.textures["big_heart"];
        }
    }

    self.setAction = function(action) {
        console.log("Action will now be: ", action);
        self.action = action;
        if (self.action) {
            self.sprite.interactive = true;
            self.sprite.buttonMode = true;
            self.sprite.click = self.action;
        }
    }

    self.setIconSlowly = function(iconString) {
        let tweenIn = new TWEEN.Tween(self.subSprite)
            .to({alpha: 0}, 500)
            .onComplete(() => {
                self.setIcon(iconString)
            });
        let tweenOut = new TWEEN.Tween(self.subSprite)
            .to({alpha: 1}, 500);

        tweenIn.chain(tweenOut);
        tweenIn.start();
    }

    self._add = function () {
        stage.addChild(self.sprite);
    }

    self._remove = function () {
        stage.removeChild(self.sprite);
    }

    self.update = function () {
        if (self.isAnimating) {
            return;
        }

        self.isAnimating = true;

        let tweenUp = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y - 30}, 500)
            .easing(TWEEN.Easing.Quadratic.Out);

        let tweenDown = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y}, 700)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
                self.isAnimating = false;
            });

        // let dotsUp = new TWEEN.Tween(self.subSprite.position)
        //     .delay(100)
        //     .to({y: -5}, 400)
        //     .easing(TWEEN.Easing.Quadratic.Out);
        //
        // let dotsDown = new TWEEN.Tween(self.subSprite.position)
        //     .delay(100)
        //     .to({y: 5}, 600)
        //     .easing(TWEEN.Easing.Quadratic.Out)


        tweenUp.chain(tweenDown);
        //dotsDown.chain(dotsUp);
        tweenUp.start();
    }

}