function House(config) {

    const self = this;

    // Props
    self.x = config.x;
    self.y = config.y;
    self.isLighted = config.isLighted;
    self.id = config.id;

    // Update

    // Update Function
    self.update = function () {
        if (self.isLighted) {
            if (Math.random() < 0.002) self.isLighted = false;
        } else {
            if (Math.random() < 0.09) self.lighted = true;
        }
    }

    // Sprite Info

    // Draw Variables
    self.sprite = null;

    self.addToStage = function () {
        var sprite = self.sprite;
        if (!sprite) {
            sprite = new Sprite();
        }
        stage.addChild(self.sprite);
    }

    // Draw Function
    self.draw = function () {
        var sprite = self.sprite;
        if (!sprite) {
            sprite = new Sprite();
            self.addToStage();
        }
        sprite.position.x = self.x;
        sprite.position.y = self.y;
        sprite.texture = isLighted ? House_Sprites[id + "_light"] : House_Sprites[id + "_dark"];
    }
}