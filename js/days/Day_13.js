DAYS.push({
    id: "day13",
    quest: {
        person: "karla",
        emotion: "sad",
        text: "Einen guten Tag...\nWas kann ich für dich tun?",
        answers: [
            {
                text: "Eine Packung Ibus bitte. Und vielleicht auch etwas gegen deine schlechte Laune?",
                type: "continue",
                reaction: {
                    text: "Was?\n" +
                        "Oh, tut mir leid...\n" +
                        "Eine Freundin hat mir für Weihnachten abgesagt.\n" +
                        "Ich bin traurig, dass ich das Fest wohl jetzt allein verbringen werde.",
                    answers: [{
                        text: "Das tut mir leid. Kann ich etwas tun?",
                        type: "continue",
                        reaction: {
                            text: "Ne, ich glaube nicht...\n" +
                                "Schließlich kannst du mir ja nicht mal eben eine Beschäftigung für die Festtage beschaffen...",
                            answers: [{
                                text: "Stimmt, kann ich nicht.",
                                type: "close"
                            }, {
                                text: "Vielleicht doch!",
                                type: "accept"
                            }
                            ]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "jo",
        emotion: "neutral",
        text: "Hey du!\n" +
            "Schon wieder Zeit für einen neuen Haarschnitt?\n" +
            "Oder nur den Bart in Form bringen?",
        answers: [{
            text: "Weder noch. Eine Freundin sucht Beschäftigung für die Festtage.",
            type: "continue",
            reaction: {
                text: "Oh.\n" +
                    "Wer ist denn deine Freundin?",
                answers: [{
                    text: "Klara aus der Apotheke.",
                    type: "continue",
                    reaction: {
                        text: "Oh ja!\n" +
                            "Schon häufiger mit ihr gequatscht.\n" +
                            "Sehr nette Dame!\n" +
                            "Also wenn sie wirklich nichts über die Feiertage zu tun hat, kann sie sich gern zu mir und ein paar Freunden gesellen.\n" +
                            "Eine von meinen Freundinnen ist eine exzellente Köchin!",
                        answers: [{
                            text: "Das klingt toll! Schlage ich vor!",
                            type: "closeHint"
                        }]
                    }
                }, {
                    text: "None of your business.",
                    type: "close"
                }]
            }
        }]
    }, {
        person: "will",
        emotion: "neutral",
        text: "Na hey!\n" +
            "Brauchst du wieder einen Sänger",
        answers: [{
            text: "Nene, heute eher eine Beschäftigung für eine Freundin zum Weihnachtsfest.",
            type: "continue",
            reaction: {
                text: "Ah!\n" +
                    "Nun, ich werde Weihnachten ein paar klassische Konzerte besuchen!\n" +
                    "Sie kann mich begleiten wenn sie möchte.",
                answers: [{
                    text: "Super, das sage ich ihr!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Oh hey.\n" +
            "Du bist es.\n" +
            "Kommst du, um mir zu sagen, dass dir nichts für das Fest eingefallen ist?\n" +
            "Ist nicht schlimm...",
        answers: [{
            text: "Doch, Konzerte mit Will!",
            type: "continue",
            reaction: {
                text: "Will der Opernsänger?\n" +
                    "Danke, das ist wirklich lieb von ihm.\n" +
                    "Aber Konzerte sind nicht ganz das, was ich Weihnachten tun möchte.\n" +
                    "Ich würde lieber schöne Gespräche mit anderen führen und etwas leckeres essen...",
                answers: [{
                    text: "Schade, aber gut.",
                    type: "close"
                }]
            }
        }, {
            text: "Doch, Jo und Freunde!",
            type: "rightAnswer",
            reaction: {
                text: "Uh, Jo der Barbier?\n" +
                    "Kommt häufiger in die Apotheke, sehr netter Kerl!\n" +
                    "Also wenn es seinen Freunden nichts ausmacht...\n" +
                    "Das wäre sicherlich eine coole Runde!\n" +
                    "Ich frage ihn gleich mal, ob das in Ordnung ginge.\n" +
                    "Danke dir!",
                answers: [{
                    text: "Gerne!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank!\n" +
            "Jo hat bereits zugestimmt!\n" +
            "Jetzt kann Weihnachten kommen!",
        answers: [{
            text: "Sehr cool!",
            type: "close"
        }],
        others: [{
            person: "jo",
            emotion: "neutral",
            text: "Cool, dass Karla zu Weihnachten vorbeikommen will!\n" +
                "Das wird sicher cool!",
            answers: [{
                text: "Da bin ich mir sicher!",
                type: "close"
            }]
        }, {
            person: "will",
            emotion: "sad",
            text: "Tssst. Niemand weiß heutzutage noch klassiche Musik und Konzerte zu schätzen...",
            answers: [{
                text: "Eine Schande...",
                type: "close"
            }]
        }]
    }
})