DAYS.push({
    id: "day22",
    quest: {
        person: "ali",
        emotion: "sad",
        text: "Hey!\n" +
            "Sorry, gerade steht hier alles ein bisschen still.\n" +
            "Mein Messer ist kaputt.",
        answers: [
            {
                text: "Oh nein, du kannst gar nichts machen? Was kann ich tun?",
                type: "continue",
                reaction: {
                    text: "Heute wohl nicht mehr viel.\n" +
                        "Es sei denn, du könntest einen Ersatz auftreiben.\n",
                    answers: [{
                        text: "Ich schaue, was ich finde!",
                        type: "accept"
                    }, {
                        text: "Wohl eher nicht...",
                        type: "close"
                    }]
                }
            }]
    },
    hints: [{
        person: "fred",
        emotion: "neutral",
        text: "Heeey!\n" +
            "Wie geht's dir?",
        answers: [{
            text: "Gut danke! Aber ein Kumpel hat ein Problem.",
            type: "continue",
            reaction: {
                text: "Oh wirklich?\n" +
                    "Was für eine Problem ist das denn?\n" +
                    "Braucht er einen Kredit?",
                answers: [{
                    text: "Nein, er braucht ein gutes Messer.",
                    type: "continue",
                    reaction: {
                        text: "Oh! Nunja...\n" +
                            "Tatsächlich hätte ich da noch eins.\n" +
                            "Ich hab noch ein altes Katana im Hinterzimmer.\n" +
                            "Das stand hier mal zur Deko im Büro.\n" +
                            "Es schneidet super. Er kann es also haben.",
                        answers: [{
                            text: "Du gibst mir dein Katana kostenlos, das sicher mehrere Hundert Euro kostet?",
                            type: "continue",
                            reaction: {
                                text: "Ja.\n" +
                                    "Denn so sind wir Bänker.\n" +
                                    "Außerdem habe ich das Gefühl, dies ist mein Schicksal.\n" +
                                    "Es ist, also hätte mir jemand diese Worte in den Mund gelegt und ich müsste es sagen, damit sich eine sinnvolle Gesamthandlung ergibt...",
                                answers: [{
                                    text: "Wie großzügig! Und seltsam!",
                                    type: "closeHint"
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "meier",
        emotion: "neutral",
        text: "Na? Was macht das Helferdasein?",
        answers: [{
            text: "Ein Kumpel braucht einen Ersatz für sein Dönermesser.",
            type: "continue",
            reaction: {
                text: "Oh. Mh...\n" +
                    "Kann er seine Döner nicht solange in vegetarischer Variante verkaufen?\n" +
                    "Ist ohnehin gesünder.",
                answers: [{
                    text: "Ich kann es ja mal vorschlagen.",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey!\n" +
            "Und?\n" +
            "Warst du erfolgreich?",
        answers: [{
            text: "Bleib vegetarisch!",
            type: "continue",
            reaction: {
                text: "...\n" +
                    "...\n" +
                    "...\n" +
                    "Nein.",
                answers: [{
                    text: "Jap, hab ich mir schon gedacht.",
                    type: "close"
                }]
            }
        }, {
            text: "Hier ein Katana!",
            type: "rightAnswer",
            reaction: {
                text: "Junge!!\n" +
                    "Wo hast du das denn her??\n" +
                    "Egal. Hammer. Richtig gut.\n" +
                    "Das macht richtig Eindruck!\n",
                answers: [{
                    text: "Freut mich, dass ich helfen konnte!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Das Katana ist der Hammer!",
        answers: [{
            text: "Cool oder?",
            type: "close"
        }],
        others: [{
            person: "fred",
            emotion: "neutral",
            text: "Ich stelle immer gern meine original-japanischen Antiquitäten kostenlos zum Schneiden von Dönerfleisch zur Verfügung!",
            answers: [{
                text: "Okay!",
                type: "close"
            }]
        }]
    }
})