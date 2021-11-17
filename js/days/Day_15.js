DAYS.push({
    id: "day15",
    quest: {
        person: "sven",
        emotion: "sad",
        // Ab hier
        text: "Hey.",
        answers: [
            {
                text: "Hey.",
                type: "continue",
                reaction: {
                    text: "War's das?",
                    answers: [{
                        text: "Du bist ja gut drauf.",
                        type: "continue",
                        reaction: {
                            text: "Eine Kundin hat um eine Minibar gebeten.\n" +
                                "Ich bin schon eine Weile dran.\n" +
                                "Jetzt hat sie auch noch um 'passende Flaschen' gebeten.\n" +
                                "Etwas mit Klasse. Kannst du dich darum kümmern?",
                            answers: [{
                                text: "Nicht mein Bier.",
                                type: "close"
                            }, {
                                text: "Klar, mache ich!",
                                type: "accept"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "karla",
        emotion: "neutral",
        text: "Hey!\nWie kann ich dir helfen?",
        answers: [{
            text: "Hast du vielleicht ein paar stilvolle Flaschen auf Lager?",
            type: "continue",
            reaction: {
                text: "Flaschen?\n" +
                    "Mh, tatsächlich haben wir noch einige braune Apothekerflaschen im Lager, die wir schon länger nicht mehr nutzen.\n" +
                    "Würden die dir helfen?",
                answers: [{
                    text: "Und wie!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "beppo",
        emotion: "neutral",
        text: "Ciao!\nWas kann ich heute für dich tun?",
        answers: [{
            text: "Hast du ein paar schicke Flaschen auf Lager?",
            type: "continue",
            reaction: {
                text: "Flaschen?\n" +
                    "Ich habe einen Haufen leerer Weinflaschen im Vorratskeller.\nMeinst du sowas?",
                answers: [{
                    text: "Ich werde mal nachfragen!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, hast du ein paar gute Flaschen gefunden?",
        answers: [{
            text: "Alte Apothekerflaschen!",
            type: "rightAnswer",
            reaction: {
                text: "Oh wow!\n" +
                    "Die sind tatsächlich sehr cool.\n" +
                    "Gibt dem ganzen so einen Sherlock Holmes Touch!\n" +
                    "Danke für deine Hilfe!",
                answers: [{
                    text: "Aber klar doch!",
                    type: "close"
                }]
            }
        }, {
            text: "Leere Weinflaschen!",
            type: "continue",
            reaction: {
                text: "Mhh, ja...\n" +
                    "Das ist noch nicht das wahre.\n" +
                    "Cool, aber nicht cool genug glaube ich, sorry.",
                answers: [{
                    text: "Macht ja nichts!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank für die Apothekerflaschen!\nDa wird sich meine Kundin freuen.",
        answers: [{
            text: "Immer gern doch!",
            type: "close"
        }],
        others: [{
            person: "maria",
            emotion: "neutral",
            text: "Hey du!\n" +
                "Weißt du was?\nIch habe einen Tischer engagiert, mir eine hippie Minibar zu bauen.\n" +
                "Er hat schon gesagt, sie wird einen coolen Sherlock-Holmes-Lock haben!\n" +
                "Wenn sie fertig ist, wird sie sicher toll!",
            answers: [{
                text: "Ach für dich war die! Klingt gut!",
                type: "close"
            }]
        }]
    }
})