DAYS.push({
    id: "day23",
    quest: {
        person: "sam",
        emotion: "sad",
        text: "Oh hallo...\n" +
            "Was gibt's, braucht nochmal jemand ne Website?",
        answers: [
            {
                text: "Hey, Sam! Ne, aber du siehst nicht ganz glücklich aus.",
                type: "continue",
                reaction: {
                    text: "Ich?\n" +
                        "Ach das ist nichts.\n" +
                        "Weihnachtszeit eben - da futter ich mir immer unabsichtlich etwas zu viel an.\n" +
                        "Dabei wollte ich diesen Winter abnehmen...",
                    answers: [{
                        text: "Oh hmm. Kann ich dir dabei helfen?",
                        type: "continue",
                        reaction: {
                            text: "Wenn du nicht dafür sorgen kannst, dass jeglicher Süßkram von mir ferngehalten wird, wohl eher nicht.",
                            answers: [{
                                text: "Lass mich trotzdem mal schauen.",
                                type: "accept"
                            }]
                        }
                    }]
                }
            }]
    },
    // ab hier
    hints: [{
        person: "olaf",
        emotion: "neutral",
        text: "Hey!\nWas gibt es?\nKommst du zum Trainieren vorbei?",
        answers: [{
            text: "Jo",
            type: "close"
        }, {
            text: "Vielleicht könntest du einem Freund helfen.",
            type: "continue",
            reaction: {
                text: "So?\n" +
                    "Was hat er denn für ein Problem?",
                answers: [{
                    text: "Er beschwert sich über etwas zu viel Weihnachtsspeck.",
                    type: "continue",
                    reaction: {
                        text: "Na, da kann ich sicher helfen!\n" +
                            "Er kann gerne auch einmal zum Probetraining kommen, wenn er sich nicht direkt im Studio anmelden will.\n" +
                            "Schick ihn mal für ein Training vorbei!",
                        answers: [{
                            text: "Das mache ich!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "maike",
        emotion: "neutral",
        text: "Hey!\n" +
            "Na wie geht es dir?\n" +
            "Was gibt es neues?",
        answers: [{
            text: "Ein Kumpel von mir versucht, ein paar Kilos loszuwerden.",
            type: "continue",
            reaction: {
                text: "Oh!\nGut, dass du mich fragst!\n" +
                    "Warte kurz hier, ich hole etwas.\n" +
                    "...\n" +
                    "...\n" +
                    "Hier!\n" +
                    "Glaub mir, diese Saftkur wirkt WUNDER!\n",
                answers: [{
                    text: "Oh, okay. Danke...",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey, da bist du ja schon wieder!",
        answers: [{
            text: "Lust auf eine Saftkur?",
            type: "continue",
            reaction: {
                text: "...\n" +
                    "...\n" +
                    "Boah ne. Wirklich nicht.",
                answers: [{
                    text: "Haha, okay.",
                    type: "close"
                }]
            }
        }, {
            text: "Lust auf ein Probetraining?",
            type: "continue",
            reaction: {
                text: "Hmm...\n" +
                    "Mich mehr zu bewegen wäre sicher auch anderweitig nicht schlecht.\n" +
                    "Im Studio hier?",
                answers: [{
                    text: "Ja genau, ich kenne dort wen. ",
                    type: "continue",
                    reaction: {
                        text: "Na gut, wieso nicht.",
                        answers: [{
                            text: "Dann los!",
                            type: "rightAnswer",
                            reaction: {
                                text: "Wow, das hat wirklich Spaß gemacht!\n" +
                                    "Ich glaube, ich werde mich im Studio anmelden.\n" +
                                    "Danke dir für den Vorschlag!\n" +
                                    "So werde ich die Kilos sicher schnell los.",
                                answers: [{
                                    text: "Sehr gut!",
                                    type: "close"
                                }]
                            }
                        }]
                    }
                }]
            }
        }]

    },
    onFinishedDialogues: {
        text: "Eine gute Idee mit dem Studio!",
        answers: [{
            text: "Freut mich!",
            type: "close"
        }],
        others: [{
            person: "arndt",
            emotion: "neutral",
            text: "Sam geht jetzt ins Fitnessstudio?\nKlug und trainiert bald also...?\nMmhhh...",
            answers: [{
                text: "Okay... ich lasse euch mal allein.",
                type: "close"
            }]
        }]
    }
})