DAYS.push({
    id: "day4",
    quest: {
        person: "beppo",
        emotion: "sad",
        text: "Oh hey...\n" +
            "Du bist es...",
        answers: [
            {
                text: "Hey! Wieso so traurig?",
                type: "continue",
                reaction: {
                    text: "Naja...\n" +
                        "Vor allem um die Weihnachtszeit, da fehlt mir meine Heimat.\n" +
                        "Bella Italia, meine Familie und vor allem die Kultur...",
                    answers: [{
                        text: "Ich kann etwas tun!",
                        type: "accept"
                    }, {
                        text: "Bäh, Italien...",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "will",
        emotion: "neutral",
        text: "Na hallo, wer bist denn du?\n" +
            "Will ist mein Name, freut mich, dich kennen zu lernen!\n" +
            "Opernsänger bin ich von Beruf.\n" +
            "Was kann ich für dich tun?",
        answers: [{
            text: "Ein Freund sucht etwas italienische Kultur.",
            type: "continue",
            reaction: {
                text: "Italien?\n" +
                    "Oh eine tolle kulturelle Geschichte!\n" +
                    "Und die Oper erst!\n" +
                    "Wenn ihr wollt, könnte ich eine kleine Darbietung geben?",
                answers: [{
                    text: "Wirklich? Fantastisch!",
                    type: "closeHint"
                }]
            }
        }]
    }, {
        person: "marc",
        emotion: "neutral",
        text: "Guten Tag mein Kind, was kann ich für dich tun?",
        answers: [{
            text: "Ein Freund sehnt sich nach etwas Italien.",
            type: "continue",
            reaction: {
                text: "Oh Italien?\n" +
                    "Warst du schonmal in Rom?\n" +
                    "Eine zauberhafte Stadt.\n" +
                    "Warte, ich habe irgendwo noch ein wenig Limoncello.",
                answers: [{
                    text: "(schluck)",
                    type: "close",
                    reaction: {
                        text: "Ich hasse Limoncello.",
                        type: "close"
                    }
                }, {
                    text: "Oh, den nehme ich!",
                    type: "closeHint"
                }]
            }
        }]
    }],
    solutionDialog: {
            text: "Und, konntest du etwas finden?",
            answers:
                [{
                    text: "Limoncello!",
                    type: "continue",
                    reaction: {
                        text: "...\n" +
                            "...\n" +
                            "...\n" +
                            "Ich HASSE Limoncello.",
                        answers: [{
                            text: "Oh.",
                            type: "close"
                        }]
                    }
                }, {
                    text: "Einen Opernsänger!",
                    type: "rightAnswer",
                    reaction: {
                        text: "Waaaaas? Einen Opernsänger!\n" +
                            "Ich liebe die Oper!\n" +
                            "Ich bin oft mit meiner Nonna in die Oper gegangen!\n" +
                            "Gerne kann er hier in meiner Pizzeria singen! Wie damals mit meiner Nonna! Ich zahle auch!",
                        answers: [{
                            text: "Klingt großartig! Ich sage ihm bescheid!",
                            type: "close"
                        }]
                    }
                }]
        }
    ,
    onFinishedDialogues: {
        text: "Ich freue mich so sehr darauf, wenn Will heute Abend hier auftreten wird!\n" +
            "Es wird ganz fantastisch!",
        answers: [{
            text: "Da bin ich mir sicher!",
            type: "close"
        }],
        others: [{
            person: "will",
            emotion: "neutral",
            text: "Ich probe bereits für heute Abend!\n" +
                "Toll, mal wieder etwas italienisches zu singen!",
            answers: [{
                text: "Es wird sicher großartig",
                type: "close"
            }]
        }]
    }
})