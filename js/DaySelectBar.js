function DaySelectBar(config) {
    const self = this;
    const CALENDAR_DAYS = 24;

    self.dom = config.dom;
    self.dom.className = "day-select-bar";
    self.daysSoFar = config.daysSoFar;

    self.addDayButton = function(day) {
        let dayButton = new DaySelectButton(day);
        self.dom.appendChild(dayButton.dom);
    }

    for(let i = 0; i < Math.min(CALENDAR_DAYS, self.daysSoFar); i++) {
        self.addDayButton(i+1);
    }
}

function DaySelectButton(dayNumber) {
    const self = this;
    self.dayNumber = dayNumber;

    self.dom = document.createElement("div");
    self.dom.className = "day-select-button";
    self.dom.innerHTML = dayNumber;

    self.dom.onclick = function() {
        GAME.initMainGame(self.dayNumber);
    }
}