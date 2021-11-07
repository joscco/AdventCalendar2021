const Loader = new PIXI.Loader();
Loader.sounds = [];
let totalAssets = 0;
let loadedAssets = 0;
let loadingComplete = false;

const resources = [{name: "houses_sheet", path: "./assets/images/houses_spritesheet.json", type: "spritesheet"},
    {name: "houses_shapes", path: "./assets/json/houses_shapes.json", type: "json"},
    {name: "houses", path: "./assets/json/houses.json", type: "json"},
    {name: "base_people_sheet", path: "./assets/images/people_basis.json", type: "spritesheet"},
    {name: "happy_people_sheet", path: "./assets/images/people_happy.json", type: "spritesheet"},
    {name: "neutral_people_sheet", path: "./assets/images/people_neutral.json", type: "spritesheet"},
    {name: "sad_people_sheet", path: "./assets/images/people_sad.json", type: "spritesheet"},
    {name: "annotations_sheet", path: "./assets/images/annotation_sprites.json", type: "spritesheet"},
    {name: "moon_sheet", path: "./assets/images/moon.json", type: "spritesheet"},
    {name: "hand", path: "./assets/images/hand.png", type: "png"},
    {name: "button", path: "./assets/sounds/button1.mp3", type: "sound"},
    {name: "typeSound", path: "./assets/sounds/typeSound.mp3", type: "sound"}]

class AssetUtils {

    static loadAssets(game) {

        for (let resource of resources) {
            if (resource.path.slice(-4) === ".mp3") {
                let sound = new Howl({src: resource.path});
                Loader.sounds[resource.name] = sound;
            } else {
                Loader.add(resource.name, resource.path);
                totalAssets += this.getAssetNumberByType(resource.type);
            }
        }

        game.setupLoadingScreen(totalAssets);

        Loader.onLoad.add(() => {
            loadedAssets++;
            game.updateLoadingScreen(loadedAssets);
        });
        Loader.onComplete.add(() => {
            loadingComplete = true;
        });
        Loader.load(game.handleLoadingComplete);

    }

    static getAssetNumberByType(type) {
        if (type === "spritesheet") {
            // Spritesheets consist of a json file AND a png file
            return 2;
        } else {
            return 1;
        }
    }
}
