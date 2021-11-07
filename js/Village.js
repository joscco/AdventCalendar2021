function Village(config) {

    const self = this;
    self.config = config;
    self.editable = config.editable;

    // Props
    self.houses = [];

    self.printPositions = function () {
        let result = [];
        self.houses.forEach(house => {
                result.push({
                    "id": house.id,
                    "x": Math.round(house.sprite.position.x),
                    "y": Math.round(house.sprite.position.y),
                    "owner": house.owner,
                    "questDay": house.questDay
                })
            }
        );
        console.log(JSON.stringify(result));
    }

    self.setup = function () {
        for (let houseEntry of Loader.resources["houses"].data.houses) {
            let house = new House({
                id: houseEntry.id,
                x: houseEntry.x,
                y: houseEntry.y,
                owner: houseEntry.owner,
                questDay: houseEntry.questDay
            });
            house._add();
            self.houses.push(house);

            if (self.editable) {
                // Generate Anchor indicator
                let pointA = new PIXI.Graphics();
                pointA.beginFill(0xFF0000);
                pointA.drawCircle(house.x, house.sprite.zIndex, 5);
                pointA.endFill();
                stage.addChild(pointA);

                house.sprite.interactive = true;
                house.sprite.buttonMode = true;

                house.sprite.pointertap = function () {
                    this.texture = house.textures[houseEntry.id + "_light"];
                }
                let xGrabOffset = 0;
                let yGrabOffset = 0;
                house.sprite
                    .on('mousedown', (e) => {
                        xGrabOffset = e.data.global.x - house.sprite.position.x;
                        yGrabOffset = e.data.global.y - house.sprite.position.y;
                        house.sprite.data = e;
                        house.sprite.alpha = 0.5;
                        house.sprite.dragging = true;
                    })
                    .on('mouseup', (e) => {
                        house.sprite.dragging = false;
                        house.sprite.alpha = 1;
                        house.sprite.data = null;
                    })
                    .on('mousemove', (e) => {
                        if (house.sprite.dragging) {
                            let newPosition = e.data.global;
                            house.x = newPosition.x - xGrabOffset;
                            house.y = newPosition.y - yGrabOffset;
                            house.sprite.position.x = house.x;
                            house.sprite.position.y = house.y;
                            house.sprite.zIndex = house.y + house.sprite.height;
                            pointA.beginFill(0xFF0000);
                            pointA.drawCircle(house.x, house.sprite.zIndex, 5);
                            pointA.endFill();
                            house.sprite.dragging = newPosition;
                        }
                    });
            }
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