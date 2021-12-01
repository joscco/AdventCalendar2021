DAYS.push({
    id: "day5",
    quest: {
        person: "fred",
        emotion: "sad",
        text: "Guten Tag, Fred Zasterhauser ist mein Name.\n" +
            "Freut mich, dass Sie Ihr weg zu uns bei der PIGI-Bank geführt hat.\n" +
            "Wie kann ich Ihnen helfen?",
        answers: [
            {
                text: "Sie sehen nicht nach Freude aus...",
                type: "continue",
                reaction: {
                    text: "Oh tut mir leid...\n" +
                        "Naja, wenn Sie schon so fragen...\n" +
                        "Ich blicke einfach jeden Tag auf diese sterilen, weißen Wände im gleichen, sterilen Gebäude.\n" +
                        "Ich hätte so gerne mal etwas Abwechslung in meinem Büro.",
                    answers: [{
                        text: "Mhhh, lassen Sie mich mal machen!",
                        type: "accept"

                    }]
                }
            }]
    },
    hints: [{
        person: "ben",
        emotion: "neutral",
        text: "Vorsicht!\n" +
            "Hier stehen überall meine Farben herum!\n" +
            "Nicht, dass du reintrittst...\n" +
            "Hallo übrigens, Ben ist mein Name.\n" +
            "Wie kann ich dir helfen?",
        answers: [{
            text: "Ein Freund möchte mehr Farbe in seinem Büro.",
            type: "continue",
            reaction: {
                text: "Wirklich?\n" +
                    "Naja, damit kann ich dienen.\n" +
                    "Dort hinten liegen noch alte Bilder von mir in der Ecke, die zum Verkauf stehen.\n" +
                    "Mach doch ein paar Fotos und frag deinen Freund, ob er welche haben möchte.",
                answers: [{
                    text: "Das mache ich!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "maria",
        emotion: "neutral",
        text: "Hallihallo!\n" +
            "Maria bin ich.\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Ein Freund sucht Abwechslung in seinem Job.",
            type: "continue",
            reaction: {
                text: "Soso?\n" +
                    "Nun, kann er kochen? \n" +
                    "Ich suche zurzeit einen neuen Lehrling.",
                answers: [{
                    text: "Lol, sicher nicht.",
                    type: "continue",
                    reaction: {
                        text: "Dann halt nicht...",
                        emotion: "sad",
                        answers: [{
                            text: "Schade banane.",
                            type: "close"
                        }]
                    }
                }, {
                    text: "Ich schlag's mal vor!",
                    type: "closeHint"
                }
                ]
            }
        }]
    }],
    solutionDialog: {
        text: "Hey, du bist es!\n" +
            "Und, hattest du Erfolg?",
        answers: [{
            text: "Ich habe Bilder!",
            type: "continue",
            reaction: {
                text: "Oh WOW!...\n" +
                    "Die sehen fantastisch aus!\n" +
                    "Die würden so viel Klasse und Kultur in mein Büro bringen!\n" +
                    "Ben ist ein wirklich begabter Künstler!\n" +
                    "Ich werde ihn gleich bitten, die Bilder hierher liefern zu lassen.",
                answers: [{
                    text: "Cool! Ich bleibe gerne und schaue mir die Bilder hier live an.",
                    type: "rightAnswer",
                    reaction: {
                        text: "So! Da sind sie!\n" +
                            "Wunderschön nicht?\n" +
                            "Mit dieser Farbkulisse lässt es sich wahrlich aushalten.\n" +
                            "Vielen Dank nochmal für deine Hilfe!",
                        answers: [{
                            text: "Gern geschehen!",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Ein Jobangebot!",
            type: "continue",
            reaction: {
                text: "Was?\n" +
                    "Nein, das hast du falsch verstanden, mein Guter.\n" +
                    "Ich liebe meinen Job.\n" +
                    "Nur mein Büro will ich aufgehübscht haben.",
                answers: [{
                    text: "Oh, achso...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank für deinen Bildertipp!",
        answers: [{
            text: "Cool, wenn es gefällt!",
            type: "close"
        }],
        others: [{
            person: "ben",
            emotion: "happy",
            text: "Danke, dass du mir geholfen hast, die Bilder an den Mann zu bringen!",
            answers: [{
                text: "Sehr gern!",
                type: "close"
            }]
        }]
    }
})