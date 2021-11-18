DAYS.push({
    id: "day20",
    quest: {
        person: "mario",
        emotion: "sad",
        text: "Hallo...\n" +
            "Was darf es sein...",
        answers: [
            {
                text: "Ein etwas freundlicheres Gesicht vielleicht?",
                type: "continue",
                reaction: {
                    text: "Verzeihung...\n" +
                        "Ich bin es nur leid, immer die gleichen Plätzchen zuzubereiten.\n" +
                        "Seit 10 Jahren schon das gleiche.\n" +
                        "Ich möchte etwas neues anbieten, etwas exotischeres!",
                    answers: [{
                        text: "Mh, aber es gibt doch so viele Plätzchenrezepte?",
                        type: "continue",
                        reaction: {
                            text: "Sicherlich. Aber auch die kennen die Leute halt von irgendwo.\n" +
                                "Ich möchte etwas, was die älteren wie jungen Leute mögen und trotzdem noch nicht so gut kennen.",
                            answers: [{
                                text: "Dann google halt.",
                                type: "close"
                            }, {
                                text: "Ich finde etwas!",
                                type: "accept"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "ali",
        emotion: "neutral",
        text: "Heyho!\nEin Döner wie immer?",
        answers: [{
            text: "Heute bin ich eher an Rezepten interessiert!",
            type: "continue",
            reaction: {
                text: "Rezepte?\n" +
                    "Für was denn?\n" +
                    "Meine Geheimsoße bleibt geheim!",
                answers: [{
                    text: "Nein nein. Kennst du auch Gebäckrezepte?",
                    type: "continue",
                    reaction: {
                        text: "Aber klar!\n" +
                            "Mein Dede hat immer die besten Baklava gemacht!\n" +
                            "Die waren mir nur immer zu aufwendig zum selbermachen.\n" +
                            "Ich würde sie echt gern nochmal essen.\n" +
                            "Soll ich dir das Rezept geben?",
                        answers: [{
                            text: "Klar, her damit!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "joseph",
        emotion: "neutral",
        text: "Hey!\n" +
            "Was geht ab?",
        answers: [{
            text: "Ich bin auf der Suche nach exklusiven Keksrezepten!",
            type: "continue",
            reaction: {
                text: "Exklusiv sagst du?\n" +
                    "Naja wie wäre es mal mit Keksen, die nicht allein für Menschen sind?\n" +
                    "Hundekekse für Mensch und Tier!\n" +
                    "Ich habe da ein tolles Rezept! Hat sicher noch Luft nach oben, aber schmeckt echt gut.",
                answers: [{
                    text: "Super! Zeig mal her!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, konntest du neue Rezepte beschaffen?",
        answers: [{
            text: "Kekse für Mensch und Hund!",
            type: "continue",
            reaction: {
                text: "Oh, ein interessanter Gedanke!\n" +
                    "Würde ich gern mal ausprobieren.\n" +
                    "Aber das schränkt schon ein wenig meine Möglichkeiten ein.\n" +
                    "Und sie sollen eben jedem schmecken!\n" +
                    "Von daher: Eher nein, tut mir leid.",
                answers: [{
                    text: "Nun gut.",
                    type: "close"
                }]
            }
        }, {
            text: "Baklava!",
            type: "rightAnswer",
            reaction: {
                text: "Ohhh! Etwas orientalisches!\n" +
                    "Wunderbar! Süß, kletschig, ein interessantes Kaugefühl!\n" +
                    "Und Absatz finden sie sicherlich ohne Probleme!\n" +
                    "Die nehme ich, eine tolle Idee, danke!\n",
                answers: [{
                    text: "Gern geschehen!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Die Baklava gehen weg wie warme süße Semmel!",
        answers: [{
            text: "Sehr gut!",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "Mmmhhh, die neuen Kekse bei Mario schmecken köstlich!\n" +
                "Balkawa glaube ich...\n" +
                "Wirklich gut!",
            answers: [{
                text: "Das freut mich",
                type: "close"
            }]
        }, {
            person: "ali",
            emotion: "neutral",
            text: "Mario bietet jetzt die Baklava nach dem Rezept von meinem Dede an?\n" +
                "Wie cool!",
            answers: [{
                text: "Und sie schmecken wirklich gut!",
                type: "close"
            }]
        }]
    }
})