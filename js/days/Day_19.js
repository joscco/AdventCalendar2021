DAYS.push({
    id: "day19",
    quest: {
        person: "ben",
        emotion: "sad",
        text: "Oh, du bist es...",
        answers: [
            {
                text: "Was ist los? Hat dich die Muse verlassen?",
                type: "continue",
                reaction: {
                    text: "Nicht ganz...\n" +
                        "Aber die richtige Richtung.\n" +
                        "Seit Jahren male ich nur auf Leinwand.\n" +
                        "Ich hätte wirklich mal Lust auf ein neues Medium. Etwas Großes.",
                    answers: [{
                        text: "Mh. Vielleicht kann ich helfen!",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "meier",
        emotion: "neutral",
        text: "Na hallo du!\n" +
            "Was gibt es?",
        answers: [{
            text: "Ich suche einen Auftrag für einen Künstlerfreund.",
            type: "continue",
            reaction: {
                text: "Oh einen Bilderwunsch?\n" +
                    "Sowas in der Art?",
                answers: [{
                    text: "Eher etwas großes.",
                    type: "continue",
                    reaction: {
                        text: "Ah oh!\n" +
                            "Nunja...\n" +
                            "Ich habe ja neulich ganz wunderbare Graffitis gesehen, über ganze Häuserwände.\n" +
                            "Wenn dein Freund ein paar Exemplare seiner Arbeit zeigen könnte und es sich anbietet, könnte ich mir gut vorstellen, in eine Verschönerung der Rathauswände zu investieren!",
                        answers: [{
                            text: "Mega! Das klingt toll!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "tom",
        emotion: "happy",
        text: "Hey, na!",
        answers: [{
            text: "Du trägst ja immer noch die Fliegerbrille.",
            type: "continue",
            reaction: {
                text: "Die ist ja auch cool!\n" +
                    "Bist du wieder auf Hilfesuche für einen Freund?\n" +
                    "Du kennst irgendwie das ganze Dorf.\n" +
                    "Ganz schon strange für jemanden, der gerade erst hergezogen ist...",
                answers: [{
                    text: "Ehm... ja... Ein Freund sucht ein Kunstprojekt.",
                    type: "continue",
                    reaction: {
                        text: "Ah, nice!\nWieso macht er keine Tshirts?\nOder Taschen?\nBeides ist selbstgemacht bestimmt nochmal cooler!",
                        answers: [{
                            text: "Ein guter Tipp!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, konntest du ein Projekt für mich finden?",
        answers: [{
            text: "Shirts und Taschen!",
            type: "continue",
            reaction: {
                text: "Pfft...\n" +
                    "Schnöder Kommerzkram...\n" +
                    "Nicht mein Ding.",
                answers: [{
                    text: "Ganz schön arrogant...",
                    type: "close"
                }]
            }
        }, {
            text: "Die Rathauswände!",
            type: "continue",
            reaction: {
                text: "Was?\n" +
                    "Wer hat dir das denn angeboten?",
                answers: [{
                    text: "Der Bürgermeister, wenn ihm deine Arbeiten gefallen!",
                    type: "rightAnswer",
                    reaction: {
                        text: "Wow!\n" +
                            "Das wäre ein fantastisches Projekt!\n" +
                            "Das Rathaus als Objekt und Ausstellungsfläche!\n" +
                            "Ich liebe es!\n" +
                            "Vielen Dank, ich mache mich gleich an ein paar Entwürfe und schicke Herrn Meier mein Portfolio!",
                        answers: [{
                            text: "Großartig!",
                            type: "close"
                        }]
                    }
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "So eine große Chance!\n" +
            "Wie viele Künstler können von sich behaupten, ein ganzes Rathaus dekoriert zu haben?",
        answers: [{
            text: "Sicher nicht viele!",
            type: "close"
        }],
        others: [{
            person: "meier",
            emotion: "neutral",
            text: "Ben's Gemälde sehen fantastisch aus!\nIch freue mich schon auf seine Entwürfe für unser Rathaus!",
            answers: [{
                text: "Yay!",
                type: "close"
            }]
        }]
    }
})