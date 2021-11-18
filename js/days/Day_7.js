DAYS.push({
    id: "day7",
    quest: {
        person: "olaf",
        emotion: "sad",
        text: "Hi.\nIch bin Olaf, willkommen im Gym-Club.\nWie kann ich dir helfen?",
        answers: [
            {
                text: "Wieso so ein genervtes Gesicht?",
                type: "continue",
                reaction: {
                    text: "Oh, ich...\n" +
                        "Tut mir leid.\n" +
                        "Mir fehlt nur gerade die Motivation hier.\n" +
                        "Das Trainerdasein ist ein bisschen eintönig momentan...",
                    answers: [{
                        text: "Wie blöd... Was würde dir helfen?",
                        type: "continue",
                        reaction: {
                            text: "Naja... \n" +
                                "Etwas neues, was ich ins Training mit den Kunden integrieren könnte, wäre toll.",
                            answers: [{
                                text: "Ich finde sicher was!",
                                type: "accept"
                            }, {
                                text: "Pfft. Dein Job.",
                                type: "close"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "tom",
        emotion: "neutral",
        text: "Hallo!\nDu bist neu hier eingezogen, oder?\nWir haben dich letztens beim Bäcker gesehn.\nIch bin Tom!\n",
        answers: [{
            text: "Hallo Tom!",
            type: "continue",
            reaction: {
                text: "Und?\n" +
                    "Was machst du so?",
                answers: [{
                    text: "Einem Freund ist auf der Arbeit langweilig. Hast du eine Idee, wie man ihm helfen könnte?",
                    type: "continue",
                    reaction: {
                        text: "Langweilig?\n" +
                            "Wenn mir langweilig ist, spiele ich mit meinen Spielzeugen.\n" +
                            "Du kannst meine Trillerpfeife haben, wenn ich dafür Kaugummi-Geld kriege.",
                        answers: [{
                            text: "Eine fairer Deal.",
                            type: "closeHint"
                        }, {
                            text: "No Deal.",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Kinder sind nicht so mein Fall...",
            type: "close"
        }]
    }, {
        person: "bernd",
        emotion: "neutral",
        text: "MMMmhhh?\nMmmh!\nMMmhh.",
        answers: [{
            text: "Olaf ist im Fitnessstudio langweilig. Er sucht eine neue Trainingsidee. Hast du was?",
            type: "continue",
            reaction: {
                text: "Mhhhhm!\n" +
                    "Mhmmhmmhm mmhm - mh - mh - mh!\n" +
                    "Mhmmhm mmmh mhhh.",
                answers: [{
                    text: "Holzhacken als Training? Klar!",
                    type: "closeHint"
                }, {
                    text: "SPRICH. DEUTLICH.",
                    type: "continue",
                    reaction: {
                        text: "MMH?!...\n" +
                            "...\n" +
                            "...\n" +
                            "Mmmmhhh...",
                        emotion: "sad",
                        answers: [{
                            text: "Tut mir leid. Das hätte ich nicht sagen dürfen.",
                            type: "close"
                        }]
                    }
                }
                ]
            }
        }]
    }],
    solutionDialog: {
        text: "Konntest du Ideen aufschnappen!",
        answers: [{
            text: "Lass die Leute Holz hacken!",
            type: "continue",
            reaction: {
                text: "Mh. Also das wäre an sich eine gute Idee.\n" +
                    "Ich glaube aber nicht, dass wir es versicherungstechnisch durch kriegen, Leute im Studio mit einer Axt hantieren zu lassen.\n" +
                    "Aber danke für deine Mühe...",
                answers: [{
                    text: "Stimmt wahrscheinlich...",
                    type: "close"
                }]
            }
        }, {
            text: "Eine Trillerpfeife!",
            type: "rightAnswer",
            reaction: {
                text: "Wow! Eine tolle Idee!\nDamit kann ich den Leuten richtig Dampf machen!\nCooler Einfall, die werde ich von jetzt an benutzen.\nDanke dir!",
                answers: [{
                    text: "Gerne!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Den Kunden scheint mein Trillern zwar auf die Nerven zu gehen, aber ich finde es super!\nVielen Dank!",
        answers: [{
            text: "Sehr gut!",
            type: "close"
        }],
        others: [{
            person: "maike",
            emotion: "sad",
            text: "Gott.\nStändig dieses Trillern.\nIch will doch beim Sport nur meine Ruhe haben...",
            answers: [{
                text: "Upps...",
                type: "close"
            }]
        }]
    }
})