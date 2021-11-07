function DaySelectBar(config) {
    const self = this;
    const CALENDAR_DAYS = 24;

    self.dom = config.dom;
    self.dom.classList.add("day-select-bar");
    self.daysSoFar = config.daysSoFar;

    self.addDayButton = function (day) {
        let dayButton = new DaySelectButton(day);
        self.dom.appendChild(dayButton.dom);
        dayButton.fadeIn(day * 100);
    }

    for (let i = 0; i < Math.min(CALENDAR_DAYS, self.daysSoFar); i++) {
        self.addDayButton(i + 1);
    }


    self.reposition = function () {
        self.gameRect = $("canvas").getBoundingClientRect();
        self.dom.style.top = (self.gameRect.top + GAME_HEIGHT + 10) + "px";
    }

}


function DaySelectButton(dayNumber) {
    const self = this;
    self.dayNumber = dayNumber;

    self.dom = document.createElement("div");
    self.dom.classList.add("day-select-button", "button-out");
    self.dom.innerHTML = dayNumber;

    self.dom.onclick = function () {
        GAME.initMainGame(self.dayNumber);
    }

    self.fadeIn = function (delay) {
        setTimeout(() => {
            self.dom.classList.remove("button-out")
        }, delay);
    }
}