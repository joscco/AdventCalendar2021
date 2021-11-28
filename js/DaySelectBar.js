function DaySelectBar(config) {
    const self = this;
    const CALENDAR_DAYS = 24;

    self.dom = config.dom;
    self.dom.classList.add("day-select-bar");
    self.daysSoFar = config.daysSoFar;
    self.dayButtons = [];
    self.daySpeed = 50;

    self.addDayButton = function (day) {
        let dayButton = new DaySelectButton(day, self);
        self.dom.appendChild(dayButton.dom);
        self.dayButtons.push(dayButton);
        dayButton.fadeIn(day * self.daySpeed);
    }



    for (let i = 0; i < Math.min(CALENDAR_DAYS, self.daysSoFar); i++) {
        self.addDayButton(i + 1, self);
    }

    self.reposition = function () {
        self.gameRect = $("canvas").getBoundingClientRect();
        self.dom.style.top = (self.gameRect.top + GAME_HEIGHT + 10) + "px";
    }

    self.setCurrentDayButtonActive = function(currentDay) {
        self.dayButtons.forEach(btn => {
            if(btn.dayNumber === currentDay) {
                btn.setActive();
            } else {
                btn.setInactive();
            }
        })
    }

}


function DaySelectButton(dayNumber, selectBar) {
    const self = this;
    self.dayNumber = dayNumber;
    self.selectBar = selectBar;

    self.dom = document.createElement("div");
    self.dom.classList.add("day-select-button", "button-out");
    self.dom.innerHTML = dayNumber;

    self.dom.onclick = function () {
        soundManager.playButtonSound();
        GAME.initMainGame(self.dayNumber);
    }

    self.setActive = function() {
        self.dom.classList.add("button-active");
    }

    self.setInactive = function() {
        self.dom.classList.remove("button-active");
    }

    self.fadeIn = function (delay) {
        setTimeout(() => {
            self.dom.classList.remove("button-out")
        }, delay);
    }
}