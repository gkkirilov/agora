export const partyVoters = {
    right: {
        neededToWin: 252000,
        VOTERS_UP_HIGH: 42000,
        VOTERS_UP_MID: 21000,
        VOTERS_UP_LOW: 10500,
        VOTERS_DOWN_HIGH: 21000,
        VOTERS_DOWN_MID: 10500,
        VOTERS_DOWN_LOW: 5250,
    },
    left: {
        neededToWin: 396000,
        VOTERS_UP_HIGH: 66000,
        VOTERS_UP_MID: 33000,
        VOTERS_UP_LOW: 16500,
        VOTERS_DOWN_HIGH: 33000,
        VOTERS_DOWN_MID: 16500,
        VOTERS_DOWN_LOW: 8250,
    },
    'far-left': {
        neededToWin: 216000,
        VOTERS_UP_HIGH: 36000,
        VOTERS_UP_MID: 18000,
        VOTERS_UP_LOW: 9000,
        VOTERS_DOWN_HIGH: 18000,
        VOTERS_DOWN_MID: 9000,
        VOTERS_DOWN_LOW: 4500,
    },
    'far-right': {
        neededToWin: 144000,
        VOTERS_UP_HIGH: 24000,
        VOTERS_UP_MID: 12000,
        VOTERS_UP_LOW: 6000,
        VOTERS_DOWN_HIGH: 12000,
        VOTERS_DOWN_MID: 6000,
        VOTERS_DOWN_LOW: 3000,
    },
    centrist: {
        neededToWin: 324000,
        VOTERS_UP_HIGH: 54000,
        VOTERS_UP_MID: 27000,
        VOTERS_UP_LOW: 13500,
        VOTERS_DOWN_HIGH: 27000,
        VOTERS_DOWN_MID: 13500,
        VOTERS_DOWN_LOW: 6750,
    }
}

export const terminologyDefinitions = {
    "Campaign": "Campaign",
    "Funding": "Funding",
    "Corruption": "Corruption",
    "Strike": "Strike",
    "LGBT+": "LGBT+",
    "Espionage": "Espionage",
    "Go Viral": "Go Viral",
    "Fake Video": "Fake Video",
    "Leader of Political Party": "Leader of Political Party",
    "Activist": "Activist",
    "Minority": "Minority",
    "Refugees": "Refugees"
}


export const trivia = [
    "trivia1",
    "trivia2",
    "trivia3",
    "trivia4",
    "trivia5",
    "trivia6",
    "trivia7",
    "trivia8",
    "trivia9",
    "trivia10",
    "trivia11",
    "trivia12",
    "trivia13",
    "trivia14",
    "trivia15",
    "trivia16",
    "trivia17",
    "trivia18",
    "trivia19",
    "trivia20",
    "trivia21",
    "trivia22",
    "trivia23",
    "trivia24",
    "trivia25",
]


