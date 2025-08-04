const test = {
  title: "IELTS Listening 11",
  audioUrl: "https://example.com/audio/test2.mp3",
  sections: [
    {
      section: 1,
      audioUrl: audios.lis11Part1,
      parts: [
        {
          part: 1,
          title: "Holiday Cottages and Town Information",
          questions_range: "Questions 1-10",
          description:
            "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          flex: 1,
          type: "note_completion",
          questions: [
            {
              prompt: "Aster Cottage",
              question_text: [
                {
                  number: 1,
                  text: "Available for week beginning 1) * @ *",
                  answer: "",
                },
                {
                  number: 2,
                  text: "Cost for the week: 2) $ * @ *",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Periwinkle Cottage",
              question_text: [
                {
                  number: 3,
                  text: "The same price as Aster Cottage last year",
                  answer: "",
                },
                {
                  number: 3,
                  text: "Part of a building that was first used as a 3) * @ * ",
                  answer: "",
                },
                {
                  number: 4,
                  text: "The living room leads out to the 4) * @ *",
                  answer: "",
                },
                {
                  number: 5,
                  text: "View of the 5) * @ *from the bedroom",
                  answer: "",
                },
                {
                  number: 6,
                  text: "Bring our own 6) * @ *.",
                  answer: "",
                },
                {
                  number: 7,
                  text: "Doesn't have a 7) * @ * ",
                  answer: "",
                },
              ],
            },
            {
              prompt: "The town",
              question_text: [
                {
                  number: 8,
                  text: "The owner recommends the 8) * @ * restaurant",
                  answer: "",
                },
                {
                  number: 8,
                  text: "The town is well know for this antique shopes",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Payment",
              question_text: [
                {
                  number: 9,
                  text: "Deposit: 9)$ * @ *",
                  answer: "",
                },
                {
                  number: 10,
                  text: "Deadline for final payment: final day of 10) * @ *",
                  answer: "",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      section: 2,
      audioUrl: audios.lis11Part2,
      parts: [
        {
          part: 1,
          title: "Questions 11-14",
          description:
            "Choose the correct letter, A, B or C. Bridge to Brisbane Fun Run",
          type: "multiple-choice",
          questions: [
            {
              number: 11,
              question: "On the day of the race the speaker recommends parking",
              type: "multiple-choice",
              options: [
                "in the sports ground",
                "by the river",
                "in the shopping centre",
              ],
              answer: "in the shopping centre",
            },
            {
              number: 12,
              question: "The timing Chip should be attached to",
              type: "multiple-choice",
              options: ["the shirt or singlet", "a shoe", "the wristband"],
              answer: "a shoe",
            },
            {
              number: 13,
              question: "Which group will run first?",
              type: "multiple-choice",
              options: ["yellow", "red", "purple"],
              answer: "red",
            },
            {
              number: 14,
              question:
                "The race organisers still need to find volunteers to help with",
              type: "multiple-choice",
              options: [
                "giving first aid",
                "handing out water",
                "starting the race",
              ],
              answer: "handing out water",
            },
          ],
        },
        {
          part: 2,
          title: "Hotel's outdoor facilities",
          questions_range: "Questions 15–20",
          description:
            "Label the map below.Write the correct letter, A- I, next to questions 15-20.",
          type: "map",
          image: imges.img12,
          questions: [
            {
              number: 15,
              option: "Stage",
              answer: "A",
            },
            {
              number: 16,
              option: "T-shirt Stand",
              answer: "A",
            },
            {
              number: 17,
              option: "Bag Collection Area",
              answer: "B",
            },
            {
              number: 18,
              option: "Information Centre",
              answer: "C",
            },
            {
              number: 19,
              option: "Prize Draw Box",
              answer: "C",
            },
            {
              number: 20,
              option: "Water Station",
              answer: "C",
            },
          ],
        },
      ],
    },
    {
      section: 3,
      audioUrl: audios.lis11Part3,
      parts: [
        {
          part: 1,
          title: "Questions 21-26",
          description:
            "Choose the correct letter, A, B or C.Farmers' attitudes to new developments in agriculture",
          type: "multiple-choice",
          questions: [
            {
              number: 21,
              question:
                "What does Dr Owen advise Joel to include in the title of his project?",
              type: "multiple-choice",
              options: [
                "the location of the farms",
                "the number of farmers",
                "the types of farming",
              ],
              answer: "the location of the farms",
            },
            {
              number: 22,
              question: "Why has Joel decided to do face-to-face interviews?",
              type: "multiple-choice",
              options: [
                "to see the farmers' workplaces",
                "to limit the time he spends on the project",
                "to get fuller answers",
              ],
              answer: "to get fuller answers",
            },
            {
              number: 23,
              question:
                "Joel agrees to investigate how farmers get information on new developments",
              type: "multiple-choice",
              options: [
                "by showing them a series of pictures",
                "by asking them open questions",
                "by sending them a checklist in advance",
              ],
              answer: "by asking them open questions",
            },
            {
              number: 24,
              question:
                "Concerning government communication with farmers, the speakers agree that",
              type: "multiple-choice",
              options: [
                "much of it is irrelevant",
                "it is often insufficient for farmers' needs",
                "the wording is sometimes unclear",
              ],
              answer: "the wording is sometimes unclear",
            },
            {
              number: 25,
              question:
                "According to Joel's reading about the cost of making changes, many British farmers",
              type: "multiple-choice",
              options: [
                "leave investment decisions to their accountants",
                "have too little time to calculate the costs of new methods",
                "are reluctant to spend money on improvements",
              ],
              answer: "are reluctant to spend money on improvements",
            },
            {
              number: 26,
              question:
                "Survey of Australian sheep farmers found that most of them",
              type: "multiple-choice",
              options: [
                "are usually reluctant to make changes",
                "make changes based on limited research",
                "want plenty of evidence before they make changes",
              ],
              answer: "want plenty of evidence before they make changes",
            },
          ],
        },
        {
          part: 2,
          title: "Questions 27–30",
          question:
            "What opinion is expressed about each of the following books?",
          description:
            "Choose FOUR answers from the boy and write the correct letter, A-G, next to questions 27- 30",
          type: "matching",
          items: [
            "It's badly organised.",
            "It's out of date.",
            "It's clear.",
            "It's essential reading.",
            "It's inaccurate.",
            "It's well illustrated.",
            "It's boring.",
          ],
          questions: [
            {
              number: 27,
              option: "Contemporary Farming Manual",
              answer: "",
            },
            {
              number: 28,
              option: "Running a Small Farm",
              answer: "",
            },
            {
              number: 29,
              option: "Agriculture and Economics",
              answer: "",
            },
            {
              number: 30,
              option: "How to Survive in Farming",
              answer: "",
            },
          ],
        },
      ],
    },
    {
      section: 4,
      audioUrl: audios.lis11Part4,
      parts: [
        {
          part: 1,
          title: "Aboriginal Textile Design",
          questions_range: "Questions 31-40",
          description:
            "Complete the notes below.Write ONE WORD ONLY for each answer.",
          flex: 1,
          type: "note_completion",
          questions: [
            {
              prompt: "Ernabella Arts Centre",
              question_text: [
                {
                  number: 31,
                  text: "Artists produce craft and learn new techniques",
                  answer: "",
                },
                {
                  number: 31,
                  text: "Initially, artists produced rugs made from 31) * @ *",
                  answer: "",
                },
                {
                  number: 31,
                  text: "Later artists made batik and screen-printed fabrics",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Tiwi Designs",
              question_text: [
                {
                  number: 32,
                  text: "Early designs included 32) * @ * images",
                  answer: "",
                },
                {
                  number: 33,
                  text: "Designs are linked to traditional beliefs, e.g. Some designs are believed to bring 33) * @ *.",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Jimmy Pike",
              question_text: [
                {
                  number: 34,
                  text: "Inspired by the Australian landscape, especially the 34) * @ *.",
                  answer: "",
                },
                {
                  number: 35,
                  text: "Started creating art when he was in 35) * @ *.",
                  answer: "",
                },
                {
                  number: 36,
                  text: "His textiles were used to make 36) * @ *.",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Bronwyn Bancroft",
              question_text: [
                {
                  number: 37,
                  text: "Her work is a modern look at 37) * @ * and nature",
                  answer: "",
                },
                {
                  number: 38,
                  text: "1995 - painted a successful Aboriginal athlete's jeans with lizards and a 38) * @ *",
                  answer: "",
                },
                {
                  number: 39,
                  text: "2001 - designed a 'Journey of a Nation' parade outfit with part of a 39) * @ * on it",
                  answer: "",
                },
              ],
            },
            {
              prompt: "Copyright Issues",
              question_text: [
                {
                  number: 40,
                  text: "Exploiting Aboriginal imagery affects the artists and the cultural group, e.g. 'The 40) * @ *. Case'",
                  answer: "",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  answers: {
    1: "September 14(th)/September 14",
    2: "835",
    3: "school",
    4: "deck",
    5: "river",
    6: "towel",
    7: "garage",
    8: "Chinese",
    9: "200",
    10: "July",
    11: "A",
    12: "B",
    13: "A",
    14: "B",
    15: "F",
    16: "A",
    17: "B",
    18: "H",
    19: "G",
    20: "I",
    21: "A",
    22: "C",
    23: "B",
    24: "A",
    25: "B",
    26: "B",
    27: "G",
    28: "E",
    29: "D",
    30: "B",
    31: "wool",
    32: "bird",
    33: "rain",
    34: "desert",
    35: "prison",
    36: "clothing",
    37: "family",
    38: "rainbow",
    39: "snake",
    40: "Carpet",
  },
};
