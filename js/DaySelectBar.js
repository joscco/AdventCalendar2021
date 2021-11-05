function DaySelectBar(config) {
    const self = this;

    // Days
    self.days = config.days;

    self.dom = config.dom;
    self.dom.className = "day-select-bar"

    self.addDayButton = function(day) {
        let dayButton = new DaySelectButton(day);
        self.dom.appendChild(dayButton.dom);
    }

    for(let i = 0; i < self.days.length; i++) {
        self.addDayButton(self.days[i]);
    }
}

function DaySelectButton(day) {
    const self = this;
    self.day = day;

    self.dom = document.createElement("div");
    self.dom.className = "day-select-button";
    self.dom.innerHTML = day.number;

    self.dom.onclick = function() {
        CURRENT_DAY_NUMBER = day.number;
        GAME.prepareDay();
    }
}