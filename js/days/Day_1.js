DAYS.push({
    id: "day1",
    quest: {
        person: "meier",
        emotion: "sad",
        text: "Oh Hallo! Wer bist du denn? \nNeu in der Stadt?",
        answers: [
            {
                text: "Ja bin ich! Vor kurzem hergezogen.",
                type: "continue",
                reaction: {
                    text: "Oh wunderbar! \n" +
                        "Nun, mein Name ist Meier. \n" +
                        "Ich freue mich, dich kennen zu lernen! \n" +
                        "Traurig bin ich aber trotzdem noch...",
                    answers: [{
                        text: "Das tut mir leid. Kann ich etwas tun?",
                        type: "continue",
                        reaction: {
                            text: "Mhh... \n" +
                                "Ich suche schon länger etwas, das mir als Bürgermeister den nötigen Respekt einbringt.\n" +
                                "Du musst wissen, mit meiner Körpergröße habe ich es etwas schwer...",
                            answers: [{
                                text: "Gott, nerv nicht.",
                                type: "close"
                            }, {
                                text: "Ich schaue mal!",
                                type: "accept"
                            }]
                        }
                    }]
                }
            }]
    },
    hints: [{
        hintNumber: 0,
        person: "beppo",
        emotion: "neutral",
        text: "Willkommen in meiner Pizzeria, mein Guter!\n" +
            "Mein Name ist Beppo, wie kann ich helfen?",
        answers: [{
            text: "Ich suche ein imposantes Accessoire!",
            type: "continue",
            reaction: {
                text: "Oh wirklich?\n" +
                    "Nun, tatsächlich hätte ich noch einen alten großen Zylinder.\n" +
                    "Irgendwo fliegt er herum, wie wäre es damit?",
                answers: [{
                    text: "Nehme ich!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        hintNumber: 1,
        person: "sven",
        emotion: "neutral",
        text: "Jo, Sven bin ich. Was geht?",
        answers: [{
            text: "Ich suche etwas, dass einem Freund Respekt einbringt.",
            type: "continue",
            reaction: {
                text: "Respekt? Naja...\n" +
                    "Hier fliegt noch ne alte Kettensäge 'rum.\n" +
                    "Respekt würde ihm das sicherlich einbringen.",
                answers: [{
                    text: "(schluck)",
                    type: "continue",
                    reaction: {
                        text: "Mein Gott, guck nicht so. Das war ein Scherz.",
                        emotion: "sad",
                        answers: [{
                            text: "haha...",
                            type: "closeHint"
                        }]
                    }
                }, {
                    text: "Haha, schlag ich vor!",
                    type: "closeHint"
                }
                ]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, hast du etwas gefunden?",
        answers: [{
            text: "Eine Kettensäge!",
            type: "continue",
            reaction: {
                text: "...\n" +
                    "...\n" +
                    "...\n" +
                    "Du bist mir ja ein Witzbold.",
                answers: [{
                    text: "Lol.",
                    type: "close"
                }]
            }
        }, {
            text: "Einen Zylinder!",
            type: "rightAnswer",
            reaction: {
                text: "UHHHHHH! Der ist ja fesch!\n" +
                    "Wie sieht er aus?\n" +
                    "Wirke ich majestätisch? Königlich?\n" +
                    "Ich liebe ihn! Danke!\n",
                answers: [{
                    text: "Gern geschehen!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Ich danke dir vielmals!",
        answers: [{
            text: "Immer gern doch!",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "Hey du! Hast du den tollen neuen Zylinder von Herrn Meier schon gesehn?\n" +
                "Steht ihm ausgezeichnet, nicht wahr?",
            answers: [{
                text: "Das tut er wirklich!",
                type: "close"
            }]
        }]
    }
})