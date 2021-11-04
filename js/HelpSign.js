function HelpSign(config) {
    const self = this;

    self.x = config.x;
    self.y = config.y;
    self.isQuest = config.isQuest;
    self.action = config.action;
    self.isAnimating = false;

    self.sprite = null;
    self.subSprite = null

    self.textures = Loader.resources["annotations_sheet"].textures;

    self.setup = function () {
        self.sprite = new PIXI.Sprite(self.textures["speech_bubble"]);
        self.sprite.scale.set(0.5);
        self.sprite.x = self.x;
        self.sprite.y = self.y;
        self.sprite.zIndex = 1000;

        self.subSprite = self.isQuest ? new PIXI.Sprite(self.textures["exclamation_mark"]) : new PIXI.Sprite(self.textures["dots"]);
        stage.addChild(self.sprite);
        self.sprite.addChild(self.subSprite);

        if(self.action) {
            self.sprite.interactive = true;
            self.sprite.buttonMode = true;
            self.sprite.click = self.action;
        }
    }

    self.update = function () {
        if (self.isAnimating) {
            return;
        }

        self.isAnimating = true;

        let tweenUp = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y - 30}, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onStart(() => {
                dotsDown.start();
            });

        let tweenDown = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y}, 700)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
                self.isAnimating = false;
            });

        let dotsUp = new TWEEN.Tween(self.subSprite.position)
            .delay(100)
            .to({y: -5}, 400)
            .easing(TWEEN.Easing.Quadratic.Out);

        let dotsDown = new TWEEN.Tween(self.subSprite.position)
            .delay(200)
            .to({y: 0}, 500)
            .easing(TWEEN.Easing.Quadratic.Out)


        tweenUp.chain(tweenDown);
        dotsDown.chain(dotsUp);
        tweenUp.start();
    }

}