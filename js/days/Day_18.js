DAYS.push({
    id: "day18",
    quest: {
        person: "tom",
        emotion: "sad",
        text: "Seufz...",
        answers: [{
            text: "Hey Tom! Wieso das traurige Gesicht?",
            type: "continue",
            reaction: {
                // Ab hier
                text: "Mhh... mein Schlitten...\n" +
                    "Die anderen Kinder haben alle coole neue Schlitten.\n" +
                    "Ich habe nur den alten von meinem Opa.\n" +
                    "Pascal hat schon gesagt, der sei voll langweilig...",
                answers: [{
                    text: "Das ist aber nicht nett von Pascal.",
                    type: "continue",
                    reaction: {
                        text: "Ne...",
                        answers: [{
                            text: "Warte mal hier, vielleicht kann ich helfen!",
                            type: "accept"
                        }]
                    }
                }]
            }
        }]
    },
    hints: [{
        person: "martin",
        emotion: "neutral",
        text: "Hey! Bist du wieder in fremder Mission unterwegs?",
        answers: [{
            text: "Ein Kind sucht etwas, um seinen Schlitten cooler zu machen.",
            type: "continue",
            reaction: {
                text: "Mh, schwierig...\n" +
                    "Also für den Schlitten habe ich nicht direkt etwas.\n" +
                    "Aber wie wäre es mit dieser Fliegerbrille?\n" +
                    "Die habe ich mir mal gekauft und kann sie sowieso nicht nutzen.",
                answers: [{
                    text: "Perfekt!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "fred",
        emotion: "neutral",
        text: "Hey du!\nWas kann ich für dich tun?",
        answers: [{
            text: "Ein Freund sucht eine Möglichkeit, um seinen Schlitten aufzumotzen. Ideen?",
            type: "continue",
            reaction: {
                text: "Joa, ich weiß nicht...\n" +
                    "Neue Felgen?\n" +
                    "Getönte Scheiben?",
                answers: [{
                    text: "Achso ne. Einen richtigen Schlitten meinte ich.",
                    type: "continue",
                    reaction: {
                        text: "Oh.\nNaja, dann eine neue Lackierung vielleicht?\nEr könnte ihn ja bemalen!",
                        answers: [{
                            text: "Ein guter Vorschlag! Gebe ich weiter.",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, kannst du mir helfen?",
        answers: [{
            text: "Eine Fliegerbrille!",
            type: "rightAnswer",
            reaction: {
                text: "Wow!\n" +
                    "Die ist ja cool!\n" +
                    "Vielen Dank!\n" +
                    "Pascal wird sein Lachen vergehen!",
                answers: [{
                    text: "Sehr gut!",
                    type: "close"
                }]
            }
        }, {
            text: "Ein neuer Anstrich!",
            type: "continue",
            reaction: {
                text: "Mhh...\n" +
                    "Wir haben tatsächlich noch etwas Lack in der Garage.\n" +
                    "Aber der Schlitten ist halt schon knallrot.\n" +
                    "Das geht nicht viel besser.",
                answers: [{
                    text: "Mhh...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Pascal wird vor mir erzittern!\nUnd um Gnade winseln!\nMuhahaha!",
        answers: [{
            text: "Definitiv ein Gedanke, den man bei Kindern unterstützen sollte!",
            type: "close"
        }],
        others: []
    }
})