export function getAllQuestions(politicalParty) {

    return [
        {
            "topic": "FUNDING",
            "title": "fundingTitle",
            "image": "/game/FUNDING.png",
            "description": "fundingDescription",
            "options": [
                {
                    "option": "fundingOption1title",
                    "justification": "fundingOption1justification",
                    "followup": {
                        "money": 1000,
                        "voters": 0,
                        "integrity": -20
                    }
                },
                {
                    "option": "fundingOption2title",
                    "justification": "fundingOption2justification",
                    "followup": {
                        "money": 500,
                        "voters": 0,
                        "integrity": 0
                    }
                },
                {
                    "option": "fundingOption3title",
                    "justification": "fundingOption3justification",
                    "followup": {
                        "money": 300,
                        "voters": 0,
                        "integrity": 5
                    }
                }
            ]
        },
        {
            "topic": "SCANDAL",
            "image": "/game/SCANDAL.png",
            "title": "scandalTitle",
            "description": "scandalDescription",
            "options": [
                {
                    "option": "scandalOption1title",
                    "justification": "scandalOption1justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_MID,
                        "integrity": 10
                    }
                },
                {
                    "option": "scandalOption2title",
                    "justification": "scandalOption2justification",
                    "followup": {
                        "money": -200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": 0
                    }
                },
                {
                    "option": "scandalOption3title",
                    "justification": "scandalOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_LOW,
                        "integrity": 0
                    }
                }
            ]
        },
        {
            "topic": "DISASTER",
            "image": "/game/DISASTER.png",
            "title": "disasterTitle",
            "description": "disasterDescription",
            "options": [
                {
                    "option": "disasterOption1title",
                    "justification": "disasterOption1justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 10
                    }
                },
                {
                    "option": "disasterOption2title",
                    "justification": "disasterOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": -10
                    }
                },
                {
                    "option": "disasterOption3title",
                    "justification": "disasterOption3justification",
                    "followup": {
                        "money": -500,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": 10
                    }
                }
            ]
        },
        {
            "topic": "GOOD_MESSAGE",
            "image": "/game/GOOD_MESSAGE.png",
            "title": "goodMessageTitle",
            "description": "goodMessageDescription",
            "options": [
                {
                    "option": "goodMessageOption1title",
                    "justification": "goodMessageOption1justification",
                    "followup": {
                        "money": -200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": -10
                    }
                },
                {
                    "option": "goodMessageOption2title",
                    "justification": "goodMessageOption2justification",
                    "followup": {
                        "money": -400,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 20
                    }
                },
                {
                    "option": "goodMessageOption3title",
                    "justification": "goodMessageOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": -10
                    }
                },
            ]
        },
        {
            "topic": "VIDEO_BAR",
            "title": "videoBarTitle",
            "image": "/game/VIDEO_BAR.png",
            "description": "videoBarDescription",
            "options": [
                {
                    "option": "videoBarOption1title",
                    "justification": "videoBarOption1justification",
                    "followup": {
                        "money": -300,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": 20
                    }
                },
                {
                    "option": "videoBarOption2title",
                    "justification": "videoBarOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 5
                    }
                },
                {
                    "option": "videoBarOption3title",
                    "justification": "videoBarOption3justification",
                    "followup": {
                        "money": 200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 0
                    }
                },
            ]
        },
        {
            "topic": "DATA_LEAK",
            "image": "/game/DATA_LEAK.png",
            "title": "dataLeakTitle",
            "description": "dataLeakDescription",
            "options": [
                {
                    "option": "dataLeakOption1title",
                    "justification": "dataLeakOption1justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_HIGH,
                        "integrity": 10
                    }
                },
                {
                    "option": "dataLeakOption2title",
                    "justification": "dataLeakOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": -5
                    }
                },
                {
                    "option": "dataLeakOption3title",
                    "justification": "dataLeakOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": -10
                    }
                }
            ]
        }
    ]
}

