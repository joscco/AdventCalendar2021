const Loader = new PIXI.Loader();

class AssetUtils {

    static loadAssets(onLoadingFinished) {
        Loader
            .add("houses_sheet", "./assets/images/houses_spritesheet.json")
            .load(onLoadingFinished);
    }
}
