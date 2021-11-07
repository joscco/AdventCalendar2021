function House(config) {

    const self = this;

    // Props
    self.x = config.x;
    self.y = config.y;
    self.id = config.id;
    self.owner = config.owner;
    self.questDay = config.questDay;
    self.lighted = config.lighted || false;
    self.textures = Loader.resources["houses_sheet"].textures;
    self.hitShapes = Loader.resources["houses_shapes"].data;

    // Update Function
    self.update = function () {
        if (self.lighted) {
            if (Math.random() < 0.002) self.lighted = false;
        } else {
            if (Math.random() < 0.09) self.lighted = true;
        }
    }

    self._add = function () {
        self.initSprite();
        self.updateTexture();
        stage.addChild(self.sprite);
    }

    // Draw Function
    self.updateTexture = function () {
        self.sprite.texture = self.lighted ? self.textures[self.id + "_light"] : self.textures[self.id + "_dark"];
    }

    self.initSprite = function() {
        self.sprite = new PIXI.Sprite();
        self.sprite.position.x = self.x;
        self.sprite.position.y = self.y;
        self.sprite.scale.set(HOUSE_SCALE);
        self.sprite.anchor.set(0.5, 0);
        self.updateTexture();
        self.sprite.hitArea = new HitArea({
            shapeObject: self.hitShapes[self.id + "_dark"],
            translateX: -self.sprite.width
        });
        // Has to be called AFTER setting texture
        self.sprite.zIndex = self.y + self.sprite.height;
    }

    self.lighten = function() {
        self.lighted = true;
        self.updateTexture();
    }

    self.unlighten = function() {
        self.lighted = false;
        self.updateTexture();
    }
}