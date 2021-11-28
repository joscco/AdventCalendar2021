function SoundManager() {

    const self = this;

    const WIN_SOUND_ID = "win";
    const TYPE_SOUND_ID = "type";
    const BUTTON_SOUND_ID = "button";

    const voiceTextures = Loader.resources["voice_sheet"].textures;

    let allowSounds = true;

    self.playWinSound = function () {
        playSound(WIN_SOUND_ID)
    }

    self.playTypeSound = function () {
        playSound(TYPE_SOUND_ID)
    }

    self.playButtonSound = function () {
        playSound(BUTTON_SOUND_ID)
    }

    self.refreshButtonTexture = function () {
        if (self.soundSprite) {
            self.soundSprite.texture = allowSounds
                ? voiceTextures["sound"]
                : voiceTextures["no_sound"];
        }
    }

    self.drawSoundButton = function () {
        self.soundSprite = new PIXI.Sprite(voiceTextures["sound"]);
        self.soundSprite.scale.set(0.25);
        self.soundSprite.position.x = 20;
        self.soundSprite.position.y = 20;
        self.soundSprite.interactive = true;
        self.soundSprite.buttonMode = true;
        self.soundSprite.click = function () {
            self.setSoundAllowed(!allowSounds)
            self.refreshButtonTexture();
        }
        stage.addChild(self.soundSprite);
    }

    const playSound = function (soundID) {
        let sound = Loader.sounds[soundID];
        if (sound && allowSounds) {
            Loader.sounds[soundID].volume(0.1).play();
        }
    }

    self.setSoundAllowed = function (boolValue) {
        allowSounds = boolValue;
    }
}