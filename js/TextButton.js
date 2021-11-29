function TextButton(config) {

    const self = this;
    self.text = config.text;

    // x and y coordinates will be top left corner
    self.x = config.x;
    self.y = config.y;
    self.anchorX = config.anchorX || 0;
    self.anchorY = config.anchorY || 0;
    self.textColor = config.textColor !== undefined ?
        config.textColor : 0xffffff;

    self.areaColor = config.areaColor !== undefined ?
        config.areaColor : 0x000000;
    self.action = config.action;

    // Reference for checking which hint should be closed;
    self.hintNumber = config.hintNumber;

    self.initTextStyle = function (width) {
        return new PIXI.TextStyle({
            fontFamily: 'Futura',
            fontSize: 18,
            fill: self.textColor,
            padding: 10,
            wordWrap: true,
            wordWrapWidth: width - 20
        });
    }

    self.calculateButtonWidth = function (text) {
        return Math.min(20 + text.length * 10, 520);
    }

    self.calculateButtonHeight = function (numberOfLines) {
        return 60 + (numberOfLines - 1) * 30;
    }

    self.calculateNumberOfLines = function (text, textStyle) {
        let textMetrics = new PIXI.TextMetrics.measureText(text, textStyle);
        return textMetrics.lines.length;
    }

    self.setup = function () {
        self.width = self.calculateButtonWidth(self.text);
        self.textStyle = self.initTextStyle(self.width);
        self.numberOfLines = self.calculateNumberOfLines(self.text, self.textStyle);
        self.height = self.calculateButtonHeight(self.numberOfLines);
        // Calculates buttons width and height
        self.initRectangle();
        self.initText();
    }

    self.initRectangle = function () {
        self.container = new PIXI.Graphics();
        self.container.position.x = self.x - self.anchorX * self.width;
        self.container.position.y = self.y - self.anchorY * self.height;
        self.container.beginFill(self.areaColor);
        self.rectangle = self.container.drawRoundedRect(0, 0, self.width, self.height, 20);
        self.container.endFill();
        self.setInteractive(true);
        self.rectangle.pointertap = function () {
            soundManager.playButtonSound();
            self.action();
        }

        // Make buttons hoverable
        self.rectangle.mouseover = function (ev) {
        }

        self.rectangle.mouseout = function (ev) {
        }
        self.container.addChild(self.rectangle);
    }

    self.setInteractive = function (interactive) {
        self.rectangle.interactive = interactive;
        self.rectangle.buttonMode = interactive;
    }

    self.initText = function () {
        self.textObject = new PIXI.Text(self.text, self.textStyle);
        self.textObject.anchor.set(0.5);
        self.textObject.position.x = self.width / 2;
        self.textObject.position.y = self.height / 2;
        self.rectangle.addChild(self.textObject);
    }

    self._addTo = function (parent) {
        self.setup();
        parent.addChild(self.container);
    }

    self._removeFrom = function (parent) {
        parent.removeChild(self.container);
    }

    self.setInvisible = function () {
        self.container.visible = false;
    }

    self.setVisible = function () {
        self.container.visible = true;
    }

    self.animateIn = function (timeDelay) {
        self.rectangle.alpha = 0;
        let previousXPosition = self.rectangle.position.x;
        self.rectangle.position.x += 100;
        self.setVisible();
        let buttonInTween = new TWEEN.Tween(self.rectangle)
            .to({
                alpha: 1,
                position: {
                    x: previousXPosition
                }
            }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(() => {
                self.setInteractive(true);
            });
        setTimeout(() => {
            buttonInTween.start();
        }, timeDelay);
    }
}