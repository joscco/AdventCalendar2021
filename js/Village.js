function Village(config) {

    const self = this;
    self.config = config;
    self.editable = config.editable;
    self.snowing = false;
    self.snowFlakes = [];
    self.groundSnow = [];

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

    self.letItSnow = function () {
        self.snowing = true;
    }

    self.update = function () {
        if (self.snowing) {
            let snowFlakeDice = Math.random();
            if (snowFlakeDice > 1 - CURRENT_DAY_NUMBER*0.02) {
                let randomX = randomBetween(0, GAME_WIDTH);
                let randomRadius = randomBetween(1, 4);
                let newSnowFlake = new SnowFlake({x: randomX, y: 0, radius: randomRadius});
                newSnowFlake._add();
                self.snowFlakes.push(newSnowFlake);

            }
            self.snowFlakes = self.snowFlakes.filter(snowFlake => {
                if (snowFlake.shouldIDie()) {
                    snowFlake._remove();
                    return false;
                } else {
                    snowFlake.update();
                    return true;
                }
            });
        }
    }

    self.removeGroundSnow = function() {
        self.groundSnow.forEach(el => {
            stage.removeChild(el);
        })
        self.groundSnow = [];
    }

    self.generateGroundSnow = function () {
        for (let i = 0; i < 20 + CURRENT_DAY_NUMBER*250; i++) {
            let circ = new PIXI.Sprite(Loader.resources["snow"].texture);
            let yValue = randomBetween(230, 520);
            let downOffset = 130;
            circ.scale.set(randomBetween(-1, 1));
            circ.anchor.set(0.5);
            let  xValue = randomBetween(downOffset - 0.2 * yValue, GAME_WIDTH - downOffset + 0.2 * yValue);
            circ.position.x = xValue;
            circ.position.y = yValue;
            circ.zIndex = yValue + 10;
            circ.alpha = randomBetween(0.8, 1);
            self.groundSnow.push(circ);
            stage.addChild(circ);
        }
    }
}