function Moon(config) {
    const self = this;

    // Props
    self.x = config.x;
    self.y = config.y;
    self.scale = 0.3;
    self.scale = config.scale;

    // Update
    self.isBlinking = false;
    self.textures = Loader.resources["moon_sheet"].textures;
    self.sprite = null;
    self.eyes = null

    self.init = function () {
        // Init Moon
        self.sprite = new PIXI.Sprite(self.textures["moon_light"]);
        self.sprite.anchor.set( 0.5);
        self.sprite.scale.set(0.3);
        self.sprite.y = 100;
        self.sprite.x = GAME_WIDTH - self.sprite.width/2 - 40;
        stage.addChild(self.sprite);

        self.eyes = new PIXI.Sprite(self.textures["eyes"]);
        self.eyes.anchor.set(0.5);
        self.sprite.addChild(self.eyes);
    }

    self.update = function () {
        self.checkBlink();
        self.updateEyes();
    }

    self.checkBlink = function () {
        if (self.isBlinking) {
            if (Math.random() < 0.1) {
                self.isBlinking = false;
            }
        } else {
            if (Math.random() < 0.003) {
                self.isBlinking = true;
            }
        }
    }

    // TODO: Add some initial animation here (first big eyes, then blink)
    self.updateEyes = function () {
        self.eyes.texture = self.isBlinking
            ? self.textures["blink"]
            : self.textures["eyes"];
    }

}