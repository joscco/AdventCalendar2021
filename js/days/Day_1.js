DAYS.push({
    id: "day1",
    quest: {
        person: "karla",
        emotion: "sad",
        text: "Hey du. Map mu?",
        answers: [
            {
                text: "Okidoki, ich schaue mal!",
                type: "accept"
            }]
    },
    hints: [{
        hintNumber: 0,
        person: "gundula",
        emotion: "neutral",
        text: "no choosu",
        answers: [{
            text: "rection lolo",
            type: "closeHint"
        }]
    }, {
        hintNumber: 1,
        person: "fred",
        emotion: "neutral",
        text: "no choosuu",
        answers: [{
            text: "rection lolo2",
            type: "closeHint"
        }]
    }],
    solutionDialog: {
        text: "Na hast du was rausbekommen?",
        answers: [{
            text: "Nope",
            type: "close"
        }, {
            text: "Yes!",
            type: "rightAnswer",
            reaction: {
                text: "Wirklich! Oh wie toll!",
                answers: [{
                    text: "In der Tat!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "oh gott, ich danke dir vielmals!",
        answers: [{
            text: "immer gern doch!",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "no choosu",
            answers: [{
                text: "rection lolo",
                type: "close"
            }]
        }]
    }
})