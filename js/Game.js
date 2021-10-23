const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;
const GAME_BACKGROUND_COLOR = 0x1d1d34;
const HOUSE_SCALE = 0.4;
let houseSprites = [];
let lighted = false;
let app;



downHandler = function(event) {
    console.log("active");
    if (event.key === "Enter") {
        let result = [];
        for(let houseSprite of houseSprites) {
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
        for (let house of houses) {
            let houseTexture = houseTextures[house.id_dark];
            let houseSprite = new PIXI.Sprite(houseTexture);
            houseSprite.position.x = house.x;
            houseSprite.position.y = house.y;
            houseSprite.zIndex = house.y;
            houseSprite.dark_key = house.id_dark;
            houseSprite.light_key = house.id_light;
            houseSprite.scale.set(HOUSE_SCALE);
            houseSprite.anchor.set(0.5);
            houseSprites.push(houseSprite);
            houseSprite.interactive = true;
            houseSprite.buttonMode = true;
            houseSprite.click = function () {
                this.texture = houseTextures[house.id_light];
                //dialogBox.toggleShow();
            }
            // houseSprite
            //     .on('mousedown', (e) => {
            //         houseSprite.data = e;
            //         houseSprite.alpha = 0.5;
            //         houseSprite.dragging = true;
            //     })
            //     .on('mouseup', (e) => {
            //         houseSprite.dragging = false;
            //         houseSprite.alpha = 1;
            //         houseSprite.data = null;
            //     })
            //     .on('mousemove', (e) => {
            //         if (houseSprite.dragging) {
            //             let newPosition = e.data.global;
            //             houseSprite.dragging = newPosition;
            //             houseSprite.position.x = newPosition.x;
            //             houseSprite.position.y = newPosition.y;
            //             houseSprite.zIndex = newPosition.y;
            //
            //         }
            //     });

            for (let i = 0; i<700 ; i++) {
                let circ = new PIXI.Graphics();
                circ.beginFill(0xFFFFFF);
                let yValue = Math.random()*540;
                circ.drawCircle(Math.random()*960, yValue, Math.random()*15);
                circ.endFill();
                app.stage.addChild(circ);
                circ.zIndex = yValue - Math.random()*75;
                circ.alpha = 0.3;
            }
            app.stage.addChild(houseSprite);
        }
    }
}

