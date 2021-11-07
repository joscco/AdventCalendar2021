DAYS.push({
    id: "day2",
    quest: {
        person: "maike",
        emotion: "sad",
        text: "Hey... Kenn ich dich? \nTut mir leid, ich bin heute leider nicht ganz bei mir\nViel zu viel zu tun",
        answers: [
            {
                text: "Oh okay.",
                type: "continue",
                reaction: {
                    text: "Kinder. So viel zu tun...\n" +
                        "So müde...\n" +
                        "Kann mich kaum halten...",
                    answers: [{
                        text: "Oh mann. Kann man dir helfen?",
                        type: "continue",
                        reaction: {
                            text: "Ich... ich...\n" +
                                "Ich brauche etwas, das mir die Last abnimmt.",
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
        hintNumber: 0,
        person: "bernadette",
        emotion: "neutral",
        text: "Willkommen in meinem Modeparadies!\n" +
            "Mein Name ist Bernadette, wie kann ich helfen?",
        answers: [{
            text: "Ich suche ein imposantes Accessoire!",
            type: "continue",
            reaction: {
                text: "Oh wirklich?\n" +
                    "Nun, tatsächlich hätte ich hier noch einen schönen großen Zylinder.\n" +
                    "Wie wäre es damit?",
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