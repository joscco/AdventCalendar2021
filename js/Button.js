function Button(config) {
    const self = this;
    self.text = config.text;
    self.x = config.x;
    self.y = config.y;
    self.action = config.action;
    self.long = config.long || false;

    let buttonTextures = Loader.resources["buttons_sheet"].textures;
    self.texture = self.long ? buttonTextures["but_long"] : buttonTextures["but"];
    let button = new PIXI.Sprite(self.texture);
    button.interactive = true;
    button.buttonMode = true;
    button.scale.set(0.8);
    button.position.x = self.x;
    button.position.y = self.y;
    button.click = function () {
        self.action();
    }

    let text = new PIXI.Text(self.text, new PIXI.TextStyle({
        fontFamily: 'Gaegu',
        fontSize: 40,
        fill: "#000",
        padding: 10
    }));
    text.anchor.set(0.5, 0.5);
    text.position.x = button.texture.width / 2;
    text.position.y = button.texture.height / 2;
    button.addChild(text);

    return button;
}