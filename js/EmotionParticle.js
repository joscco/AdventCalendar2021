function EmotionParticle(config) {
    const self = this;
    self.emotion = config.emotion;
    self.offSetBottomPerson = 50;
    const annotationTextures = Loader.resources["annotations_sheet"].textures;
    const sadSpriteIDs = ["cloud_1", "cloud_2", "cloud_3", "cloud_4"];
    const happySpriteIDs = ["heart_1", "heart_2"];

    self.getEmotionSprite = function (emotion) {
        if (emotion !== "sad" && emotion !== "happy") {
            return null;
        }
        let randomTextureID;
        if (emotion === "sad") {
            randomTextureID = sadSpriteIDs[Math.floor(Math.random() * sadSpriteIDs.length)];
        } else {
            randomTextureID = happySpriteIDs[Math.floor(Math.random() * happySpriteIDs.length)];
        }
        let sprite = new PIXI.Sprite(annotationTextures[randomTextureID]);
        sprite.scale.set(0.5);
        sprite.anchor.set(0.5);
        return sprite;
    }

    self.sprite = self.getEmotionSprite(self.emotion);
    self.animationOffset = Math.floor(Math.random() * 1000);

    self.setupTweens = function () {
        self.spriteUpTween = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y - 30}, 1400)
            .easing(TWEEN.Easing.Quadratic.Out);

        self.spriteDownTween = new TWEEN.Tween(self.sprite.position)
            .to({y: self.y}, 1400)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
                self.isAnimating = false;
            });

        self.spriteUpTween.chain(self.spriteDownTween);
    }

    self.update = function () {
        if (self.emotion === "neutral") {
            return;
        }

        if (self.isAnimating) {
            return;
        }

        if (!self.spriteUpTween) {
            self.setupTweens();
            self.isAnimating = true;
            setTimeout(() => {
                self.spriteUpTween.start();
            }, self.animationOffset);
            return;
        }

        self.isAnimating = true;
        self.spriteUpTween.start();
    }

    self._addTo = function (parent) {
        if (self.emotion === "neutral") {
            return
        }

        self.parent = parent;
        self.x = 145 + Math.sign(Math.random() - 0.5) * (50 + Math.random()*60);
        self.y = self.offSetBottomPerson + self.parent.height / 2 - 75 - Math.random() * 50;
        self.sprite.position.x = self.x;
        self.sprite.position.y = self.y;
        self.sprite.pivot.set(0.5);
        if(self.emotion === "sad") {
            self.sprite.rotation = Math.random() * 3.14;
        }
        self.sprite.zIndex = 0;
        parent.addChild(self.sprite);
    }

    self._remove = function () {
        if (self.parent) {
            self.parent.removeChild(self.sprite);
        }
    }
}