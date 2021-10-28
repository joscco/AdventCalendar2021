const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;
const HOUSE_SCALE = 0.4;
let houseSprites = [];
let lighted = false;
let app;


downHandler = function (event) {
    console.log("active");
    if (event.key === "Enter") {
        let result = [];
        for (let houseSprite of houseSprites) {
            result.push({
                "id_dark": houseSprite.dark_key,
                "id_light": houseSprite.light_key,
                "x": houseSprite.position.x,
                "y": houseSprite.position.y
            });
        }
        console.log(JSON.stringify(result));
    }
}

function Game() {

    app = new PIXI.Application({
        width: GAME_WIDTH, height: GAME_HEIGHT, backgroundColor: GAME_BACKGROUND_COLOR, antialias: true
    });

    this.startGame = function () {
        document.body.appendChild(app.view);
        document.body.addEventListener("keypress", downHandler);
        app.stage.sortableChildren = true;

        let dialogBox = new DialogBox();

        let houses = HOUSES;
        let houseTextures = Loader.resources["houses_sheet"].textures;
        let houseShapes = Loader.resources["houses_shapes"].data;
        //Object.keys(houseShapes.data).forEach(blu => console.log(blu));
        for (let house of houses) {
            let houseTexture = houseTextures[house.id_dark];
            let houseSprite = new PIXI.Sprite(houseTexture);
            let houseHitArea = new HitArea(houseShapes[house.id_dark]);
            //console.log(houseShape);
            //console.log("houseHitArea:", houseHitArea);
            //console.log(housePoly);
            houseSprite.scale.set(HOUSE_SCALE);
            houseSprite.hitArea = houseHitArea;
            // hier wegen der hitArea noch Gedanken machen!
            houseSprite.position.x = house.x;
            houseSprite.position.y = house.y;

            let pointA = new PIXI.Graphics();
            pointA.beginFill(0xFF0000);
            pointA.drawCircle(houseSprite.position.x, houseSprite.position.y + houseSprite.height, 5);
            pointA.endFill();
            app.stage.addChild(pointA);
            // Ultra nervig aber notwendig, damit der Boden entscheidet!
            houseSprite.zIndex = houseSprite.position.y + houseSprite.height;
            houseSprite.dark_key = house.id_dark;
            houseSprite.light_key = house.id_light;

            houseSprites.push(houseSprite);
            houseSprite.interactive = true;
            houseSprite.buttonMode = true;

            houseSprite.click = function () {
                this.texture = houseTextures[house.id_light];
                //dialogBox.toggleShow();
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


            app.stage.addChild(houseSprite);
        }
        for (let i = 0; i <10000; i++) {
            let circ = new PIXI.Graphics();
            circ.beginFill(0xFFFFFF);
            let yValue = 230 + Math.random() * 400;
            circ.drawCircle(Math.random() * 960, yValue, Math.random() * 15);
            circ.endFill();
            app.stage.addChild(circ);
            circ.zIndex = yValue + 10;
            circ.alpha = 0.6;
        }
    }
}

