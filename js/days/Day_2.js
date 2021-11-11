DAYS.push({
    id: "day2",
    quest: {
        person: "jo",
        emotion: "sad",
        text: "Mein Bart...\n" +
            "So viele Haare, was soll ich nur tun...",
        answers: [
            {
                text: "Ehm hallo. Alles gut?",
                type: "continue",
                reaction: {
                    text: "Oh!\n" +
                        "Verzeih... \n" +
                        "Ich hatte dich gar nicht gesehen.\n" +
                        "Mein Name ist Jo, ich bin der Barbier in dieser Stadt.\n" +
                        "Und langsam wird mir mein eigener Bart zu lang, ich weiß aber nicht was ich tun soll...",
                    answers: [{
                        text: "... Abrasieren?",
                        type: "continue",
                        reaction: {
                            text: "Wenn es doch nur so einfach wäre!\n" +
                                "Ich bin doch der Barbier der Stadt.\n" +
                                "Damit schneide ich genau den Männern den Bart, die sich nicht selbst rasieren...\n" +
                                "Also kann ich nicht selbst einer dieser Männer sein...\n" +
                                "Es ist VERHEXT!",
                            answers: [{
                                text: "Okay, wow. Ich gucke, was sich machen lässt...",
                                type: "accept"
                            }]
                        }
                    }, {
                        text: "Ich verschwinde.",
                        type: "continue",
                    }]
                }
            }]
    },
    hints: [{
        person: "ali",
        emotion: "neutral",
        text: "Hey du! Was darf's sein?",
        answers: [{
            text: "Ein Döner ohne Zwiebeln bitte!",
            type: "continue",
            reaction: {
                text: "Kommt sofort!\n" +
                    "...\n" +
                    "...\n" +
                    "...\n" +
                    "So! 4,50 Euro dann bitte.",
                answers: [{
                    text: "Vielen Dank!",
                    type: "close"
                }]
            }
        }, {
            text: "Dein Messer.",
            type: "continue",
            reaction: {
                text: "...\n"
                    + "...\n"
                    + "Bitte was?",
                emotion: "sad",
                answers: [{
                    text: "Ich muss einen Freund rasieren.",
                    type: "continue",
                    reaction: {
                        text: "...\n"
                            + "...\n"
                            + "...\n"
                            + "...\n"
                            + "Na gut.",
                        emotion: "sad",
                        answers: [{
                            text: "Bin gleich wieder damit zurück!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }
        ]
    }, {
        person: "björn",
        emotion: "neutral",
        text: "Guten Tag, Björn Süßnack ist mein Name. Wie kann ich behilflich sein?",
        answers: [{
            text: "Hey! Mein Freund Jo hat ein Problem.",
            type: "continue",
            reaction: {
                text: "Jo?\n" +
                    "Der Barbier?\n" +
                    "Oh, was hat er denn?",
                answers: [{
                    text: "Ein Paradoxon-Problem",
                    type: "continue",
                    reaction: {
                        text: "Ahh... lass mich raten - das alte Barbier-Paradoxon.\n" +
                            "Warte kurz, ich schreibe kurz etwas auf und gebe es dir mir\n" +
                            "... kritzel ...\n" +
                            "... kritzel ...\n" +
                            "Hier. Das sollte ihm helfen.",
                        answers: [{
                            text: "Vielen Dank!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Mein Bart... So viele Haare...\n" + "Kannst du mir helfen?",
        answers: [{
            text: "Hier, lies!",
            type: "continue",
            reaction: {
                text: "Mh? ...\n" +
                    '"Im Fall Barber/Meinoff wurde 1994 entschieden, dass der Ehrencodex der Barbiere zum folgenden "' +
                    "...\n" +
                    "Unterschrieben von Björn Süßnack.\n" +
                    "Oh gott...\n" +
                    "...schnief ...",
                answers: [{
                    text: "... Weinst du?",
                    type: "continue",
                    reaction: {
                        text: "Ja ...\n" +
                            "Vor Freude! Mein Leiden hat endlich ein Ende!\n" +
                            "Ich darf mich von nun an selbst um meinen Bart kümmern!\n" +
                            "Ich fange gleich damit an!",
                        answers: [{
                            text: "... Weinst du?",
                            type: "continue",
                            reaction: {
                                text: "Ja ...\n" +
                                    "Vor Freude! Mein Leiden hat endlich ein Ende!\n" +
                                    "Ich darf mich von nun an selbst um meinen Bart kümmern!\n" +
                                    "Ich fange gleich damit an!",
                                answers: [{
                                    text: "Gute Idee!",
                                    type: "rightAnswer",
                                    reaction: {
                                        text: "Ahhhhh...\n" + "Ich danke dir!",
                                        answers: [{
                                            text: "Gern geschehen!",
                                            type: "close"
                                        }]
                                    }

                                }]
                            }
                        }]
                    }
                }]
            }
        }, {
            text: "Ich kann dich rasieren!",
            type: "continue",
            reaction: {
                text: "Nein...\n" +
                    "Du verstehst das Problem nicht richtig.\n" +
                    "Wenn du mich rasierst, rasiere ich mich nicht selber.\n" +
                    "Und damit müsste ich mich als Babier ebenfalls selbst rasieren...\n" +
                    "... es ist ein Teufelskrass",
                answers: [{
                    text: "Oh...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Endlich hat mein Kinn wieder Luft!",
        answers: [{
            text: "Das freut mich!",
            type: "close"
        }],
        others: [{
            person: "björn",
            emotion: "neutral",
            text: "Ob mein Schreiben echt war? Nein, ganz sicher nicht.\n"+
                "Aber Jo's Barbiercodex war auch an den Haaren herbei gezogen.",
            answers: [{
                text: "Hehehe",
                type: "close"
            }]
        }]
    }
})