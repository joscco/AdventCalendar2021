DAYS.push({
    id: "day8",
    quest: {
        person: "marc",
        emotion: "sad",
        text: "Hallo mein Kind.\n" +
            "Mein Name ist Vater Marc.\n" +
            "Was kann ich für dich tun?",
        answers: [
            {
                text: "Du siehst nicht sehr glücklich aus... Was kann ich also für dich tun?",
                type: "continue",
                reaction: {
                    text: "Oh, steht mir das ins Gesicht geschrieben?\n" +
                        "Du musst wissen, die Messe ist momentan wirklich nicht gut besucht.\n" +
                        "Dabei sollte Weihnachten doch ein Fest der Gemeinschaft sein...\n" +
                        "Was soll ich nur tun...?",
                    answers: [{
                        text: "Ich werde mal rumfragen.",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "mario",
        emotion: "neutral",
        text: "Ah hallo!\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Vater Marc fragt, wie man mehr Leute zur Messe kriegen kann.",
            type: "continue",
            reaction: {
                text: "Vater Marc?\n" +
                    "Ist das der Pastor?\n" +
                    "Ich hab echt nichts mit der Kirche am Hut musst du wissen.\n" +
                    "Mh...\n" +
                    "Naja, wie wäre es damit, immer etwas von meinem Gebäck in der Messe anzubieten?\n" +
                    "Da kommen die Leute sicher gern.",
                answers: [{
                    text: "Eine tolle Idee! Das schlage ich vor.",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "karla",
        emotion: "neutral",
        text: "Hallo und willkommen bei der Schnee-Apotheke.\n" +
            "Was darf es sein?",
        answers: [{
            text: "Ich komme nicht für Medikamente. Vater Marc möchte mehr Leute ansprechen.",
            type: "continue",
            reaction: {
                text: "Bitte wer will mehr Leute ansprechen?",
                answers: [{
                    text: "Vater Marc... Der Pastor.",
                    type: "continue",
                    reaction: {
                        text: "Oh okay...\n" +
                            "Also....\n" +
                            "Ich habs nicht so mit der Kirche.\n" +
                            "Ich weiß nicht...\n" +
                            "Glühwein anbieten?",
                        answers: [{
                            text: "Gar keine schlechte Idee.",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und mein Kind?\n" +
            "Ist dir etwas Gutes eingefallen?",
        answers: [{
            text: "Freier Glühwein!",
            type: "continue",
            reaction: {
                text: "Mmmh...\n" +
                    "...\n" +
                    "Da würden bestimmt einige kommen...\n" +
                    "Andererseits leite ich die AA-Gruppe hier...\n" +
                    "Das wäre wohl nicht ganz optimal...",
                answers: [{
                    text: "Stimmt.",
                    type: "close"
                }]
            }
        }, {
            text: "Freie Kekse!",
            type: "rightAnswer",
            reaction: {
                text: "Kekse!\n" +
                    "Natürlich!\n" +
                    "Dass ich da nicht selbst drauf gekommen bin!\n" +
                    "Bitte gib Mario Bescheid, dass ich ihn um einige größere Bestellungen in nächster Zeit bitten werde!\n" +
                    "Und sag deinen Freunden, dass es bei uns kostenlose Kekse geben wird!\n",
                answers: [{
                    text: "Mache ich!",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Das war eine tolle Idee mit den Keksen!\n" +
            "Ich bin gespannt wer heute Abend alles kommt!",
        answers: [{
            text: "Habe gern geholfen!",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "Ich liebe Kekse!",
            answers: [{
                text: "Wer nicht?",
                type: "close"
            }]
        }, {
            person: "joseph",
            emotion: "neutral",
            text: "KEEEKSE!!",
            answers: [{
                text: "Yeah!",
                type: "close"
            }]
        }, {
            person: "karla",
            emotion: "neutral",
            text: "Kostenlose Kekse?\n" +
                "Da komm ich doch glatt!",
            answers: [{
                text: "Sehr cool!",
                type: "close"
            }]
        }, {
            person: "ben",
            emotion: "neutral",
            text: "Ne also tut mir leid.\n" +
                "Aber da muss sich schon mehr ändern als nur das Anbieten von kostenlosem Gebäck.\n" +
                "Die Probleme, die man angehen muss, sind schließlich weiterhin da.\n",
            answers: [{
                text: "Und wenn wir noch mehr Kekse anbieten?",
                type: "close"
            }]
        }]
    }
})