DAYS.push({
    id: "day17",
    quest: {
        person: "will",
        emotion: "sad",
        text: "Mmh...",
        answers: [
            {
                text: "Wieso das traurige Gesicht?",
                type: "continue",
                reaction: {
                    text: "Oh.\n" +
                        "Ich hatte dich gar nicht gesehen.\n" +
                        "Ich habe ein wenig in Erinnerungen geschwelgt...\n" +
                        "Erinnerungen an meinen letzten Trip nach Japan...",
                    answers: [{
                        text: "Und die Zeit vermisst du?",
                        type: "continue",
                        reaction: {
                            text: "Schon...\n" +
                                "Manchmal sehne ich mich doch nach etwas Japan-Feeling...",
                            answers: [{
                                text: "Vielleicht kann ich helfen!",
                                type: "accept"
                            }, {
                                text: "Versteh ich nicht.",
                                type: "close"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "arndt",
        emotion: "neutral",
        text: "Na, was gibt es?",
        answers: [{
            text: "Hey! Sag mal, hast du auch irgendwas Japanisches anzubieten?",
            type: "continue",
            reaction: {
                text: "Japanisch?\n" +
                    "Also ja schon, ein paar Schwarzkiefern könnte ich anbieten.\n" +
                    "Oder warte...\n" +
                    "Wie wäre es mit einem Bonsai?",
                answers: [{
                    text: "Klingt gut!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "sam",
        emotion: "neutral",
        text: "Hey, na!",
        answers: [{
            text: "Hey! Du hast nicht zufällig etwas mit Japan-Feeling abzugeben?",
            type: "continue",
            reaction: {
                text: "Öhh...\n" +
                    "Also tatsächlich habe ich noch ein paar Packungen Instant-Ramen.\n" +
                    "Möchtest du die haben?",
                answers: [{
                    text: "Klar, her damit!",
                    type: "closeHint"
                }, {
                    text: "Urgh, bäh...",
                    type: "close"
                }
                ]
            }
        }]
    }],
    solutionDialog: {
        text: "Mhhh...\nWarst du erfolgreich?",
        answers: [{
            text: "Instant-Nudeln!",
            type: "continue",
            reaction: {
                text: "Uurgh...\n" +
                    "Also das ist tatsächlich etwas, was ich überhaupt nicht vermisse...\n" +
                    "Die waren wirklich eklig.",
                answers: [{
                    text: "Upps.",
                    type: "close"
                }]
            }
        }, {
            text: "Einen Bonsai!",
            type: "rightAnswer",
            reaction: {
                text: "Wie wundervoll!\n" +
                    "So friedvoll! So majestätisch!\n" +
                    "Ich liebe ihn! Danke!",
                answers: [{
                    text: "Sehr gut! Er gehört dir!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank für dieses kleine Stück Japan!",
        answers: [{
            text: "Dank Arndt, nicht mir!",
            type: "close"
        }],
        others: []
    }
})