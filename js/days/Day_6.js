DAYS.push({
    id: "day6",
    quest: {
        person: "bernd",
        emotion: "sad",
        text: "Mhhm...\nMMMmmmm...\nMmh.",
        answers: [
            {
                text: "Hallo Bernd.",
                type: "continue",
                reaction: {
                    text: "Mmmhm...\n" +
                        "MMMMmm.\n" +
                        "Mmmh?\n" +
                        "Mmmmh...",
                    answers: [{
                        text: "Ich schaue, was ich tun kann!",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "bernadette",
        emotion: "neutral",
        text: "Na hallo!\n" +
            "Willkommen in meinem Modeparadies!\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Ein Freund hat ein Problem.",
            type: "continue",
            reaction: {
                text: "Oh, ein Problem?\n" +
                    "Und was für eins?",
                answers: [{
                    text: "Naja, er kann es nicht genau formulieren.",
                    type: "continue",
                    reaction: {
                        text: "Nun, ich kenne kein Problem, das sich nicht mit schönen Aufnähern lösen ließe.\n" +
                            "Hier versuch es mal mit dem hier.\n" +
                            "Der ist für Härtefälle.",
                        answers: [{
                            text: "In Ordnung, ich versuche es!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {

        person: "martin",
        emotion: "neutral",
        text: "Jo, ich bin Martin.\n" +
            "Was gibt's?",
        answers: [{
            text: "Ein Freund von mir hat ein Problem.",
            type: "continue",
            reaction: {
                // Ab hier
                text: "Oh.\n" +
                    "Also wenn ich ein Problem habe, mache ich mir erstmal einen Kaffee.\n" +
                    "Dann denke ich in Ruhe darüber nach.",
                answers: [{
                    text: "Mhh.",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Mhhh...\nMh?",
        answers: [{
            text: "Hier ein Aufnäher!",
            type: "continue",
            reaction: {
                text: "MH!...\n" +
                    "...\n" +
                    "Mmmhhhh...\n" +
                    "Mhhh!",
                answers: [{
                    text: "Gefällt er dir?",
                    type: "rightAnswer",
                    reaction: {
                        text: "MMMMMMM!",
                        answers: [{
                            text: "Sehr schön. Das freut mich.",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Willst du einen Kaffee?",
            type: "continue",
            reaction: {
                text: "Mmh...\n" +
                    "...\n" +
                    "Mh-mh...\n",
                answers: [{
                    text: "Na gut, schade...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Mhmmmmmm.",
        answers: [{
            text: "Ganz meine Meinung. Steht dir super, Bernd!",
            type: "close"
        }],
        others: [{
            person: "bernadette",
            emotion: "neutral",
            text: "Und?\nWie ist der Aufnäher angekommen?",
            answers: [{
                text: "Super!",
                type: "continue",
                reaction: {
                    text: "Hehe...\n" +
                        "Wenig gibt es, das Einhorn-Aufnäher nicht retten können.",
                    answers: [{
                        text: "Absolut, nichts!",
                        type: "close",
                    }]
                }
            }]
        }]
    }
})