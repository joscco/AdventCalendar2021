DAYS.push({
    id: "day24",
    quest: {
        person: "maria",
        emotion: "sad",
        text: "Nein...\n" +
            "Nein nein nein...\n" +
            "Verdammter Mist...",
        answers: [{
            text: "Was ist los Maria?",
            type: "continue",
            reaction: {
                text: "Heute steht doch das Essen für alle bei Herrn Millemacher an.\n" +
                    "Ich habe die Kellner bestellt... \n" +
                    "Fertig eingekauft... \n" +
                    "Und das Essen ist schon in der Vorbereitung.\n" +
                    "Und ausgerechnet JETZT sind mir die Kellnerkostüme in den Dreck gefallen...\n" +
                    "Ich finde doch jetzt keine Reinigung mehr...",
                answers: [{
                    text: "Warte hier! Ich helfe!",
                    type: "accept"
                }, {
                    text: "Blöd gelaufen.",
                    type: "close"
                }]
            }
        }
        ]
    },
    hints: [{
        person: "maike",
        emotion: "neutral",
        text: "Hey du!\n" +
            "Und, freust du dich schon auf das Essen bei Armin?\n" +
            "Maria wird bestimmt etwas Fantastisches vorbereitet haben.",
        answers: [{
            text: "Wegen Maria... Könntest du 20 Kellnerkostüme waschen?",
            type: "continue",
            reaction: {
                text: "Was?\n" +
                    "Was ist passiert?",
                answers: [{
                    text: "Ihr sind die Kostüme beim Transport in den Dreck gefallen. Jetzt müssen alle gewaschen und gebügelt werden.",
                    type: "continue",
                    reaction: {
                        text: "Okay.\n" +
                            "Say no more.\n" +
                            "Dies ist ein Job für Powerwäscher.\n" +
                            "Glück hast du, dass wir durch unsere acht Kindern mittlerweile drei Waschmaschinen haben.\n" +
                            "Bring mir die Kostüme, dann kann Maria sie rechtzeitig zum Essen abholen.",
                        answers: [{
                            text: "Waaas? Du bist fantastisch!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "armin",
        emotion: "happy",
        text: "Hallo!\n" +
            "Und, schon Hunger für heute Abend angesammelt?\n" +
            "Es wird sicher großartig!",
        answers: [{
            text: "Also tatsächlich hat Maria ein kleines...",
            type: "continue",
            reaction: {
                text: "G-R-O-ß-A-R-T-I-G.\n" +
                    "Ich sag es dir. Der Abend steht unter guten Sternen.\n" +
                    "Ich fühle, dass nichts schiefgehen kann.",
                answers: [{
                    text: "Darum bin ich hier, die Kostüme der...",
                    type: "continue",
                    reaction: {
                        text: "Ach ja!\n" +
                            "Ist es nicht schön, wenn die Vorbereitungen für das Fest so gut laufen?\n" +
                            "Wir sind wirklich gesegnet.",
                        answers: [{
                            text: "Ach vergiss es.",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, hattest du Erfolg?\n" +
            "Bitte sag ja...",
        answers: [{
            // Ab hier
            text: "Ja! Maike wird für dir die Kostüme rechtzeitig für heute Abend waschen.",
            type: "rightAnswer",
            reaction: {
                text: "Oh gott sei dank...\n" +
                    "Danke dir vielmals!\n" +
                    "Und danke vor allem Maike!\n" +
                    "Jetzt kann der Abend kommen.",
                answers: [{
                    text: "Fantastisch!",
                    type: "close"
                }]
            }
        }]
    }, onFinishedDialogues: {
        text: "Vielen Dank, dass du Maike noch mit ins Boot geholt hast.\n" +
            "Ohne sie hätte ich das Essen nicht rechtzeitig geschafft!\n" +
            "Und ohne dich hätte es das Essen natürlich gar nicht gegeben!",
        answers: [{
            text: "Schön, dass wir so viele zusammenbringen konnten!",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "So ein tolles Essen!\n" +
                "Maria ist eine begabte Köchin!\n" +
                "So gut hat es mir lange nicht geschmeckt.",
            answers: [{
                text: "So soll es sein!",
                type: "close"
            }]
        }, {
            person: "armin",
            emotion: "happy",
            text: "Vielen Dank für deine Organisation!",
            answers: [{
                text: "Gern geschehen!",
                type: "close"
            }]
        }]
    }
})