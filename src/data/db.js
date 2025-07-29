import audios from "./audios";
export const tests = [
  {
    title: "IELTS Listening Test 1",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis1Part1,
        parts: [
          {
            part: 1,
            title: "Adventure Camp",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Accommodation:",
                question_text: [
                  {
                    number: 1,
                    text: "•	Tents are provided.",
                  },
                  {
                    number: 1,
                    text: "•	The camp can take up to 1) * @ * people.",
                  },
                ],
              },
              {
                prompt: "Cost:",
                question_text: [
                  {
                    number: 2,
                    text: "2) * @ * for wo days",
                  },
                  {
                    number: 2,
                    text: "•	Transport is not included.",
                  },
                ],
              },
              {
                prompt: "DAY ONE",
                question_text: [
                  {
                    number: 2,
                    text: "",
                  },
                ],
              },
              {
                prompt: "Moming:",
                question_text: [
                  {
                    number: 3,
                    text: "•	A lesson in riding a 3) * @ *",
                  },
                ],
              },
              {
                prompt: "Afternoon:",
                question_text: [
                  {
                    number: 4,
                    text: "•	Go down the river by 4) * @ *",
                  },
                  {
                    number: 5,
                    text: "•	Explore one of the 5) * @ *",
                  },
                  {
                    number: 6,
                    text: "−	(a 6 * @ * is provided)",
                  },
                ],
              },
              {
                prompt: "Evening:",
                question_text: [
                  {
                    number: 7,
                    text: "• Dinner − either a barbecue, 7) * @ * or pizza",
                  },
                  {
                    number: 5,
                    text: "Explore one of the 5) * @ *",
                  },
                  {
                    number: 6,
                    text: "−	(a 6 * @ * is provided)",
                  },
                ],
              },
              {
                prompt: "DAY TWO",
                question_text: [
                  {
                    number: 2,
                    text: "",
                  },
                ],
              },
              {
                prompt: "Evening:",
                question_text: [
                  {
                    number: 8,
                    text: "• Cycle to a 8) * @ * and back",
                  },
                  {
                    number: 8,
                    text: "• Free time",
                  },
                ],
              },
              {
                prompt: "Evening:",
                question_text: [
                  {
                    number: 9,
                    text: "•	Play 9) * @ *",
                  },
                  {
                    number: 10,
                    text: "• Leam how to make 10) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis1Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-15",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "Why are restaurants currently looking for more staff?",
                type: "multiple-choice",
                options: [
                  "Additional staff will be required for the food festival",
                  "They always need extra staff during the summer.",
                  "Greater numbers of people are using restaurants in the area.",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question: "What kind of work are staff most needed for?",
                type: "multiple-choice",
                options: [
                  "kitchen duties",
                  "serving customers",
                  "Administration",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "The speaker says that the working hours will particularly suit people",
                type: "multiple-choice",
                options: [
                  "who are also studying",
                  "who have young families.",
                  "who dislike getting up early",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question:
                  "What skill is particularly important for kitchen staff?",
                type: "multiple-choice",
                options: [
                  "communication with customers",
                  "teamwork",
                  "working with numbers",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question: "What advice does the speaker give about CVs?",
                type: "multiple-choice",
                options: [
                  "Include a recent photo",
                  "Check contact details are up to date.",
                  "List all relevant qualifications",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 16-20",
            question:
              "What comment does the speaker make about each of the following restaurants?",
            description:
              "Choose FIVE answers from the box and wnte the correct letter, A-G, next to questions 16−20",
            type: "matching",
            items: [
              "convenient for public transport",
              "interesting and stylish food",
              "attracts many different types of customer ",
              "recommended by a food website",
              "part of a successful chain",
              "opportunities for longer term employment",
              "accommodation available for staff",
            ],
            questions: [
              {
                number: 16,
                option: "The Tower",
                answer: "A",
              },
              {
                number: 17,
                option: "Beachside",
                answer: "B",
              },
              {
                number: 18,
                option: "Marco's",
                answer: "C",
              },
              {
                number: 19,
                option: "Silveriea",
                answer: "C",
              },
              {
                number: 20,
                option: "The Lion",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis1Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-24",
            description:
              "Choose the correct letter, A, B or C.<br/> Bachelor of Communications Degree",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question: "Simon thinks the Global Communications major",
                type: "multiple-choice",
                options: [
                  "Will help him get work in Other countries.",
                  "has easier courses than the Public Relations major. ",
                  "could lead to a well−paid job in New Zealand.",
                ],
                answer: "Library",
              },
              {
                number: 22,
                question: "Simon says that the Economic Principles course was",
                type: "multiple-choice",
                options: [
                  "too challenging for him.",
                  "uninteresting as a subject.",
                  "similar to other courses on the major.",
                ],
                answer: "Library",
              },
              {
                number: 23,
                question: "23	Anna thinks that the foreign language courses",
                type: "multiple-choice",
                options: [
                  "give students a better understanding of the whole major ",
                  "are less useful than the courses dealing with culture.",
                  "should remain optional to students.",
                ],
                answer: "Library",
              },
              {
                number: 24,
                question:
                  "24	What reason does Anna give for her choice of foreign language?",
                type: "multiple-choice",
                options: [
                  "It was a language she had previously studied.",
                  "It would enable her to travel..",
                  "It could be useful in commerce.",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 25-26",
            question:
              "Which TWO things do Anna and Simon both appreciate about their lecturers?",
            description: "Choose TWO letters, A−E",
            type: "matching",
            items: [
              "They encourage freedom of thought",
              "They help individual students in seminars.",
              "They are willing to adapt courses",
              "They are enthusiastic about their subject",
              "They encourage students to improve.",
            ],
            questions: [
              {
                number: 25,
                option: "",
                answer: "A",
              },
              {
                number: 26,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 27-30",
            question: "Which skills are developed in the following courses?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A-F, next to questions 27−30.",
            type: "matching",
            items: [
              "making decisions under pressure ",
              "working in large groups",
              "reducing problems between co−workers",
              "talking in public",
              "understanding cultural differences ",
              "using logical argument",
            ],
            questions: [
              {
                number: 27,
                option: "Communication 1",
                answer: "A",
              },
              {
                number: 28,
                option: "Psychology",
                answer: "B",
              },
              {
                number: 29,
                option: "Interpersonal Skills",
                answer: "B",
              },
              {
                number: 30,
                option: "Communication 3",
                answer: "B",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis1Part4,
        parts: [
          {
            part: 1,
            title: "Spices",
            questions_range: "Questions 31-34",
            description: "Write ONE WORD ONLY for each answer",
            type: "sentence_completion",
            questions: [
              {
                number: 31,
                question_text:
                  "The ancient Greeks and Romans used spices in cooking food and also in the preparation of * @ *",
              },
              {
                number: 32,
                question_text:
                  "The ancient Romans used certain spices to display their* @ *",
              },
              {
                number: 33,
                question_text:
                  "The search for spices contributed to the * @ * of the New World.",
              },
              {
                number: 34,
                question_text:
                  "Spices were used as medicine and it was also believed they could change a person's * @ *",
              },
            ],
          },
          {
            part: 2,
            title: "",
            questions_range: "Questions 35-37",
            description: "Write NO MORE THAN TWO WORDS for each answer.",
            type: "table_completion",
            columns: ["Spice", "Health uses", "Other uses"],
            rows: [
              {
                number: 35,
                values: ["Nutmeg", "to treat colds", ""],
              },
              {
                number: 35,
                values: ["", "to reduce the pain of 35) * @ *", ""],
              },
              {
                number: 36,
                values: [
                  "Peppercorns",
                  "to treat rheumatism",
                  "to take the place of 36) * @ *.",
                ],
              },
              {
                number: 37,
                values: ["Bumt spices", "", "to hide domestic 37) * @ *."],
              },
            ],
          },
          {
            part: 3,
            title: "Importing spices into Europe",
            questions_range: "Questions 38-40",
            description: "Write NO MORE THAN TWO WORDS for each answer.",
            type: "sentence_completion",
            questions: [
              {
                number: 38,
                question_text: "•	greatest expense: * @ * costs",
              },
              {
                number: 39,
                question_text:
                  "•	demand for spices led to development of the European * @ * industry",
              },
              {
                number: 40,
                question_text: "•	cities received valuable * @ * from merchants",
              },
            ],
          },
        ],
      },
    ],
    answers: {},
  },
  {
    title: "IELTS Listening  2",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis2Part1,
        parts: [
          {
            part: 1,
            title: "Coxhead Motorhome",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Representative: \t \t Dave Sparrow",
                question_text: [
                  {
                    number: 1,
                    text: "Model of motorhome recommended: 'Two berth end kitchen' Cost £545 - £755 per week",
                  },
                  {
                    number: 1,
                    text: "Damage deposit: 1) £ * @ * (for drivers of 21 - 25).",
                  },
                  {
                    number: 2,
                    text: "No charge for an 2) * @ * driver",
                  },
                  {
                    number: 3,
                    text: "An 3) * @ * driving licence is acceptable",
                  },
                  {
                    number: 3,
                    text: "All vehicles are under 30 months old",
                  },
                  {
                    number: 4,
                    text: "All motorhomes have 4) * @  * gearboxes",
                  },
                  {
                    number: 5,
                    text: "Customers' 5) * @ * are allowed",
                  },
                ],
              },
              {
                prompt: "Facilities:",
                question_text: [
                  {
                    number: 6,
                    text: "All cooking facilities including a 6) * @ * and a microwave",
                  },
                  {
                    number: 7,
                    text: "A 7) * @ * (new this year)",
                  },
                  {
                    number: 7,
                    text: "Satellite navigation system",
                  },
                  {
                    number: 8,
                    text: "A 8) * @ * rack",
                  },
                  {
                    number: 9,
                    text: "Electricity: mains hook-up or can hire a 9) * @ *",
                  },
                ],
              },
              {
                prompt: "Collection",
                question_text: [
                  {
                    number: 10,
                    text: "Nearest station: 10 * @ *(customers can be picked up from there)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis2Part2,
        parts: [
          {
            part: 2,
            title: "Questions 11-16",
            question:
              "What information does the woman give about the following events at the Citadel theatre?",
            description:
              "Choose SIX answers from the box and write the correct letter, A-H, next to questions 11-16.",
            type: "matching",
            items: [
              "adapted from a film",
              "audience are invited on stage",
              "enjoyed by young children",
              "features a local actor",
              "fully booked",
              "not suitable for everyone",
              "recently performed abroad",
              "very few tickets available",
            ],
            questions: [
              {
                number: 11,
                option: "Comedy Shop",
                answer: "A",
              },
              {
                number: 12,
                option: "Seekers",
                answer: "B",
              },
              {
                number: 13,
                option: "The Hidden Box",
                answer: "C",
              },
              {
                number: 14,
                option: "Night Shift",
                answer: "C",
              },
              {
                number: 15,
                option: "John Dory",
                answer: "C",
              },
              {
                number: 16,
                option: "Vital Signs",
                answer: "C",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17-20",
            description:
              "Choose the correct letter, A, B or C.\n Youth Arts Festival",
            type: "multiple-choice",
            questions: [
              {
                number: 17,
                question:
                  "When will the programme for the Youth Arts Festival be finalised?",
                options: [
                  "the middle of March",
                  "the end of April",
                  "the beginning of August",
                ],
                answer: "Library",
              },
              {
                number: 18,
                question:
                  "An application to put on a performance at the festival must include",
                options: [
                  "a DVD of the performance.",
                  "a short summary of the performance.",
                  "details of costumes and music used in the performance.",
                ],
                answer: "Library",
              },
              {
                number: 19,
                question:
                  "The winner of the play-writing competition will be offered the chance to",
                options: [
                  "take part in their own play",
                  "have their play show on TV ",
                  "direct their play at the festival",
                ],
                answer: "Library",
              },
              {
                number: 20,
                question: "What is unusual about the production of 'Calcamon'?",
                options: [
                  "Actors use invented language.",
                  "There is no script.",
                  "The actors change roles in the performance",
                ],
                answer: "Library",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis2Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-25",
            description:
              "Choose the correct letter, A, B or C \n Assignment on multinational companies",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question:
                  "The tutor points out to Lara that in different markets, a brand of chocolate",
                type: "multiple-choice",
                options: [
                  "has different proportions of the ingredients.",
                  "uses different methods of advertising",
                  "is sold at different prices.",
                ],
                answer: "Library",
              },
              {
                number: 22,
                question:
                  "Which aim of global marketing has Lara explained very clearly?",
                type: "multiple-choice",
                options: [
                  "making profit",
                  "maximising sales",
                  "expanding production",
                ],
                answer: "Library",
              },
              {
                number: 23,
                question:
                  "The tutor gives the example of the supermarket chain to show how companies",
                type: "multiple-choice",
                options: [
                  "can use new advertising methods to bring new business.",
                  "may fail to take local values into consideration. ",
                  "need time to build up their reputation.",
                ],
                answer: "Library",
              },
              {
                number: 24,
                question:
                  "Lara believes that some multinational companies can be criticised for",
                type: "multiple-choice",
                options: [
                  "offering poor working conditions locally.",
                  "failing to improve machinery.",
                  "replacing local managers.",
                ],
                answer: "Library",
              },
              {
                number: 25,
                question:
                  "Which aspect of distribution does Lara want to read about?",
                type: "multiple-choice",
                options: ["delivery times", "stock control", "centralisation"],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 26-30",
            question:
              "Which topic can be found in each of the following case studies?",
            description:
              "Choose FIVE answers from the box and write the correct letter, A-F, next to questions 26-30",
            type: "matching",
            items: [
              "bargaining power",
              "changing suppliers",
              "location of head office",
              "mergers",
              "size of workforce",
              "timing of going global",
            ],
            questions: [
              {
                number: 26,
                option: "Drummonds",
                answer: "A",
              },
              {
                number: 27,
                option: "Multiplan",
                answer: "B",
              },
              {
                number: 28,
                option: "Elbeys",
                answer: "C",
              },
              {
                number: 29,
                option: "Babbis",
                answer: "C",
              },
              {
                number: 30,
                option: "Emerson",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis2Part4,
        parts: [
          {
            part: 1,
            title: "Soundscapes",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below.\n Write ONE WORD ONLY for each answer",
            type: "note_completion",
            flex: 1,
            questions: [
              {
                prompt: "Soundscape - the sound environment:",
                question_text: [
                  {
                    number: 31,
                    text: "•	the term was first used by a Canadian, Murray Schafer, a well-known 31 * @ *",
                  },
                  {
                    number: 32,
                    text: "•	the soundscape is not just noise, but has 32 * @ * which can beinterpreted",
                  },
                  {
                    number: 32,
                    text: "• divisions of the soundscape",
                  },
                  {
                    number: 33,
                    text: "-	biophony - created by living organisms, e.g. 33 * @ *",
                  },
                  {
                    number: 34,
                    text: "-geophony - caused by non-biological forces, e.g. 34 * @ *",
                  },
                  {
                    number: 34,
                    text: "-	anthrophony - made by humans",
                  },
                ],
              },
              {
                prompt: "Conclusions of Bernie Krause:",
                question_text: [
                  {
                    number: 35,
                    text: "every sound in nature has a unique 35 * @ * ",
                  },
                  {
                    number: 36,
                    text: "the sounds of nature are harmonious in 36 * @ *",
                  },
                ],
              },
              {
                prompt: "Soundscape changes can be",
                question_text: [
                  {
                    number: 37,
                    text: "an indication of a change in the 37 * @ * of an environment",
                  },
                  {
                    number: 38,
                    text: "a warning of the presence of different types of 38 * @ * , e.g.insecticides",
                  },
                ],
              },
              {
                prompt: "Equipment used in the study of soundscapes:",
                question_text: [
                  {
                    number: 39,
                    text: "•		acoustic recorders - data are used to create 39 * @ * in 3-D ",
                  },
                ],
              },
              {
                prompt: "Most common query:",
                question_text: [
                  {
                    number: 4,
                    text: "•	What is the noisiest creature?",
                  },
                  {
                    number: 40,
                    text: "Answer: probably a particular kind of 40 * @ * which lives in the ocean ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "460",
      2: "extra",
      3: "international",
      4: "manual",
      5: "pets",
      6: "fridge",
      7: "television",
      8: "bicycle",
      9: "generator",
      10: "Grateley",
      11: "B",
      12: "E",
      13: "C",
      14: "F",
      15: "G",
      16: "A",
      17: "B",
      18: "B",
      19: "A",
      20: "A",
      21: "A",
      22: "B",
      23: "B",
      24: "C",
      25: "C",
      26: "C",
      27: "F",
      28: "A",
      29: "E",
      30: "B",
      31: "composer",
      32: "meaning",
      33: "frogs",
      34: "rain",
      35: "signature",
      36: "loudness",
      37: "climate",
      38: "pollution",
      39: "maps",
      40: "shrimp",
    },
  },
  {
    title: "IELTS Listening  3",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis3Part1,
        parts: [
          {
            part: 1,
            title: "Advice on family visit",
            questions_range: "Questions 1-10",
            description:
              "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Accommodation:",
                question_text: [
                  {
                    number: 1,
                    text: "1) * @ * Hotel on George Street",
                  },
                  {
                    number: 2,
                    text: "cost of family room per night: 2) £ * @ * 2 (approx.)",
                  },
                ],
              },
              {
                prompt: "Recommended trips:",
                question_text: [
                  {
                    number: 3,
                    text: "-a 3) * @ * tour of the city centre (starts in Carlton Square)",
                  },
                  {
                    number: 4,
                    text: "-a trip by 4) * @ * to the old fort",
                  },
                ],
              },
              {
                prompt: "Science Museum",
                question_text: [
                  {
                    number: 5,
                    text: "best day to visit: 5 * @ *",
                  },
                  {
                    number: 6,
                    text: "see the exhibition about 6 * @ * which opens soon",
                  },
                ],
              },
              {
                prompt: "Food:",
                question_text: [
                  {
                    number: 7,
                    text: "Clacton Market:",
                  },
                  {
                    number: 7,
                    text: "-good for 7) * @ * food",
                  },
                  {
                    number: 8,
                    text: "-need to have lunch before 8) * @ * p.m.",
                  },
                ],
              },
              {
                prompt: "Theatre tickets:",
                question_text: [
                  {
                    number: 9,
                    text: "save up to 9) * @ * % on ticket prices at bargaintickets.com",
                  },
                ],
              },
              {
                prompt: "Free activities:",
                question_text: [
                  {
                    number: 10,
                    text: "Blakewell Gardens: \n ",
                  },
                  {
                    number: 10,
                    text: "-Roots Music Festival",
                  },
                  {
                    number: 10,
                    text: "-climb Telegraph Hill to see a view of the 10) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis3Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-12",
            question:
              "Which TWO things does the speaker say about visiting the football stadium with children?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "Children can get their photo taken with a football player",
              "There is a competition for children today",
              "Parents must stay with their children at all times",
              "Children will need sunhats and drinks",
              "The café has a special offer on meals for children",
            ],
            questions: [
              {
                number: 11,
                option: "",
                answer: "A",
              },
              {
                number: 12,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 13-14",
            question:
              "Which TWO features of the stadium tour are new this year?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "VIP tour",
              "360 cinema experience",
              "360 cinema experience",
              "dressing room tour",
              "tours in other languages",
            ],
            questions: [
              {
                number: 13,
                option: "",
                answer: "A",
              },
              {
                number: 14,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 15-20",
            question:
              "Which event in the history of football in the UK took place in each of the following years?",
            description:
              "Choose SIX answers from the box and write the correct letter, A-H, next toQuestions 15–20",
            type: "matching",
            items: [
              "the introduction of pay for the players",
              "a change to the design of the goal",
              "the first use of lights for matches",
              "the introduction of goalkeepers",
              "the first international match",
              "two changes to the rules of the game",
              "the introduction of a fee for spectators",
              "an agreement on the length of a game",
            ],
            questions: [
              {
                number: 15,
                option: "1870",
                answer: "A",
              },
              {
                number: 16,
                option: "1874",
                answer: "B",
              },
              {
                number: 17,
                option: "1875",
                answer: "A",
              },
              {
                number: 18,
                option: "1877",
                answer: "B",
              },
              {
                number: 19,
                option: "1878",
                answer: "A",
              },
              {
                number: 20,
                option: "1880",
                answer: "B",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis3Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-22",
            question:
              "Which TWO benefits for children of learning to write did both students find surprising?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "improved fine motor skills",
              "improved memory",
              "improved concentration",
              "improved imagination",
              "improved spatial awareness",
            ],
            questions: [
              {
                number: 21,
                option: "",
                answer: "A",
              },
              {
                number: 22,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 23-24",
            question:
              "For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "not spacing letters correctly",
              "not writing in a straight line",
              "applying too much pressure when writing",
              "applying too much pressure when writing",
              "writing very slowly",
            ],
            questions: [
              {
                number: 23,
                option: "",
                answer: "A",
              },
              {
                number: 24,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 25-30",
            description: "Choose the correct letter, A, B or C ",
            type: "multiple-choice",
            questions: [
              {
                number: 25,
                question:
                  "What does the woman say about using laptops to teach writing to children with dyslexia?",
                type: "multiple-choice",
                options: [
                  "Children often lack motivation to learn that way",
                  "Children become fluent relatively quickly",
                  "Children react more positively if they make a mistake",
                ],
                answer: "Library",
              },
              {
                number: 26,
                question:
                  "When discussing whether to teach cursive or print writing, the woman thinks that",
                type: "multiple-choice",
                options: [
                  "cursive writing disadvantages a certain group of children",
                  "print writing is associated with lower academic performance",
                  "most teachers in the UK prefer a traditional approach to handwriting",
                ],
                answer: "Library",
              },
              {
                number: 27,
                question:
                  "According to the students, what impact does poor handwriting have on exam performance?",
                type: "multiple-choice",
                options: [
                  "There is evidence to suggest grades are affected by poor handwriting",
                  "Neat handwriting is less important now than it used to be ",
                  "Candidates write more slowly and produce shorter answers",
                ],
                answer: "Library",
              },
              {
                number: 28,
                question:
                  "What prediction does the man make about the future of handwriting?",
                type: "multiple-choice",
                options: [
                  "Touch typing will be taught before writing by hand",
                  "Children will continue to learn to write by hand",
                  "People will dislike handwriting on digital devices",
                ],
                answer: "Library",
              },
              {
                number: 29,
                question:
                  "The woman is concerned that relying on digital devices has made it difficult for her to",
                type: "multiple-choice",
                options: [
                  "take detailed notes",
                  "spell and punctuate",
                  "read old documents",
                ],
                answer: "Library",
              },
              {
                number: 30,
                question:
                  "How do the students feel about their own handwriting?",
                type: "multiple-choice",
                options: [
                  "concerned they are unable to write quickly",
                  "embarrassed by comments made about it",
                  "regretful that they have lost the habit",
                ],
                answer: "Library",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis3Part4,
        parts: [
          {
            part: 1,
            title: "Research in the area around the Chembe Bird Sanctuary",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "The importance of birds of prey to local communities:",
                question_text: [
                  {
                    number: 31,
                    text: "They destroy 31) * @ * and other rodents",
                  },
                  {
                    number: 32,
                    text: "They help prevent farmers from being bitten by 32) * @ * ",
                  },
                  {
                    number: 32,
                    text: "They have been an important part of local culture for many years",
                  },
                  {
                    number: 33,
                    text: "They now support the economy by encouraging 33) * @ * in the area ",
                  },
                ],
              },
              {
                prompt: "Falling numbers of birds of prey:",
                question_text: [
                  {
                    number: 34,
                    text: "The birds may be accidentally killed",
                  },
                  {
                    number: 34,
                    text: "-By 34) * @ * when hunting or sleeping.",
                  },
                  {
                    number: 35,
                    text: "-By electrocution from power lines, especially during times of high 35) * @ * ",
                  },
                  {
                    number: 36,
                    text: "Local farmers may illegally shoot them or 36) * @ * them",
                  },
                ],
              },
              {
                prompt: "Ways of protecting chickens from birds of prey",
                question_text: [
                  {
                    number: 37,
                    text: "Ways of protecting chickens from birds of prey",
                  },
                  {
                    number: 37,
                    text: "Providing a 37) * @ * for chickens (expensive).",
                  },
                  {
                    number: 38,
                    text: "Frightening birds of prey by:",
                  },
                  {
                    number: 38,
                    text: "-Keeping a 38) * @ * .",
                  },
                  {
                    number: 39,
                    text: "-Making a 39) * @ * (e.g., with metal objects).",
                  },
                  {
                    number: 40,
                    text: "A 40 * @ * of methods is usually most effective",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "Kings",
      2: "125",
      3: "walking",
      4: "boat",
      5: "Tuesday",
      6: "space",
      7: "vegetarian",
      8: "2.3",
      9: "75",
      10: "port",
      11: "B",
      12: "B",
      13: "A",
      14: "A",
      15: "D",
      16: "F",
      17: "B",
      18: "H",
      19: "C",
      20: "G",
      21: "C/E",
      22: "C/E",
      23: "A/C",
      24: "A/C",
      25: "C",
      26: "A",
      27: "A",
      28: "B",
      29: "B",
      30: "C",
      31: "rats",
      32: "snakes",
      33: "tourism",
      34: "traffic",
      35: "rain",
      36: "poison",
      37: "building",
      38: "dog",
      39: "noise",
      40: "combination",
    },
  },
];
