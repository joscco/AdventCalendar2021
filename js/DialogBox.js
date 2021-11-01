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
    self.rect.drawRoundedRect(0, 0, self.width, self.height, 10);
    self.rect.endFill();


    let baseTextures = Loader.resources["base_people_sheet"].textures;
    let sadTextures = Loader.resources["sad_people_sheet"].textures;
    let happyTextures = Loader.resources["happy_people_sheet"].textures;
    let neutralTextures = Loader.resources["neutral_people_sheet"].textures;
    let person = new PIXI.Sprite(baseTextures["beppo"]);
    let sad_face = new PIXI.Sprite(sadTextures["beppo"]);
    sad_face.anchor.set(0, 1);
    person.scale.set(0.7);
    person.addChild(sad_face);
    person.position.x = 20;
    person.position.y = self.height;
    person.anchor.set(0, 1);
    self.box.addChild(self.rect)
    self.box.addChild(person);
    
    document.fonts.load("1rem 'OliverRegular'").then(() => {
        let text = new PIXI.Text("Ich habe ein Problem!", {fontFamily: 'OliverRegular', fontSize: 35});
        text.position.x = 250;
        text.position.y = 30;
        self.box.addChild(text);
    });

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

