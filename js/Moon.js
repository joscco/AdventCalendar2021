function Moon(config) {
    const self = this;

    // Props
    self.x = config.x;
    self.y = config.y;
    self.scale = config.scale;

    // Update
    self.isBlinking = false;
    self.blinkTime = 30;
    self.framesBlinked = 0;
    self.textures = Loader.resources["moon_sheet"].textures;
    self.sprite = null;
    self.eyes = null

    self.setup = function (parent = stage) {
        // Init Moon
        self.parent = parent;
        self.eyes = setupEyes();
        self.sprite = setupSprite();
        self.sprite.addChild(self.eyes);
        parent.addChild(self.sprite);
    }

    const setupSprite = function() {
        let sprite = new PIXI.Sprite(self.textures["moon_dark"]);
        sprite.anchor.set(0.5);
        sprite.scale.set(self.scale);
        sprite.position.y = self.y;
        sprite.position.x = self.x;
        return sprite;
    }

    const setupEyes = function() {
        let eyes = new PIXI.Sprite(self.textures["eyes"]);
        eyes.anchor.set(0.5);
        return eyes;
    }

    self.update = function () {
        checkBlink();
        updateEyes();
    }

    const checkBlink = function () {
        if (self.isBlinking) {
            if (self.framesBlinked >= self.blinkTime) {
                self.isBlinking = false;
                self.framesBlinked = 0;
            } else {
                self.framesBlinked++;
            }
        } else {
            if (Math.random() < 0.002) {
                self.isBlinking = true
            }
        }
    }

    const updateEyes = function () {
        self.eyes.texture = self.isBlinking
            ? self.textures["blink"]
            : self.textures["eyes"];
    }
}