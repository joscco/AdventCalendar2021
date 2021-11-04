const Loader = new PIXI.Loader();

class AssetUtils {

    static loadAssets(onLoadingFinished) {
        Loader
            .add("houses_sheet", "./assets/images/houses_spritesheet.json")
            .add("houses_shapes", "./assets/images/houses_shapes.json")
            .add("base_people_sheet", "./assets/images/people_basis.json")
            .add("happy_people_sheet", "./assets/images/people_happy.json")
            .add("neutral_people_sheet", "./assets/images/people_neutral.json")
            .add("sad_people_sheet", "./assets/images/people_sad.json")
            .add("annotations_sheet", "./assets/images/annotation_sprites.json")
            .add("buttons_sheet", "./assets/images/buttons.json")
            .add("moon_sheet", "./assets/images/moon.json")
            .add("Gaegu", "./css/Gaegu-Regular.ttf")
            .load(onLoadingFinished)
    }
}
