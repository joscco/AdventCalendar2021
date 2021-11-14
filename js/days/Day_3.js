DAYS.push({
    id: "day3",
    quest: {
        person: "joseph",
        emotion: "sad",
        text: "(zitter)...\n" +
            "(zitter)...\n" +
            "Oh hallo, kann ich dir helfen?",
        answers: [
            {
                text: "Och nö, alles gut. Ist dir kalt?",
                type: "continue",
                reaction: {
                    text: "Oh ja, die Heizung hier im Tierheim ist ausgefallen.\n" +
                        "(zitter)...\n" +
                        "Wir sitzen hier seit ein paar Stunden nun schon im Kalten.\n" +
                        "Wir haben zwar noch einen alten Ofen hier, aber keinerlei Feuerholz...",
                    answers: [{
                        text: "Lass mich schauen, was ich tun kann!",
                        type: "accept"
                    }]
                }
            }]
    },
    hints: [{
        person: "bernd",
        emotion: "neutral",
        text: "Mmmh...\n" +
            "mmmh...\n" +
            "Mh mh?",
        answers: [{
            text: "Ja genau, Feuerholz brauche ich!",
            type: "continue",
            reaction: {
                text: "MMMH!\nMhmmm...\nMhh!",
                answers: [{
                    text: "Waaas? Du heißt Bernd, bist Holzfäller und hast noch genug Holz übrig?",
                    type: "continue",
                    reaction: {
                        text: "Mh!",
                        answers: [{
                            text: "Fantastisch, das nehme ich!",
                            type: "closeHint"
                        }]
                    }
                }]
            }
        }]
    }, {
        person: "mario",
        emotion: "neutral",
        text: "Hallöle! Mario bin ich. Was darf es sein?",
        answers: [{
            text: "Hast du etwas zum Wärmen?",
            type: "continue",
            reaction: {
                text: "Oh, ehm...\n" +
                    "Also...\n" +
                    "Ich könnte dir einen Kaffee anbieten.\n" +
                    "...oder Glühwein?",
                answers: [{
                    text: "Bäh.",
                    type: "close"
                }, {
                    text: "Danke, den würde ich nehmen!",
                    type: "closeHint"
                }
                ]
            }
        }]
    }],
    solutionDialog: {
        text: "Und, hast du etwas gefunden?",
        answers: [{
            text: "Feuerholz!",
            type: "rightAnswer",
            reaction: {
                text: "Du bist ja fantastisch!\n" +
                    "Damit kann ich den alten Ofen heizen!\n" +
                    "Ich und die Tiere sind dir zu großem Dank verpflichtet!",
                answers: [{
                    text: "Kein Problem!",
                    type: "close"
                }]
            }
        }, {
            text: "Lieber Glühwein oder Kaffee?",
            type: "continue",
            reaction: {
                text: "Ehm...\n" +
                    "Also eher Kaffee, ich arbeite ja noch.\n" +
                    "Das ist sehr lieb...\n" +
                    "Aber wirklich helfen tut mir das nicht.",
                answers: [{
                    text: "Oh...",
                    type: "close"
                }]
            }
        }]
    },
    onFinishedDialogues: {
        text: "Vielen lieben Dank!",
        answers: [{
            text: "Gern geschehen!",
            type: "close"
        }],
        others: [{
            person: "karla",
            emotion: "neutral",
            text: "Ich besuche immer wieder gern Joseph im Tierheim.\n" +
                "Toll, dass du ihm wegen der Heizung helfen konntest!",
            answers: [{
                text: "Hab ich gern gemacht!",
                type: "close"
            }]
        }]
    }
})