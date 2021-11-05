function Button(config) {
    const self = this;
    self.text = config.text;
    self.x = config.x;
    self.y = config.y;
    self.hintNumber = config.hintNumber;
    self.action = config.action;
    self.sprite = null;

    self.long = self.text.length > 16;

    let buttonTextures = Loader.resources["buttons_sheet"].textures;
    self.texture = self.long ? buttonTextures["but_long"] : buttonTextures["but"];
    self.sprite = new PIXI.Sprite(self.texture);
    self.sprite.interactive = true;
    self.sprite.buttonMode = true;
    self.sprite.scale.set(0.8);
    self.sprite.position.x = self.x || 0;
    self.sprite.position.y = self.y || 0;
    self.sprite.click = function () {
        self.action();
    }

    let text = new PIXI.Text(self.text, new PIXI.TextStyle({
        fontFamily: 'Gaegu',
        fontSize: 40,
        fill: "#000",
        padding: 10
    }));
    text.anchor.set(0.5, 0.5);
    text.position.x = self.sprite.texture.width / 2;
    text.position.y = self.sprite.texture.height / 2;
    self.sprite.addChild(text);
}