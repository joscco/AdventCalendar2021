function DialogBox(config) {
    const self = this;
    self.hidden = true;
    self.x = 50;
    self.y = -400;
    self.width = 860;
    self.height = 340;
    self.text = config.text;
    self.answer = config.answer;

    self.box = new PIXI.Container();
    self.box.position.x = self.x;
    self.box.position.y = self.y;
    self.box.zIndex = 1100;
    self.rect = new PIXI.Graphics();
    self.rect.beginFill(0xFFFFFF);
    self.rect.drawRoundedRect(0, 0, self.width, self.height, 10);
    self.rect.endFill();


    let baseTextures = Loader.resources["base_people_sheet"].textures;
    let sadTextures = Loader.resources["sad_people_sheet"].textures;
    let happyTextures = Loader.resources["happy_people_sheet"].textures;
    let neutralTextures = Loader.resources["neutral_people_sheet"].textures;
    let buttonTextures = Loader.resources["buttons_sheet"].textures;
    let person = new PIXI.Sprite(baseTextures["beppo"]);
    let sad_face = new PIXI.Sprite(sadTextures["beppo"]);
    sad_face.anchor.set(0, 1);
    person.scale.set(0.7);
    person.addChild(sad_face);
    person.position.x = 0;
    person.position.y = self.height;
    person.anchor.set(0, 1);
    self.box.addChild(self.rect)
    self.box.addChild(person);

    let text = new PIXI.Text(self.text,
        new PIXI.TextStyle({fontFamily: 'Gaegu', fontSize: 40, padding: 10}));
    text.position.x = 240;
    text.position.y = 30;
    self.box.addChild(text);

    let button = new Button({
        x: self.box.width - 300,
        y: 230,
        text: self.answer,
        action: function () {
            self.toggleShow();
        }
    });

    self.box.addChild(button);


    self.toggleShow = function () {
        if (self.hidden) {
            self.fadeIn();
        } else {
            self.fadeOut();
        }
    };

    self.fadeIn = function () {
        self.box.position.y = -400;
        stage.addChild(self.box);
        self.hidden = false;
        new TWEEN.Tween(self.box.position)
            .to({y: 50}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();;

    }

    self.fadeOut = function () {
        new TWEEN.Tween(self.box.position)
            .to({y: -400}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => {
                    stage.removeChild(self.box);
                    self.hidden = true;
                }
            )
            .start();
    }

}

