DAYS.push({
    id: "day11",
    quest: {
        person: "arndt",
        emotion: "sad",
        text: "Guten Tag.\nKann ich Ihnen behilflich sein?",
        answers: [
            {
                text: "Ich hätte gern einen Weihnachtsstern.",
                type: "continue",
                reaction: {
                    text: "Natürlich doch, 9 Euro kostet das Stück momentan.\n" +
                        "Soll ich ihn einpacken?.",
                    answers: [{
                        text: "Danke, das geht so. Alles in Ordnung bei Ihnen?",
                        type: "continue",
                        reaction: {
                            text: "Was?\n" +
                                "Bei mir?\n" +
                                "Achso, jaja, schon okay.\n" +
                                "Nur läuft das Geschäft schlecht um diese Jahreszeit.\n" +
                                "Außerdem kaufen hier nur die Leute aus der Innenstadt ein, die sowieso keine Gärten haben.\n" +
                                "Könnte einfach besser laufen.",
                            answers: [{
                                text: "Mal schauen, ob ich helfen kann!",
                                type: "accept"
                            }]
                        }
                    }]
                }
            }]
    },
    // ab hier
    hints: [{
        person: "sam",
        emotion: "neutral",
        text: "Hey!\n" +
            "Ich bin Sam!\n" +
            "Kann ich dir helfen?",
        answers: [{
            text: "Die Baumschule läuft nicht so gut.",
            type: "continue",
            reaction: {
                text: "Oh, die von Arndt meinst du?\n" +
                    "Also ich habe nur mal kurz mit ihm gesprochen, aber ein netter Kerl.",
                answers: [{
                    text: "Er findet es blöd, dass seine Baumschule nur in der Stadt bekannt ist.",
                    type: "continue",
                    reaction: {
                        text: "Aha!\n" +
                            "Naja da hast du Glück, ich bin Webentwickler!\n" +
                            "Ich könnte Arndt eine Website bauen und ein bisschen Werbung machen, sodass er Leute außerhalb unserer Stadt auf ihn aufmerksam werden!\n" +
                            "Wenn er nichts aufwendiges will, mach ich es auch für lau.",
                        answers: [{
                            text: "Das klingt fantastisch!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "jo",
        emotion: "neutral",
        text: "Na du!\n" +
            "Wie geht's dir so?",
        answers: [{
            text: "Mir gut danke, aber dem Laden eines Freundes geht es nicht so gut.",
            type: "continue",
            reaction: {
                text: "Oh nein, das ist ja blöd.\n" +
                    "Um welchen Laden geht es denn?.",
                answers: [{
                    text: "Die Baumschule am Ende der Stadt.",
                    type: "continue",
                    reaction: {
                        text: "Oh.\n" +
                            "Dort hab ich auch schonmal ein paar Rosen gekauft\n" +
                            "Mh, vielleicht könnte man durch schöne Baumschnitte den Laden in Schwung.\n" +
                            "So ein Haarschnitt hat noch niemandem geschadet, auch Bäumen sicher nicht!",
                        answers: [{
                            text: "Das werde ich mal vorschlagen!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey!\n" +
            "Hast du jetzt Tipps, wie ich den Laden ans Laufen kriege?",
        answers: [{
            text: "Eine Website!",
            type: "continue",
            reaction: {
                text: "Das ist eine wirklich gute Idee!\n" +
                    "Darüber hatte ich auch schon nachgedacht und sogar Fotos der Pflanzen gemacht.\n" +
                    "Leider kann ich so etwas aber nicht.",
                answers: [{
                    text: "Sam aus der Stadt hat seine Hilfe angeboten!",
                    type: "rightAnswer",
                    reaction: {
                        text: "Sam?\n" +
                            "Der Entwickler?\n" +
                            "Der war neulich schonmal hier.\n" +
                            "Ein wirklich netter Kerl, das wäre großartig, danke!",
                        answers: [{
                            text: "Gern!",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Baumschnitte!",
            type: "rightAnswer",
            reaction: {
                text: "Ich soll meine Bäume schneiden?\n" +
                    "Ich fürchte, das ist die Mühe nicht wert, zumindest noch nicht.\n" +
                    "Ich habe wenig Erfahrung in Formschnitt und es hat sowieso fast niemand hier einen Garten.\n" +
                    "Tut mir leid, das hilft mir nicht so richtig.",
                answers: [{
                    text: "Oh...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Ich danke dir vielmals!\n" +
            "Und vielen Dank auch an Sam, dass er mir eine Website macht!\n" +
            "Er ist so klug und nett!",
        answers: [{
            text: "Gern geschehen!",
            type: "close"
        }],
        others: [{
            person: "sam",
            emotion: "neutral",
            text: "Arndt war eben schon hier und hat mir Fotos seiner Bäume vorbei gebracht.\n" +
                "Damit kann ich mich gleich heute Abend ans Werk machen!",
            answers: [{
                text: "Super!",
                type: "close"
            }]
        }]
    }
})