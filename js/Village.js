const HOUSES = [{
    "id_dark": "house1_dark",
    "id_light": "house1_light",
    "x": 371,
    "y": 364,
    "owner": "martin"
}, {
    "id_dark": "house2_dark",
    "id_light": "house2_light",
    "x": 847,
    "y": 256,
    "owner": "maike"
}, {
    "id_dark": "house3_dark",
    "id_light": "house3_light",
    "x": 238,
    "y": 124,
    "owner": "maria"
}, {
    "id_dark": "house4_dark",
    "id_light": "house4_light",
    "x": 485,
    "y": 258,
    "owner": "tom"
}, {
    "id_dark": "house5_dark",
    "id_light": "house5_light",
    "x": 484,
    "y": 153,
    "owner": "sam"
}, {
    "id_dark": "house6_dark",
    "id_light": "house6_light",
    "x": 866,
    "y": 352,
    "owner": "bernd"
}, {
    "id_dark": "house7_dark",
    "id_light": "house7_light",
    "x": 93,
    "y": 273,
    "owner": "will"
}, {
    "id_dark": "house8_dark",
    "id_light": "house8_light",
    "x": 666,
    "y": 143,
    "owner": "björn"
}, {
    "id_dark": "carpenter_dark",
    "id_light": "carpenter_light",
    "x": 586,
    "y": 316,
    "owner": "sven"
}, {
    "id_dark": "church_dark",
    "id_light": "church_light",
    "x": 128,
    "y": 307,
    "owner": "marc"
}, {
    "id_dark": "fashion_dark",
    "id_light": "fashion_light",
    "x": 120,
    "y": 119,
    "owner": "bernadette"
}, {
    "id_dark": "barber_dark",
    "id_light": "barber_light",
    "x": 627,
    "y": 416,
    "owner": "jo"
}, {
    "id_dark": "bakery_dark",
    "id_light": "bakery_light",
    "x": 614,
    "y": 250,
    "owner": "mario"
}, {
    "id_dark": "baumschule_dark",
    "id_light": "baumschule_light",
    "x": 288,
    "y": 406,
    "owner": "arndt"
}, {
    "id_dark": "big_dark",
    "id_light": "big_light",
    "x": 729,
    "y": 280,
    "owner": "meier"
}, {
    "id_dark": "small_dark",
    "id_light": "small_light",
    "x": 732,
    "y": 442,
    "owner": "gundula"
}, {
    "id_dark": "highhouse_dark",
    "id_light": "highhouse_light",
    "x": 567,
    "y": 129,
    "owner": "ben"
}, {
    "id_dark": "pharmacy_dark",
    "id_light": "pharmacy_light",
    "x": 359,
    "y": 274,
    "owner": "karla"
}, {
    "id_dark": "billionaire_dark",
    "id_light": "billionaire_light",
    "x": 212,
    "y": 238,
    "owner": "armin"
}, {
    "id_dark": "bank_dark",
    "id_light": "bank_light",
    "x": 368,
    "y": 93,
    "owner": "fred"
}, {
    "id_dark": "tierheim_dark",
    "id_light": "tierheim_light",
    "x": 802,
    "y": 193,
    "owner": "joseph"
}, {
    "id_dark": "kebap_dark",
    "id_light": "kebap_light",
    "x": 467,
    "y": 317,
    "owner": "ali"
}, {
    "id_dark": "pizza_dark",
    "id_light": "pizza_light",
    "x": 470,
    "y": 397,
    "owner": "beppo"
}, {
    "id_dark": "gym_dark",
    "id_light": "gym_light",
    "x": 848,
    "y": 395,
    "owner": "olaf"
}]

function Village(config) {

    const self = this;
    self.config = config;
    self.editable = config.editable;

    // Props
    self.houses = config.houses;
    self.textures = Loader.resources["houses_sheet"].textures;
    self.hitShapes = Loader.resources["houses_shapes"].data;

    self.printPositions = function () {
        let result = [];
        houseSprites.forEach(spr => {
                result.push({
                    "id_dark": spr.dark_key,
                    "id_light": spr.light_key,
                    "x": Math.round(spr.position.x),
                    "y": Math.round(spr.position.y),
                    "owner": spr.owner,
                })
            }
        );
        console.log(JSON.stringify(result));
    }

    // Viel in House auslagern!
    self.setup = function () {
        for (let house of HOUSES) {
            let houseTexture = self.textures[house.id_dark];
            let houseSprite = new PIXI.Sprite(houseTexture);
            let houseHitArea = new HitArea({
                shapeObject: self.hitShapes[house.id_dark],
                translateX: -houseSprite.width / 2
            });
            houseSprite.scale.set(HOUSE_SCALE);
            houseSprite.anchor.set(0.5, 0);
            houseSprite.hitArea = houseHitArea;
            houseSprite.position.x = house.x;
            houseSprite.position.y = house.y;
            houseSprite.zIndex = houseSprite.position.y + houseSprite.height;
            houseSprite.dark_key = house.id_dark;
            houseSprite.light_key = house.id_light;
            houseSprite.owner = house.owner;

            houseSprites.push(houseSprite);

            if (self.editable) {
                // Generate Anchor indicator
                let pointA = new PIXI.Graphics();
                pointA.beginFill(0xFF0000);
                pointA.drawCircle(houseSprite.position.x, houseSprite.position.y + houseSprite.height, 5);
                pointA.endFill();
                stage.addChild(pointA);

                houseSprite.interactive = true;
                houseSprite.buttonMode = true;

                houseSprite.click = function () {
                    this.texture = self.textures[house.id_light];
                }
                let xGrabOffset = 0;
                let yGrabOffset = 0;
                houseSprite
                    .on('mousedown', (e) => {
                        xGrabOffset = e.data.global.x - houseSprite.position.x;
                        yGrabOffset = e.data.global.y - houseSprite.position.y;
                        houseSprite.data = e;
                        houseSprite.alpha = 0.5;
                        houseSprite.dragging = true;
                    })
                    .on('mouseup', (e) => {
                        houseSprite.dragging = false;
                        houseSprite.alpha = 1;
                        houseSprite.data = null;
                    })
                    .on('mousemove', (e) => {
                        if (houseSprite.dragging) {
                            let newPosition = e.data.global;
                            houseSprite.position.x = newPosition.x - xGrabOffset;
                            houseSprite.position.y = newPosition.y - yGrabOffset;
                            pointA.beginFill(0xFF0000);
                            pointA.drawCircle(houseSprite.position.x, houseSprite.position.y + houseSprite.height, 5);
                            pointA.endFill();
                            houseSprite.zIndex = houseSprite.position.y + houseSprite.height;
                            houseSprite.dragging = newPosition;
                        }
                    });
            }
            stage.addChild(houseSprite);
        }
    }

    self.generateSnow = function () {
        for (let i = 0; i < 10000; i++) {
            let circ = new PIXI.Graphics();
            circ.beginFill(0xFFFFFF);
            let yValue = randomBetween(230, 530);
            let xValue = randomBetween(90 - 0.15 * yValue, 870 + 0.15 * yValue);
            circ.drawCircle(xValue, yValue, 5 + Math.random() * 5);
            circ.endFill();
            stage.addChild(circ);
            circ.zIndex = yValue + 5;
            circ.alpha = 0.6;
        }
    }
}