DAYS.push({
    id: "day16",
    quest: {
        person: "armin",
        emotion: "sad",
        text: "Na hallo...\nWer bist du denn?",
        answers: [{
                text: "Ich bin neu in der Stadt...",
                type: "continue",
                reaction: {
                    text: "Oh, hallo dann noch einmal...\n" +
                        "Armin ist mein Name.\n",
                    answers: [{
                        text: "Freut mich. Und wieso so traurig?",
                        type: "continue",
                        reaction: {
                            text: "Ach weißt du, ich habe so viel Platz hier in meinem Haus...\n" +
                                "Und gerade zur Weihnachtszeit, da frage ich mich, ob es nicht schön wäre, hier mal eine große Feier zu machen...\n" +
                                "Mit allen Leuten aus der Umgebung, verstehst du?\n" +
                                "Ein großes, gemeinsames Fest!",
                            answers: [{
                                text: "Das klingt super! Wieso tust du es nicht?",
                                type: "continue",
                                reaction: {
                                    text: "Naja, ich bin zwar vielleicht ein charmanter Gastgeber...\n" +
                                        "Aber kochen kann ich nicht...\n" +
                                        "Und Köche kenne leider auch keine hier.",
                                    answers: [{
                                        text: "Vielleicht kann ich helfen!",
                                        type: "accept"
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "maria",
        emotion: "neutral",
        text: "Hey!\nDu schon wieder!\nWas kann ich für dich tun.",
        answers: [{
            text: "Ein Freund braucht eine Köchin!",
            type: "continue",
            reaction: {
                text: "Na dann Glückwunsch!\n" +
                    "Hier steht eine ausgebildete Köchin vor dir!\n" +
                    "Von wie vielen Gästen sprechen wir denn hier?",
                answers: [{
                    text: "Das weiß nicht genau... die ganze Umgebung, also so 100?",
                    type: "continue",
                    reaction: {
                        text: "Wow!\n" +
                            "Okay, ganz schön viele...\n" +
                            "Aber das kriege ich schon hin!",
                        emotion: "sad",
                        answers: [{
                            text: "Fantastisch!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "olaf",
        emotion: "neutral",
        text: "Na, wie gehts dir? Was gibt es?",
        answers: [{
            text: "Ein Freund sucht einen Koch!",
            type: "continue",
            reaction: {
                text: "Oh...\nNaja...\nAlso ich schmiere wirklich erstklassige Brötchen!",
                answers: [{
                    text: "Yum! Das leite ich weiter!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey...\nHast du einen Koch gefunden!",
        answers: [{
            text: "Eine Köchin!",
            type: "rightAnswer",
            reaction: {
                text: "Na klasse!\n" +
                    "Maria also?\n" +
                    "Ich werde ihr schreiben.\n" +
                    "Dann kann die Party ja bald steigen!",
                answers: [{
                    text: "Sehr gut!",
                    type: "close"
                }]
            }
        }, {
            text: "Einen Brötchenschmierer!",
            type: "continue",
            reaction: {
                text: "Mh, ja. Das würde im Notfall sicher gehen...\n" +
                    "Ich hätte aber gern etwas mit mehr... Klasse.",
                answers: [{
                    text: "Nun gut, verstehe ich.",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank für deine Hilfe!\n" +
            "Maria wird das Kochen übernehmen.\n" +
            "Und ich kann mich an die Planung machen!",
        answers: [{
            text: "Ich freu mich!",
            type: "close"
        }],
        others: [{
            person: "maria",
            emotion: "neutral",
            text: "100 Leute...\n" +
                "Das werden ganz schön viele.\n" +
                "Aber hey, es ist nicht das erste Mal, dass ich so eine große Menge bekoche.",
            answers: [{
                text: "Du schaffst das!",
                type: "close"
            }]
        }]
    }
})