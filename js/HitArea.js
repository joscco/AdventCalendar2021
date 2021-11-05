function HitArea(config) {
    const self = this;
    self.translateX = config.translateX | 0;
    self.shapes = config.shapeObject;
    self.polys = self.shapes.map(child => new PIXI.Polygon(child.shape));


    self.contains = function(x = 0, y=0) {
        return (!this.polys || this.polys.length === 0)
            ? false
            : this.polys.some(shape => shape.contains(x - self.translateX, y));
    }
}