function DialogBox() {
    const self = this;
    self.hidden = true;
    self.x = 50;
    self.y = -400;
    self.width = 860;
    self.height = 340;

    self.box = new PIXI.Container();
    self.box.position.x = self.x;
    self.box.position.y = self.y;
    self.box.zIndex = 540;
    self.rect = new PIXI.Graphics();
    self.rect.beginFill(0xFFFFFF);
    self.rect.drawRoundedRect(0, 0, self.width, self.height, 20);
    self.rect.endFill();

    self.text = new PIXI.Text("Bliblablup");
    self.text.position.x = 50;
    self.text.position.y = 50;
    self.box.addChild(self.rect);
    self.box.addChild(self.text);

    self.toggleShow = function () {
        if (self.hidden) {
            self.fadeIn();
        } else {
            self.fadeOut();
        }
    };

    self.fadeIn = function () {
        self.box.position.y = -400;
        app.stage.addChild(self.box);
        self.hidden = false;
        Tween_get(self.box)
            .to({y: 50}, _s(0.4), createjs.Ease.quartInOut);

    }

    self.fadeOut = function () {
        Tween_get(self.box.position)
            .to({y: -400}, _s(0.4), createjs.Ease.quartInOut)
            .call(() => {
                    app.stage.removeChild(self.box);
                    self.hidden = true;
                }
            )
    }

}

