DAYS.push({
    id: "day21",
    quest: {
        person: "maike",
        emotion: "sad",
        text: "Hey... Kenn ich dich? \n" +
            "Tut mir leid, ich bin heute leider nicht ganz bei mir...\n" +
            "So viel zu viel zu tun...",
        answers: [
            {
                text: "Oh okay.",
                type: "continue",
                reaction: {
                    text: "Kinder...\n" +
                        "Aufpassen, versorgen, kein Schlaf...\n" +
                        "So müde...\n" +
                        "Urgh...",
                    answers: [{
                        text: "Oh mann. Kann man dir helfen?",
                        type: "continue",
                        reaction: {
                            text: "Ich... ich...\n" +
                                "Ich könnte eine Stütze brauchen...",
                            answers: [{
                                text: "Ich werde sehen, was sich machen lässt!",
                                type: "accept"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "armin",
        emotion: "neutral",
        text: "Na hallo!\n" +
            "Du bist ein bisschen zu früh dran, das Essen ist erst in drei Tagen.\n" +
            "Oder bist du wegen etwas anderem hier?",
        answers: [{
            text: "Eine Freundin hat gerade sehr viel Stress mit Haushalt und Kindern.",
            type: "continue",
            reaction: {
                text: "Oh, das tut mir leid.\n" +
                    "Ich kann mir vorstellen, dass so etwas viel Arbeit ist.\n" +
                    "Vielleicht braucht sie einfach eine Pause?\n" +
                    "Ich habe noch ein Nackenkissen für lange Flüge.\n" +
                    "Hier, gib es ihr. Auch für kurze Sitzpausen ist das sehr nützlich.",
                answers: [{
                    text: "Danke dir!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "gundula",
        emotion: "neutral",
        text: "Oh hallo!\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Eine Freundin hat viel Stress mit ihren Kindern.",
            type: "continue",
            reaction: {
                text: "Tjaja...\n" +
                    "Eine Familie ist Arbeit!\n" +
                    "Eine Familie ist ein großes Projekt!\n" +
                    "Ich kenne ein paar Mittelchen gegen Erschöpfungserscheinungen.",
                // ab hier
                answers: [{
                    text: "Und welche?",
                    type: "continue",
                    reaction: {
                        text: "Hier ist ein Rezept für einen speziellen Beruhigungstee.\n" +
                            "Gib es ihr, danach wird sie sich wie neu fühlen!",
                        answers: [{
                            text: "Mache ich!",
                            type: "closeHint"
                        }]
                    }
                }, {
                    text: "Kein Interesse.",
                    type: "close"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey... Irgendwas gefunden?\n",
        answers: [{
            text: "Eine Nackenkissen!",
            type: "rightAnswer",
            reaction: {
                text: "Oh ja...\n" +
                    "...\n" +
                    "...das tut gut.\n" +
                    "Danke dir...",
                answers: [{
                    text: "So ist vielleicht etwas einfacher.",
                    type: "close"
                }]
            }
        }, {
            text: "Ein Teerezept!",
            type: "continue",
            reaction: {
                text: "Mh...\n" +
                    "Danke...\n" +
                    "Aber ich habe keine Zeit für Tee.\n" +
                    "Weder fürs Brauen noch fürs Trinken.\n",
                answers: [{
                    text: "Verstehe ich.",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "So angenehm...",
        answers: [{
            text: "Sehr gut!",
            type: "close"
        }],
        others: []
    }
})