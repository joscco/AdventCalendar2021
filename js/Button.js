function Button(config) {
    const self = this;
    self.text = config.text;
    self.x = config.x;
    self.y = config.y;
    self.hintNumber = config.hintNumber;
    self.action = config.action;

    self.width = Math.min(20 + self.text.length * 14, 550);
    self.height = 60;

    self.texture = new PIXI.Graphics();
    self.texture.beginFill(0x000000)
    self.rectangle = self.texture.drawRoundedRect(self.x, self.y, self.width, self.height, 20);
    self.texture.endFill();
    self.rectangle.interactive = true;
    self.rectangle.buttonMode = true;
    self.rectangle.pointertap = function () {
        self.action();
    }

    self.rectangle.mouseover = function() {
        self.rectangle.fill = 0x111111;
    }

    self.rectangle.mouseout = function() {
        self.rectangle.fill = 0x000000;
    }


    self.textStyle = new PIXI.TextStyle({
        fontFamily: 'Dudu',
        fontSize: 30,
        fill: "#FFF",
        padding: 10,
        wordWrap: true,
        wordWrapWidth: self.width - 20
    });
    self.textObject = new PIXI.Text(self.text, self.textStyle);

    // Adapt rectangle height
    self.textMetrics = new PIXI.TextMetrics.measureText(self.text, self.textStyle);
    self.numberOfLines = self.textMetrics.lines.length;
    self.rectangle.height += (self.numberOfLines - 1)*30;

    self.textObject.anchor.set(0.5);
    self.textObject.scale.set(1, self.height/self.rectangle.height);
    self.textObject.position.x = self.rectangle.width/2;
    self.textObject.position.y = self.height/2;
    self.rectangle.addChild(self.textObject);
}