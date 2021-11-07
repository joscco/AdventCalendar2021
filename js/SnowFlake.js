const SNOWFLAKE_DIE_OFFSET = 50;

function SnowFlake(config) {
    const self = this;

    self.x = config.x;
    self.y = config.y;
    self.radius = config.radius;

    self.update = function () {
        self.y++;
        self.circle.position.y = self.y;
    }

    self.shouldIDie = function () {
        return self.y >= (GAME_HEIGHT - SNOWFLAKE_DIE_OFFSET);
    }

    self._add = function () {
        self.circle = new PIXI.Graphics();
        self.circle.beginFill(0xFFFFFF);
        self.circle.drawCircle(self.x, self.y, self.radius);
        self.circle.endFill();
        self.circle.zIndex = 1000;
        stage.addChild(self.circle);
    }

    self._remove = function () {
        stage.removeChild(self.circle);
    }
}