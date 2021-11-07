function House(config) {

    const self = this;
    self.textures = Loader.resources["houses_sheet"].textures;
    self.hitShapes = Loader.resources["houses_shapes"].data;

    // Props
    self.x = config.x;
    self.y = config.y;
    self.id = config.id;
    self.owner = config.owner;
    self.questDay = config.questDay;
    self.lighted = config.lighted || false;

    self.setup = function (parent = stage) {
        self.parent = parent;
        self.sprite = setupSprite();
        self.parent.addChild(self.sprite);
    }

    // Update Function
    self.update = function () {
        if (self.lighted) {
            if (Math.random() < 0.002) self.lighted = false;
        } else {
            if (Math.random() < 0.09) self.lighted = true;
        }
    }

    self.updateTexture = function() {
        self.sprite.texture = getTexture(self.lighted, self.id);
    }

    self.lighten = function () {
        self.lighted = true;
        self.updateTexture();
    }

    self.unlighten = function () {
        self.lighted = false;
        self.updateTexture();
    }

    const getTexture = function (lighted, id) {
        return lighted ? self.textures[id + "_light"] : self.textures[id + "_dark"];
    }

    const setupSprite = function () {
        let sprite = new PIXI.Sprite();
        sprite.texture = getTexture(self.lighted, self.id);
        sprite.scale.set(HOUSE_SCALE);
        sprite.anchor.set(0.5, 0);
        sprite.position.x = self.x;
        sprite.position.y = self.y;
        // Has to be called AFTER setting texture
        sprite.zIndex = self.y + sprite.height;
        sprite.hitArea = new HitArea({
            shapeObject: self.hitShapes[self.id + "_dark"],
            translateX: -sprite.width
        });
        return sprite;
    }
}