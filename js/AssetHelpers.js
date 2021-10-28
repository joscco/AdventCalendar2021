const Loader = new PIXI.Loader();

class AssetUtils {

    static loadAssets(onLoadingFinished) {
        Loader
            .add("houses_sheet", "./assets/images/houses_spritesheet.json")
            .add("houses_shapes", "./assets/images/houses_shapes.json")
            .load(onLoadingFinished);
    }
}
