DAYS.push({
    id: "day10",
    quest: {
        person: "gundula",
        emotion: "sad",
        text: "Mh...\nHm....\nMhh...",
        answers: [
            {
                text: "Alles gut bei dir?",
                type: "continue",
                reaction: {
                    text: "Oh!\n" +
                        "Du bist es.\n" +
                        "Ich hatte dich gar nicht gesehen.\n" +
                        "Ja... Ist schon in Ordnung.",
                    answers: [{
                        text: "Du siehst aber nicht so aus.",
                        type: "continue",
                        reaction: {
                            text: "Naja... \n" +
                                "Das Alter macht einsam musst du wissen.\n" +
                                "Ich bin so oft allein...",
                            answers: [{
                                text: "Lass mich schauen, was ich tun kann!",
                                type: "accept"
                            }
                            ]
                        }
                    }, {
                        text: "Na dann geh ich wieder.",
                        type: "close"
                    }]
                }
            }]
    },
    hints: [{
        person: "joseph",
        emotion: "neutral",
        text: "Hey du!\n" +
            "Danke nochmal für das Beschaffen vom Feuerholz neulich!\n" +
            "Jetzt ist es muckelig warm.",
        answers: [{
            text: "Sehr gut! Sag mal, ich hätte da eine Frage...",
            type: "continue",
            reaction: {
                text: "Klar, schieß los.\n" +
                    "Was kann ich für dich tun?",
                answers: [{
                    text: "Eine Freundin ist sehr einsam und sucht Gesellschaft.",
                    type: "continue",
                    reaction: {
                        text: "Na also, wenn sie Zeit hat und bereit ist, die nötige Arbeit zu investieren, freuen sich alle unsere Vierbeiner über ein neues Zuhause.\n" +
                            "Sie kann gerne vorbeikommen um unseren Kleinen einen Besuch abzustatten.",
                        answers: [{
                            text: "Eine gute Idee!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "ben",
        emotion: "neutral",
        text: "Na hallo!\n" +
            "Was gibt es?",
        answers: [{
            text: "Eine Freundin von mir fühlt sich einsam...",
            type: "continue",
            reaction: {
                text: "Oh weh...\n" +
                    "Weißt du, wenn ich mich einsam fühle, greife ich zu Farbe und Pinsel.\n" +
                    "Dann verfliegt das Gefühl ganz schnell.",
                answers: [{
                    text: "Das werde ich ihr vorschlagen!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Mhh...",
        answers: [{
            text: "Du brauchst einen Begleiter!",
            type: "continue",
            reaction: {
                text: "Was meinst du?\n" +
                    "Aber wie denn nur?",
                answers: [{
                    text: "Komm mit, wir besuchen einen Freund!",
                    type: "rightAnswer",
                    reaction: {
                        text: "OH. GOTT!\n" +
                            "Er ist so goldig!\n" +
                            "Ich bin verliebt!\n" +
                            "Ich wollte schon immer eine Katze haben, doch mir war nie in den Sinn gekommen, in meinem Alter nochmal eine zu adoptieren!\n" +
                            "Komm mit Mikesch, du gehörst nun zu mir!",
                        answers: [{
                            text: "Yeah!",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Zeichnen hilft!",
            type: "continue",
            reaction: {
                text: "Mh. Ich weiß nicht.\n" +
                    "Zeichnen hat mir nie so richtig Spaß gemacht.\n" +
                    "Tut mir leid, das ist glaube ich nichts für mich...",
                answers: [{
                    text: "Na gut...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Mikesch ist so ein feiner Kerl!",
        answers: [{
            text: "Sehr schön!",
            type: "close"
        }],
        others: [{
            person: "joseph",
            emotion: "neutral",
            text: "Toll, dass Mikesch ein neues zuhause gefunden hat!\n" +
                "Er ist schon einige Jahre bei uns gewesen.",
            answers: [{
                text: "Jetzt haben beide eine Familie gefunden!",
                type: "close"
            }]
        }]
    }
})