class HitArea {

    constructor(shapeObject) {
        this.shapes = shapeObject;
        //console.log(this.shapes);
        this.polys = this.shapes.map(child => new PIXI.Polygon(child.shape));
        //console.log(this.polys);
    }


    contains = function(x = 0, y=0) {
        return (!this.polys || this.polys.length === 0)
            ? false
            : this.polys.some(shape => shape.contains(x, y));
    }
}