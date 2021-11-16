DAYS.push({
    id: "day14",
    quest: {
        person: "bjorn",
        emotion: "sad",
        text: "Hi...\n" +
            "Aua... urghh...\n" +
            "Kann ich dir helfen?",
        answers: [
            {
                text: "Bei mir ist alles gut. Hast du Schmerzen?",
                type: "continue",
                reaction: {
                    text: "Ja, schon eine Weile lang.\n" +
                        "Ziemlich schlimm im Rücken.\n" +
                        "Habs mit Wärme versucht, aber es geht nicht weg.\n" +
                        "Ich denke es war der ständige Stress die letzten Wochen.\n" +
                        "Ich hatte einen ziemlich großen Fall zu bearbeiten.",
                    answers: [{
                        text: "Da hat sich in deinem Rücken bestimmt ziemlich was angespannt.",
                        type: "continue",
                        reaction: {
                            text: "Ja schon.\n" +
                                "Irgendetwas zur Entspannung wäre gut...",
                            answers: [{
                                text: "Ich schaue mal!",
                                type: "accept"
                            }]
                        }
                    }]
                }
            }]
    },
    hints: [{
        person: "marc",
        emotion: "neutral",
        text: "Mein Kind!\n" +
            "Wie geht es dir?\n" +
            "Kommst du gut in der Stadt zurecht?",
        answers: [{
            text: "Mir geht's gut, danke! Aber ein Freund hat starke Rückenschmerzen.",
            type: "continue",
            reaction: {
                text: "Oh weh, die plagen mich auch oft.\n" +
                    "Verspannungen?",
                answers: [{
                    text: "Ja genau. Er bräuchte etwas, das ihn entspannt.",
                    type: "continue",
                    reaction: {
                        text: "Nun, der Weg zu Gott bietet immer noch den größten Seelenfrieden.",
                        answers: [{
                            text: "Haha, ja also ich dachte eher an andere Mittel.",
                            type: "continue",
                            reaction: {
                                text: "Oh, an was denn für welche?",
                                answers: [{
                                    text: "Naja du weißt schon... Was zum Rauchen vielleicht...",
                                    type: "continue",
                                    reaction: {
                                        text: "Ich weiß nicht, was du meinst.",
                                        answers: [{
                                            text: "Ja, schon gut.",
                                            type: "continue",
                                            reaction: {
                                                text: "...\n...\n...\n",
                                                answers: [{
                                                    text: "...",
                                                    type: "continue",
                                                    reaction: {
                                                        text: "Okay, real talk.\nPro Gramm 9 Euro.\nWie viel willst du?",
                                                        answers: [{
                                                            text: "2 Gramm bitte.",
                                                            type: "closeHint"
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "bernadette",
        emotion: "neutral",
        text: "Halloooo!\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Ein Freund sucht einen Weg, um zu entspannen.",
            type: "continue",
            reaction: {
                text: "Also das Designen von Kleidung und zusammenstellen von Outfits finde ich sehr entspannend!\n" +
                    "Vielleicht kann er etwas neues zum Anziehen brauchen.\n" +
                    "Ein neues Outfit kann sehr beflügeln!",
                answers: [{
                    text: "Ich schlage es ihm vor!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Willkommen zurück.\n" +
            "Hast du etwas gegen meine Schmerzen finden können?",
        answers: [{
            text: "Ein wenig Grünzeug!",
            type: "continue",
            reaction: {
                text: "Grünzeug?...\n" +
                    "Ach du meinst...\n" +
                    "...\n" +
                    "Naja wieso nicht probieren?",
                answers: [{
                    text: "Hier bitte.",
                    type: "rightAnswer",
                    reaction: {
                        text: "Ufff...\n" +
                            "Das habe ich lang nicht mehr gemacht...\n" +
                            "Aber vielen Dank, die Schmerzen werden gleich ein bisschen besser!",
                        answers: [{
                            text: "Gern geschehen!",
                            type: "close"
                        }]
                    }
                }]
            }
        }, {
            text: "Ein neues Outfit!",
            type: "continue",
            reaction: {
                text: "Was?\n" +
                    "Also das ist nett gemeint, aber ich glaube nicht, dass mir das helfen wird.",
                answers: [{
                    text: "Na gut...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen Dank für die Entspannungshilfe!",
        answers: [{
            text: "Kein Problem!",
            type: "close"
        }],
        others: [{
            person: "marc",
            emotion: "neutral",
            text: "Mein Kind, behandle dein Wissen mit Bedacht!\n" +
                "Ne, aber ernsthaft.\n" +
                "Wenn du was brauchst, sag einfach Bescheid.\n" +
                "Aber steck's nicht den Bullen.",
            answers: [{
                text: "Ich weiß von nichts.",
                type: "close"
            }]
        }]
    }
})