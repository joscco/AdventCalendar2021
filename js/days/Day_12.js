DAYS.push({
    id: "day12",
    quest: {
        person: "martin",
        emotion: "sad",
        text: "Oh, du bist es...",
        answers: [
            {
                text: "Wow, du bist ja gut drauf... Was ist los?",
                type: "continue",
                reaction: {
                    text: "Mh...\n" +
                        "Musst du nicht verstehen...\n" +
                        "Und ist mir auch ein bisschen peinlich...",
                    answers: [{
                        text: "Komm schon, Reden hilft.",
                        type: "continue",
                        reaction: {
                            text: "Na gut...\n" +
                                "Also ich gucke mir immer wieder diese Videos an, übers Fallschirmspringen.\n" +
                                "Und es sieht so toll aus, dieser blaue Himmel, die Aussicht.\n" +
                                "Alles so frei!\n" +
                                "Aber ich habe einfach zu viel Angst...",
                            answers: [{
                                text: "... oh.",
                                type: "continue",
                                reaction: {
                                    text: "Ich weiß...\n" +
                                        "Da sollte man eigentlich nicht traurig sein.\n" +
                                        "Aber ich würde diese Erfahrung so gerne einmal machen...",
                                    answers: [{
                                        text: "Ein ungewöhnliches Problem. Aber lass mich mal machen!",
                                        type: "accept"
                                    }]
                                }
                            }]
                        }
                    }, {
                        text: "Dann halt nicht.",
                        type: "close"
                    }]
                }
            }]
    },
    hints: [{
        person: "sven",
        emotion: "neutral",
        text: "Nanu, du schon wieder?\n" +
            "Und, was kann ich heute für dich tun?",
        answers: [{
            text: "Ein Freund würde gern Fallschirmspringen versuchen, traut sich aber nicht.",
            type: "continue",
            reaction: {
                text: "... Okay. Mh...\n" +
                    "Warte mal kurz...\n" +
                    "...\n" +
                    "...\n" +
                    "Hier! Ein Schnitzmesser.\n" +
                    "Wenn er schon nicht selber springen will, vielleicht kann er sich ein paar Fallschirmspringer schnitzen.",
                answers: [{
                    text: "Das klingt richtig gut!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "arndt",
        emotion: "neutral",
        text: "Hey du!\n" +
            "Danke nochmal für gestern.\n" +
            "Sam ist schon fleißig an der Website dran!",
        answers: [{
            text: "Kein Problem! Heute kannst du mir vielleicht helfen.",
            type: "continue",
            reaction: {
                text: "Oh klar, kann ich versuchen.\n" +
                    "Was gibt es denn?",
                answers: [{
                    text: "Ein Freund von mir hat Angst vorm Fallschirmspringen, würde so gern aber mal.",
                    type: "continue",
                    reaction: {
                        text: "Mh.\n" +
                            "Also ich kenne eine gute Boulderhalle in der Nähe!\n" +
                            "Dort kann er versuchen, mit der Höhe klarzukommen.\n" +
                            "Soll ich dir die Adresse mal aufschreiben?",
                        answers: [{
                            text: "Klar, eine gute Idee!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, hattest du eine Eingebung?",
        answers: [{
            text: "Kleine Fallschirmspringer!",
            type: "continue",
            reaction: {
                text: "Hm wie meinst du?",
                answers: [{
                    text: "Hier ein Schnitzset! Lass Holzmännchen für dich springen!",
                    type: "rightAnswer",
                    reaction: {
                        text: "Wow, was für eine coole Idee!\nMeine eigene, kleine Fallschirmspringer-Armee!\nAlle so weit oben, alle so frei!\nDanke!",
                        answers: [{
                            text: "Gerne doch!",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Übe Bouldern!",
            type: "continue",
            reaction: {
                text: "Mh, gegen die Höhenangst meinst du?\n" +
                    "Das habe ich leider schon versucht, hat nicht funktioniert.\n" +
                    "Meine Höhenangst kriege ich nicht wegtrainiert...",
                answers: [{
                    text: "Oh schade...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Danke für das Schnitzset!\n" +
            "Ist zwar nicht das gleiche, aber ein tolles neues Hobby!",
        answers: [{
            text: "Hab ich gern gemacht!",
            type: "close"
        }],
        others: [{
            person: "sven",
            emotion: "neutral",
            text: "Und wie kam das Schnitzmesser an?",
            answers: [{
                text: "Toll! Mein Kumpel hat wirklich Spaß daran!",
                type: "continue",
                reaction: {
                    text: "Voll gut!\n" +
                        "So muss das!",
                    answers: [{
                        text: "Yeah!",
                        type: "close"
                    }]
                }
            }]
        }]
    }
})