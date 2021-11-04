const HOUSES = [{
    "id_dark": "house1_dark",
    "id_light": "house1_light",
    "x": 228,
    "y": 308,
}, {
    "id_dark": "house2_dark",
    "id_light": "house2_light",
    "x": 764.6598510742188,
    "y": 255.63461303710938
}, {
    "id_dark": "house3_dark",
    "id_light": "house3_light",
    "x": 119.27970886230469,
    "y": 126.24057006835938
}, {
    "id_dark": "house4_dark",
    "id_light": "house4_light",
    "x": 277.72802734375,
    "y": 273.0654602050781
}, {
    "id_dark": "house5_dark",
    "id_light": "house5_light",
    "x": 463.26605224609375,
    "y": 205.3294677734375
}, {
    "id_dark": "house6_dark",
    "id_light": "house6_light",
    "x": 808.63818359375,
    "y": 350.852783203125
}, {
    "id_dark": "house7_dark",
    "id_light": "house7_light",
    "x": 527.1800537109375,
    "y": 210.298583984375
}, {
    "id_dark": "house8_dark",
    "id_light": "house8_light",
    "x": 605.409423828125,
    "y": 184.62860107421875
}, {
    "id_dark": "carpenter_dark",
    "id_light": "carpenter_light",
    "x": 448.0913391113281,
    "y": 314.052734375
}, {
    "id_dark": "church_dark",
    "id_light": "church_light",
    "x": 38.616241455078125,
    "y": 288.2934265136719
}, {
    "id_dark": "fashion_dark",
    "id_light": "fashion_light",
    "x": 208.5213623046875,
    "y": 199.00729370117188
}, {
    "id_dark": "barber_dark",
    "id_light": "barber_light",
    "x": 532.44091796875,
    "y": 371.0350341796875
}, {
    "id_dark": "bakery_dark",
    "id_light": "bakery_light",
    "x": 512.5377807617188,
    "y": 267.8243713378906
}, {
    "id_dark": "baumschule_dark",
    "id_light": "baumschule_light",
    "x": 136.5701141357422,
    "y": 413.022216796875
}, {
    "id_dark": "big_dark",
    "id_light": "big_light",
    "x": 636.5101928710938,
    "y": 272.578369140625
}, {
    "id_dark": "small_dark",
    "id_light": "small_light",
    "x": 620.9356079101562,
    "y": 448.3558349609375
}, {
    "id_dark": "highhouse_dark",
    "id_light": "highhouse_light",
    "x": 32.85084533691406,
    "y": 165.13388061523438
}, {
    "id_dark": "pharmacy_dark",
    "id_light": "pharmacy_light",
    "x": 228.80508422851562,
    "y": 367.533935546875
}, {
    "id_dark": "billionaire_dark",
    "id_light": "billionaire_light",
    "x": 55.61279296875,
    "y": 227.02816772460938
}, {
    "id_dark": "bank_dark",
    "id_light": "bank_light",
    "x": 313.82037353515625,
    "y": 206.61618041992188
}, {
    "id_dark": "tierheim_dark",
    "id_light": "tierheim_light",
    "x": 704.172607421875,
    "y": 197.93896484375
}, {
    "id_dark": "kebap_dark",
    "id_light": "kebap_light",
    "x": 348.7286071777344,
    "y": 381.4534912109375,
    "owner": "ali"
}, {
    "id_dark": "pizza_dark",
    "id_light": "pizza_light",
    "x": 422.8826904296875,
    "y": 401.56915283203125
}, {
    "id_dark": "gym_dark",
    "id_light": "gym_light",
    "x": 695.4526977539062,
    "y": 389.95098876953125
}];

function Village(config) {

    var self = this;
    self.config = config;
    self.editable = config.editable;

    // Props
    self.houses = config.houses;
    self.textures = Loader.resources["houses_sheet"].textures;
    self.hitShapes = Loader.resources["houses_shapes"].data;


    // Viel in House auslagern!
    self.setup = function () {
        for (let house of HOUSES) {
            let houseTexture = self.textures[house.id_dark];
            let houseSprite = new PIXI.Sprite(houseTexture);
            let houseHitArea = new HitArea(self.hitShapes[house.id_dark]);
            houseSprite.scale.set(HOUSE_SCALE);
            houseSprite.hitArea = houseHitArea;
            // hier wegen der hitArea noch Gedanken machen!
            houseSprite.position.x = house.x;
            houseSprite.position.y = house.y;
            houseSprite.zIndex = houseSprite.position.y + houseSprite.height;
            houseSprite.dark_key = house.id_dark;
            houseSprite.light_key = house.id_light;

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
            let yValue = randomBetween(230 , 530 );
            let xValue = randomBetween(90 - 0.15*yValue, 870 + 0.15*yValue);
            circ.drawCircle(xValue, yValue, 5 + Math.random() * 5);
            circ.endFill();
            stage.addChild(circ);
            circ.zIndex = yValue + 5;
            circ.alpha = 0.6;
        }
    }
}