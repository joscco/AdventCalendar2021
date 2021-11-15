DAYS.push({
    id: "day9",
    quest: {
        person: "bernadette",
        emotion: "sad",
        text: "Hallo!\n" +
            "Willkommen in meinem Modeparadies.\n" +
            "Was darf es heute sein?",
        answers: [
            {
                text: "Alles gut? Du wirkst traurig.",
                type: "continue",
                reaction: {
                    text: "Oh weh...\n" +
                        "Das sollten meine Kunden nicht merken...\n" +
                        "Ich sitze nur gerade einem Inspirationstief.\n" +
                        "Ich bräuchte eine neue Idee, die mich begeistert.",
                    answers: [{
                        text: "Ich schaue, ob ich etwas finde!",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "gundula",
        emotion: "neutral",
        text: "Halloooo!\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Eine Freundin braucht neue Inspiration!",
            type: "continue",
            reaction: {
                text: "Mhm...\n" +
                    "Das klingt nach einem schwierigen Problem.\n" +
                    "Leider bin ich nicht so versiert, was Kunst angeht.\n" +
                    "Aber vielleicht können diese Mandarinen hier ihr Köpfchen auf Trab bringen?",
                answers: [{
                    text: "Ich versuche es, danke!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "bjorn",
        emotion: "neutral",
        text: "Hallo du!\nNa, wie ist die Lage?",
        answers: [{
            text: "Eine Freundin von mir hängt in einem Inspirationsloch.",
            type: "continue",
            reaction: {
                text: "Soso...\n" +
                    "Also weißt du,...\n" +
                    "Wenn ich auf neue Ideen kommen muss, hilft es mir immer, wenn ich eine Runde im Park spazieren gehe.\n" +
                    "Schlag das doch mal vor!",
                answers: [{
                    text: "Das mache ich!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
        text: "Und?\n" +
            "konntest du neue Ideen aufschnappen?",
        answers: [{
            text: "Ein Spaziergang hilft!",
            type: "continue",
            reaction: {
                text: "Mh ...\n" +
                    "Das mag schon sein, aber ich kann hier schlecht meine Kunden alleine lassen.\n" +
                    "Und heute Abend wird es bereits zu dunkel sein.\n" +
                    "Ich glaube, so hilft ein Spaziergang wenig.",
                answers: [{
                    text: "Das stimmt wohl.",
                    type: "close"
                }]
            }
        }, {
            text: "Hier ein paar Mandarinen!",
            type: "rightAnswer",
            reaction: {
                text: "WAS. IST. DAS!\n" +
                    "So ein exquisiter Netzstoff!\n" +
                    "Orange, wie lebendig, wie gewagt!!",
                answers: [{
                    text: "Also eigentlich geht es eher um den Inhalt...",
                    type: "continue",
                    reaction: {
                        text: "Ich liebe es!\n" +
                            "So viele Ideen!\n" +
                            "Eine Frühlingskollektion!\n" +
                            "Damit werde ich viel neues schaffen können!\n" +
                            "Ich danke dir!",
                        answers: [{
                            text: "Joa bitte, wieso nicht...",
                            type: "close"
                        }]
                    }
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "So ein toller Stoff, ich danke dir für die Inspiration!",
        answers: [{
            text: "Klar doch.",
            type: "close"
        }],
        others: [{
            person: "gundula",
            emotion: "neutral",
            text: "Und?\n" +
                "Konnten die Mandarinen deiner Freundin ein wenig helfen?",
            answers: [{
                text: "Ja tatsächlich. Nur eben anders, als gedacht.",
                type: "close"
            }]
        }]
    }
})