export function firstQuestionsLeft(politicalParty) {
    return [
        {
            "topic": "AFRICAN_IMPORTS_LEFT",
            "image": "/game/AFRICAN_IMPORTS.png",
            "title": "africanImportsLeftTitle",
            "description": "africanImportsLeftDescription",
            "options": [
                {
                    "option": "africanImportsLeftOption1title",
                    "justification": "africanImportsLeftOption1justification",
                    "followup": {
                        "money": -200,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "africanImportsLeftOption2title",
                    "justification": "africanImportsLeftOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "africanImportsLeftOption3title",
                    "justification": "africanImportsLeftOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": 5
                    }
                }
            ]
        },
        {
            "topic": "LGBT_INTERVIEW_LEFT",
            "image": "/game/LGBT_INTERVIEW.png",
            "title": "lgbtInterviewLeftTitle",
            "description": "lgbtInterviewLeftDescription",
            "options": [
                {
                    "option": "lgbtInterviewLeftOption1title",
                    "justification": "lgbtInterviewLeftOption1justification",
                    "followup": {
                        "money": 100,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "lgbtInterviewLeftOption2title",
                    "justification": "lgbtInterviewLeftOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_LOW,
                        "integrity": 0
                    }
                },
                {
                    "option": "lgbtInterviewLeftOption3title",
                    "justification": "lgbtInterviewLeftOption3justification",
                    "followup": {
                        "money": -100,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_MID,
                        "integrity": 0
                    }
                }
            ]
        },
        {
            "topic": "ESPIONAGE_LEFT",
            "image": "/game/ESPIONAGE.png",
            "title": "espionageLeftTitle",
            "description": "espionageLeftDescription",
            "options": [
                {
                    "option": "espionageLeftOption1title",
                    "justification": "espionageLeftOption1justification",
                    "followup": {
                        "money": 0,
                        "voters": 0,
                        "integrity": -10
                    }
                },
                {
                    "option": "espionageLeftOption2title",
                    "justification": "espionageLeftOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": 0,
                        "integrity": 10
                    }
                },
                {
                    "option": "espionageLeftOption3title",
                    "justification": "espionageLeftOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": 10
                    }
                }
            ]
        }
    ]
}
export function firstQuestionsRight(politicalParty) {
    return [
        {
            "topic": "AFRICAN_IMPORTS_RIGHT",
            "image": "/game/AFRICAN_IMPORTS.png",
            "title": "africanImportsRightTitle",
            "description": "africanImportsRightDescription",
            "options": [
                {
                    "option": "africanImportsRightOption1title",
                    "justification": "africanImportsRightOption1justification",
                    "followup": {
                        "money": -200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "africanImportsRightOption2title",
                    "justification": "africanImportsRightOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "africanImportsRightOption3title",
                    "justification": "africanImportsRightOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": 5
                    }
                }
            ]
        },
        {
            "topic": "LGBT_INTERVIEW_RIGHT",
            "image": "/game/LGBT_INTERVIEW.png",
            "title": "lgbtInterviewRightTitle",
            "description": "lgbtInterviewRightDescription",
            "options": [
                {
                    "option": "lgbtInterviewRightOption1title",
                    "justification": "lgbtInterviewRightOption1justification",
                    "followup": {
                        "money": 100,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_MID,
                        "integrity": 0
                    }
                },
                {
                    "option": "lgbtInterviewRightOption2title",
                    "justification": "lgbtInterviewRightOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_LOW,
                        "integrity": 0
                    }
                },
                {
                    "option": "lgbtInterviewRightOption3title",
                    "justification": "lgbtInterviewRightOption3justification",
                    "followup": {
                        "money": -100,
                        "voters": partyVoters[politicalParty].VOTERS_UP_HIGH,
                        "integrity": 0
                    }
                }
            ]
        },
        {
            "topic": "ESPIONAGE_RIGHT",
            "image": "/game/ESPIONAGE.png",
            "title": "espionageRightTitle",
            "description": "espionageRightDescription",
            "options": [
                {
                    "option": "espionageRightOption1title",
                    "justification": "espionageRightOption1justification",
                    "followup": {
                        "money": 0,
                        "voters": partyVoters[politicalParty].VOTERS_DOWN_HIGH,
                        "integrity": -10
                    }
                },
                {
                    "option": "espionageRightOption2title",
                    "justification": "espionageRightOption2justification",
                    "followup": {
                        "money": 0,
                        "voters": 0,
                        "integrity": 10
                    }
                },
                {
                    "option": "espionageRightOption3title",
                    "justification": "espionageRightOption3justification",
                    "followup": {
                        "money": 0,
                        "voters": 0,
                        "integrity": 10
                    }
                }
            ]
        }
    ]
}



export function secondQuestionsRight(politicalParty) {
    return [
        {
            "topic": "MARKET_CRASH_RIGHT",
            "image": "/game/MARKET_CRASH_.png",
            "title": "marketCrashRightTitle",
            "description": "marketCrashRightDescription",
            "options": [
                {
                    "option": "marketCrashRightOption1title",
                    "justification": "marketCrashRightOption1justification",
                    "followup": {
                        "money": 1000,
                        "voters": 0,
                        "integrity": 10
                    }
                },
                {
                    "option": "marketCrashRightOption2title",
                    "justification": "marketCrashRightOption2justification",
                    "followup": {
                        "money": 200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": 0
                    }
                },
                {
                    "option": "marketCrashRightOption3title",
                    "justification": "marketCrashRightOption3justification",
                    "followup": {
                        "money": -300,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": -10
                    }
                },
            ]
        }
    ]
}

export function secondQuestionsLeft(politicalParty) {
    return [
        {
            "topic": "MARKET_CRASH_LEFT",
            "image": "/game/MARKET_CRASH_.png",
            "title": "marketCrashLeftTitle",
            "description": "marketCrashLeftDescription",
            "options": [
                {
                    "option": "marketCrashLeftOption1title",
                    "justification": "marketCrashLeftOption1justification",
                    "followup": {
                        "money": 1000,
                        "voters": 0,
                        "integrity": -10
                    }
                },
                {
                    "option": "marketCrashLeftOption2title",
                    "justification": "marketCrashLeftOption2justification",
                    "followup": {
                        "money": 200,
                        "voters": partyVoters[politicalParty].VOTERS_UP_LOW,
                        "integrity": 0
                    }
                },
                {
                    "option": "marketCrashLeftOption3title",
                    "justification": "marketCrashLeftOption3justification",
                    "followup": {
                        "money": -300,
                        "voters": partyVoters[politicalParty].VOTERS_UP_MID,
                        "integrity": 10
                    }
                },
            ]
        }
    ]
}