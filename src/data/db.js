import audios from "./audios";
import imges from "./imges";

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
  {
    title: "IELTS Listening  4",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis4Part1,
        parts: [
          {
            part: 1,
            title: "Furniture Rental Companies",
            questions_range: "Questions 1–10",
            description:
              "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer",
            type: "table_completion",
            object: 1,
            columns: [
              "Name of company",
              "Information about costs",
              "Additional notes",
            ],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 1,
                      text: "Peak Rentals",
                    },
                  ],
                  [
                    {
                      number: 1,
                      text: "Prices range from $105 to$ 1) * @ * per room per month",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "The furniture is very 2) * @ *",
                    },
                    {
                      number: 2,
                      text: "Delivers in 1–2 days ",
                    },
                    {
                      number: 2,
                      text: "Special offer:",
                    },
                    {
                      number: 3,
                      text: "free 3) * @ * with every living room set",
                    },
                  ],
                  ,
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 4,
                      text: "4) * @ * and Oliver",
                    },
                  ],
                  [
                    {
                      number: 5,
                      text: "Mid-range prices 12% monthly fee for 5) * @ *",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "Also offers a cleaning service",
                    },
                  ],
                  ,
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 6,
                      text: "Larch Furniture",
                    },
                  ],
                  [
                    {
                      number: 6,
                      text: "Offers cheapest prices for renting and 6) * @ * items ",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "Must have own 7) * @ * Minimum contract length: six months",
                    },
                  ],
                  ,
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 8,
                      text: "8) * @ * Rentals",
                    },
                  ],
                  [
                    {
                      number: 9,
                      text: "See the 9) * @ * for the most up-to-date prices",
                    },
                  ],
                  [
                    {
                      number: 10,
                      text: "10) * @ * are allowed within 7 days of delivery ",
                    },
                  ],
                  ,
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis4Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11–16",
            description: "Choose the correct letter, A, B or C",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "Who was responsible for starting the community project?",
                type: "multiple-choice",
                options: [
                  "the castle owners",
                  "a national charity ",
                  "the local council",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question: "12	How was the gold coin found?",
                type: "multiple-choice",
                options: [
                  "Heavy rain had removed some of the soil.",
                  "The ground was dug up by wild rabbits.",
                  "A person with a metal detector searched the area.",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "What led the archaeologists to believe there was an ancient village on this site?",
                type: "multiple-choice",
                options: [
                  "the lucky discovery of old records",
                  "the bases of several structures visible in the grass ",
                  "the unusual stones found near the castle",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question: "What are the team still hoping to find?",
                type: "multiple-choice",
                options: [
                  "everyday pottery",
                  "animal bones",
                  "pieces of jewellery",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question:
                  "What was found on the other side of the river to the castle?",
                type: "multiple-choice",
                options: [
                  "the remains of a large palace",
                  "the outline of fields",
                  "a number of small huts",
                ],
                answer: "Library",
              },
              {
                number: 16,
                question:
                  "What do the team plan to do after work ends this summer?",
                type: "multiple-choice",
                options: [
                  "prepare a display for a museum",
                  "take part in a television programme",
                  "start to organise school visits",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Bidcaster Archaeological Dig",
            questions_range: "Questions 17–20",
            description:
              "Label the map below.Drag the correct letter, A–G, next to Questions 17–20",
            type: "map",
            image: imges.img4,
            questions: [
              {
                number: 17,
                option: "bridge foundations",
                answer: "A",
              },
              {
                number: 18,
                option: "rubbish pit",
                answer: "B",
              },
              {
                number: 19,
                option: "meeting hall",
                answer: "C",
              },
              {
                number: 20,
                option: "fish pond",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis4Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-26",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question: "Finn was pleased to discover that their topic",
                type: "multiple-choice",
                options: [
                  "was not familiar to their module leader.",
                  "had not been chosen by other students",
                  "did not prove to be difficult to research.",
                ],
                answer: "Library",
              },
              {
                number: 22,
                question:
                  "Maya says a mistaken belief about theatre programmes is that",
                type: "multiple-choice",
                options: [
                  "theatres pay companies to produce them.",
                  "few theatre-goers buy them nowadays.",
                  "hey contain far more adverts than previously.",
                ],
                answer: "Library",
              },
              {
                number: 23,
                question:
                  "Finn was surprised that, in early British theatre, programmes",
                type: "multiple-choice",
                options: [
                  "were difficult for audiences to obtain",
                  "were given out free of charge",
                  "were seen as a kind of contract",
                ],
                answer: "Library",
              },
              {
                number: 24,
                question:
                  "Maya feels their project should include an explanation of why companies of actors",
                type: "multiple-choice",
                options: [
                  "promoted their own plays.",
                  "performed plays outdoors",
                  "had to tour with their plays",
                ],
                answer: "Library",
              },
              {
                number: 25,
                question:
                  "Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century",
                type: "multiple-choice",
                options: [
                  "were more original",
                  "were more colourful.",
                  "were more informative",
                ],
                answer: "Library",
              },
              {
                number: 26,
                question:
                  "Maya doesn’t fully understand why, in the twentieth century,",
                type: "multiple-choice",
                options: [
                  "very few theatre programmes were printed in the USA",
                  "British theatre programmes failed to develop for so long",
                  "theatre programmes in Britain copied fashions from the USA.",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 27-30",
            question:
              "What comment is made about the programme for each of the following shows?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A–F, next to Questions 27–30.",
            type: "matching",
            items: [
              "Its origin is somewhat controversial.",
              "It is historically significant for a country",
              "It was effective at attracting audiences.",
              "It is included in a recent project",
              "It contains insights into the show.",
              "It resembles an artwork.",
            ],
            questions: [
              {
                number: 27,
                option: "Ruy Blas",
                answer: "A",
              },
              {
                number: 28,
                option: "Man of La Mancha",
                answer: "B",
              },
              {
                number: 29,
                option: "The Tragedy of Jane Shore",
                answer: "C",
              },
              {
                number: 30,
                option: "The Sailors’ Festival",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis4Part4,
        parts: [
          {
            part: 1,
            title: "Inclusive design",
            questions_range: "Questions 31–40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Definition:",
                question_text: [
                  {
                    number: 31,
                    text: "Designing products that can be accessed by a diverse range of people without the need for any 31) * @ *",
                  },
                  {
                    number: 32,
                    text: "Not the same as universal design: that is design for everyone, including catering for people with 32) * @ * problems.",
                  },
                ],
              },
              {
                prompt: "Examples of inclusive design:",
                question_text: [
                  {
                    number: 33,
                    text: "33) * @ * which are adjustable, avoiding back or neck problems",
                  },
                  {
                    number: 34,
                    text: "34) * @ * in public toilets which are easier to use ",
                  },
                  {
                    number: 34,
                    text: "To assist the elderly:",
                  },
                  {
                    number: 35,
                    text: "-designers avoid using 35) * @ * in interfaces",
                  },
                  {
                    number: 36,
                    text: "-people can make commands using a mouse, keyboard or their 36) * @ *",
                  },
                ],
              },
              {
                prompt: "Impact of non-inclusive designs",
                question_text: [
                  {
                    number: 2,
                    text: "Access",
                  },
                  {
                    number: 2,
                    text: "-Loss of independence for disabled people.",
                  },
                  {
                    number: 2,
                    text: "Safety",
                  },
                  {
                    number: 37,
                    text: "-Seatbelts are especially problematic for 37) * @ * women.",
                  },
                  {
                    number: 38,
                    text: "-PPE jackets are often unsuitable because of the size of women’s 38) * @ *",
                  },
                  {
                    number: 39,
                    text: "-PPE for female 39) * @ * officers dealing with emergencies is the worst.",
                  },
                ],
              },
              {
                prompt: "Comfort in the workplace:",
                question_text: [
                  {
                    number: 40,
                    text: "-The 40) * @ * in offices is often too low for women.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "239 / two hundred thirty-nine / two hundred and thirty-nine",
      2: "modern",
      3: "lamp",
      4: "Aaron",
      5: "damage",
      6: "electronic",
      7: "insurance",
      8: "space / Space",
      9: "app",
      10: "exchanges",
      11: "B",
      12: "A",
      13: "A",
      14: "C",
      15: "B",
      16: "C",
      17: "B",
      18: "A",
      19: "G",
      20: "E",
      21: "B",
      22: "A",
      23: "C",
      24: "A",
      25: "C",
      26: "B",
      27: "F",
      28: "E",
      29: "B",
      30: "D",
      31: "adaptation",
      32: "cognitive",
      33: "desks",
      34: "taps",
      35: "blue",
      36: "voice",
      37: "pregnant",
      38: "shoulders",
      39: "police",
      40: "temperature",
    },
  },
  {
    title: "IELTS Listening 5",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis5Part1,
        parts: [
          {
            part: 1,
            title: "Get Away Tours",
            questions_range: "Questions 1-5",
            description:
              "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer",
            type: "sentence_completion",
            questions: [
              {
                number: "",
                question_text: "Office hours: 10am to 7pm",
              },
              {
                number: 1,
                question_text:
                  "Cost of cheapest tour per person is 1) $ * @ * (this month only)",
              },
              {
                number: "",
                question_text: "Price includes accommodation and meals",
              },
              {
                number: 2,
                question_text:
                  "The number of bicycle trips to choose from is 2) * @ *",
              },
              {
                number: 3,
                question_text: "Most tours last a 3) * @ *",
              },
              {
                number: 4,
                question_text:
                  "This company offers 4) * @ * holidays as well as bicycling",
              },
              {
                number: 5,
                question_text: "	Travellers start their trips on 5)  * @ *",
              },
            ],
          },

          {
            part: 2,
            title: "Overview of Bicycling Tours",
            questions_range: "Questions 6–10",
            description:
              "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer",
            type: "table_completion",
            object: 1,
            columns: [
              "",
              "Number of nights",
              "Terrain",
              "	Other attractions",
              "	Accommodation",
            ],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 6,
                      text: "Eastern United States",
                    },
                  ],
                  [
                    {
                      number: 6,
                      text: "6) * @ *",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "Riverside and 7) * @ * trails",
                    },
                  ],
                  [
                    {
                      number: 8,
                      text: "Beautiful homes and 8) * @ *",
                    },
                  ],
                  [
                    {
                      number: 8,
                      text: "Hotels",
                    },
                  ],
                ],
              },
              {
                number: 2,
                values: [
                  [
                    {
                      number: 8,
                      text: "Southern California",
                    },
                  ],
                  [
                    {
                      number: 8,
                      text: "Ten",
                    },
                  ],
                  [
                    {
                      number: 9,
                      text: "Mountain trail and 9) * @ * roads",
                    },
                  ],
                  [
                    {
                      number: 9,
                      text: "Inviting food and good weather",
                    },
                  ],
                  [
                    {
                      number: 10,
                      text: "Hotels and a 10) * @ *",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis5Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-16",
            description:
              "Choose the correct letter, A, B, or C. Sports Information for Parents",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "The school is looking for new team coaches and managers because",
                type: "multiple-choice",
                options: [
                  "the overall interest in sport has grown.",
                  "certain parents have given up these roles",
                  "new types of sport are being introduced.",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question:
                  "What does the speaker say is the most important thing a coach needs?",
                type: "multiple-choice",
                options: [
                  "confidence about the rules of a particular sport",
                  "the ability to make children enthusiastic about a sport",
                  "commitment to training the team for a full season",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "For parents who would like to coach rugby, one requirement is that they",
                type: "multiple-choice",
                options: [
                  "attend an upcoming registration event.",
                  "can commit to two coaching sessions per week",
                  "have their own child in the team.",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question:
                  "In order to get a netball uniform, parents will need to",
                type: "multiple-choice",
                options: [
                  "pay a deposit at school.",
                  "ask the team manager for one",
                  "visit the recommended local sports store.",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Cross country running event",
            questions_range: "Questions 17–20",
            description:
              "Label the map or diagram. Write the correct letter, A-I, next to questions 15-20.",
            type: "map",
            image: imges.img5,
            questions: [
              {
                number: 15,
                option: "Drinks station",
                answer: "A",
              },
              {
                number: 16,
                option: "Crossing point",
                answer: "A",
              },
              {
                number: 17,
                option: "Halfway point",
                answer: "A",
              },
              {
                number: 18,
                option: "First aid",
                answer: "B",
              },
              {
                number: 19,
                option: "Rest area",
                answer: "C",
              },
              {
                number: 20,
                option: "Filming area",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis5Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-24",
            description:
              "Choose the correct letter, A, B, or C. Buildings made of plastic",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question:
                  "Why did buildings made of plastic fail to please the public in the 1960s?",
                type: "multiple-choice",
                options: [
                  "People didn’t think they were good for the environment.",
                  "People didn’t want to live in them",
                  "People didn’t find them visually appealing",
                ],
                answer: "Library",
              },
              {
                number: 22,
                question:
                  "In the 1960s and 1970s, engineers were unable to overcome the problem of",
                type: "multiple-choice",
                options: [
                  "damage caused in the production process.",
                  "the effects of light and water. ",
                  "the potential danger of wind",
                ],
                answer: "Library",
              },
              {
                number: 23,
                question:
                  "Luke and Millie agree to try to get more information about present-day plastics from",
                type: "multiple-choice",
                options: ["journals.", "a PhD student", "websites"],
                answer: "Library",
              },
              {
                number: 24,
                question:
                  "What do Luke and Millie agree about the article by Peterson?",
                type: "multiple-choice",
                options: [
                  "It provided useful examples",
                  "It was easy to understand.",
                  "It was a good introduction to the topic.",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 25-30",
            question:
              "What description applies to each of the following structures?",
            description:
              "Choose SIX answers from the box and write the correct letter, A-G, next to questions 25-30.",
            type: "matching",
            items: [
              "easy to transport",
              "not much room inside",
              "made from recycled materials",
              "designed to promote technology",
              "never actually built F easy to keep clean",
              "very strong construction",
            ],
            questions: [
              {
                number: 25,
                option: "the 'house of the future' (1957)",
                answer: "A",
              },
              {
                number: 26,
                option: "the 'wonderhouse' (1964)",
                answer: "A",
              },

              {
                number: 27,
                option: "spaceship houses (1968-78)",
                answer: "B",
              },
              {
                number: 28,
                option: "foam houses (1979-83)",
                answer: "C",
              },
              {
                number: 29,
                option: "plastic exhibition hall",
                answer: "C",
              },
              {
                number: 30,
                option: "New Zealand house",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis5Part4,
        parts: [
          {
            part: 1,
            title: "Calotype photography in Britain and France",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "From Daguerreotype to Calotype:",
                question_text: [
                  {
                    number: 31,
                    text: "•	Daguerreotype was the first commercial photographic process",
                  },
                  {
                    number: 31,
                    text: "•	Daguerreotype had a problem: the use of copper made it 31) * @ *",
                  },
                  {
                    number: 31,
                    text: "•	William Talbot began looking for an alternative approach in the 1840s.",
                  },
                  {
                    number: 32,
                    text: "•		Talbot was not originally a photographer but an artist who specialised in 32) * @ *",
                  },
                  {
                    number: 32,
                    text: "•		Talbot used paper instead of copper",
                  },
                  {
                    number: 33,
                    text: "•	These calotype photographs were more 33) * @ * because they weren’t so sharp.",
                  },
                ],
              },
              {
                prompt: "French Calotype:",
                question_text: [
                  {
                    number: 2,
                    text: "In 1851, the first society for photographers was created.",
                  },
                  {
                    number: 2,
                    text: "•	Gustave Le Gray became fascinated by calotype photography.",
                  },
                  {
                    number: 34,
                    text: "He carried out experiments and produced the first 34) * @ * using a camera.",
                  },
                  {
                    number: 35,
                    text: "• He developed equipment that was easier to use outside the 35) * @ * ",
                  },
                  {
                    number: 36,
                    text: "Calotype became famous because Le Gray produced 36) * @ * about it.",
                  },
                  {
                    number: 37,
                    text: "People thought photography was more reliable than drawing ",
                  },
                  {
                    number: 37,
                    text: "It was used to record the work done on old 37) * @ *",
                  },
                  {
                    number: 38,
                    text: "	Photography was not ‘art’, according to 38) * @ *",
                  },
                ],
              },
              {
                prompt: "Summary",
                question_text: [
                  {
                    number: 39,
                    text: "Photography was thought of as a 39 * @ * so reflected the culture of the 1850s",
                  },
                  {
                    number: 40,
                    text: "The use of new materials, particularly 40) * @ * led to new techniques",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "1100",
      2: "36",
      3: "week",
      4: "walking",
      5: "Tuesday",
      6: "6 / six",
      7: "forest",
      8: "gardens",
      9: "coastal",
      10: "farm",
      11: "B",
      12: "B",
      13: "A",
      14: "A",
      15: "C",
      16: "H",
      17: "B",
      18: "F",
      19: "G",
      20: "D",
      21: "B",
      22: "B",
      23: "A",
      24: "B",
      25: "G",
      26: "E",
      27: "B",
      28: "D",
      29: "A",
      30: "C",
      31: "expensive",
      32: "painting",
      33: "realistic",
      34: "enlargements",
      35: "studio",
      36: "books",
      37: "buildings",
      38: "critics",
      39: "science",
      40: "glass",
    },
  },
  {
    title: "IELTS Listening 6",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis6Part1,
        parts: [
          {
            part: 1,
            title:
              "Local councils can arrange practical support to help those caring for elderly people at home.",
            questions_range: "Questions 1-10",
            description:
              "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "This can give the carer:",
                question_text: [
                  {
                    number: 1,
                    text: "• time for other responsibilities",
                  },
                  {
                    number: 1,
                    text: "•	a 1) * @ *",
                  },
                ],
              },
              {
                prompt:
                  "Assessment of mother’s needs. This may include discussion of:",
                question_text: [
                  {
                    number: 2,
                    text: "how much 2) * @ * the caring involves",
                  },
                ],
              },
              {
                prompt: "What types of tasks are involved, e.g.:",
                question_text: [
                  {
                    number: 3,
                    text: "help with dressing",
                  },
                  {
                    number: 3,
                    text: "	helping her have a 3) * @ *",
                  },
                  {
                    number: 3,
                    text: "shopping",
                  },
                  {
                    number: 3,
                    text: "helping with meals",
                  },
                  {
                    number: 4,
                    text: "dealing with 4) * @ *",
                  },
                ],
              },
              {
                prompt:
                  "Any aspects of caring that are especially difficult, e.g.:",
                question_text: [
                  {
                    number: 5,
                    text: "loss of 5) * @ *",
                  },
                  {
                    number: 6,
                    text: "6) * @ * her",
                  },
                  {
                    number: 7,
                    text: "preventing a 7) * @ *",
                  },
                ],
              },
              {
                prompt: "Types of support that may be offered to carers:",
                question_text: [
                  {
                    number: 8,
                    text: "transport costs, e.g. cost of a 8) * @ *",
                  },
                  {
                    number: 9,
                    text: "	car-related costs, e.g. fuel and 9) * @ *",
                  },
                  {
                    number: 9,
                    text: "help with housework",
                  },
                  {
                    number: 10,
                    text: "help to reduce 10) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis6Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-16",
            question:
              "What is the role of the volunteers in each of the following activities?",
            description:
              "Choose SIX answers from the box and write the correct letter, A-I, next to Questions 11-16.",
            type: "matching",
            items: [
              "providing entertainment",
              "providing publicity about a council service",
              "contacting local businesses",
              "giving advice to visitors",
              "collecting feedback on events",
              "selling tickets",
              "introducing guest speakers at an event",
              "encouraging cooperation between local organisations",
              "helping people find their seats",
            ],
            questions: [
              {
                number: 11,
                option: "walking around the town centre",
                answer: "A",
              },
              {
                number: 12,
                option: "helping at concerts",
                answer: "B",
              },
              {
                number: 13,
                option: "getting involved with community groups",
                answer: "C",
              },
              {
                number: 14,
                option: "helping with a magazine",
                answer: "A",
              },
              {
                number: 15,
                option: "participating at lunches for retired people",
                answer: "B",
              },
              {
                number: 16,
                option: "helping with the website",
                answer: "C",
              },
            ],
          },
          ,
          {
            part: 2,
            title: "Questions 17-20",
            description:
              "Complete the notes below. Write no more than a word for each answer. ",
            type: "multiple-choice",
            questions: [
              {
                number: 17,
                question:
                  "Which event requires the largest number of volunteers?",
                type: "multiple-choice",
                options: [
                  "the music festival",
                  "the science festival ",
                  "the book festival",
                ],
                answer: "Library",
              },
              {
                number: 18,
                question:
                  "What is the most important requirement for volunteers at the festivals?",
                type: "multiple-choice",
                options: [
                  "interpersonal skills",
                  "personal interest in the event",
                  "flexibility",
                ],
                answer: "Library",
              },
              {
                number: 19,
                question:
                  "New volunteers will start working in the week beginning",
                type: "multiple-choice",
                options: ["2 September", "9 September", "23 September."],
                answer: "Library",
              },
              {
                number: 20,
                question: "What is the next annual event for volunteers?",
                type: "multiple-choice",
                options: ["a boat trip", "a barbecue", "a party"],
                answer: "Library",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis6Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-25",
            question:
              "What is Rosie and Colin’s opinion about each of the following aspects of human geography?",
            description:
              "Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 21-25",
            type: "matching",
            items: [
              "The information given about this was too vague",
              "This may not be relevant to their course",
              "This will involve only a small number of statistics",
              "It will be easy to find facts about this",
              "The facts about this may not be reliable.",
              "No useful research has been done on this",
              "The information provided about this was interesting",
            ],
            questions: [
              {
                number: 21,
                option: "Population",
                answer: "A",
              },
              {
                number: 22,
                option: "Health",
                answer: "B",
              },
              {
                number: 23,
                option: "Economies",
                answer: "C",
              },
              {
                number: 24,
                option: "Culture",
                answer: "C",
              },
              {
                number: 25,
                option: "Poverty",
                answer: "C",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 26-30",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 26,
                question: "Rosie says that in her own city the main problem is",
                type: "multiple-choice",
                options: ["crime", "housing", "unemployment"],
                answer: "Library",
              },
              {
                number: 27,
                question:
                  "What recent additions to the outskirts of their cities are both students happy about?",
                type: "multiple-choice",
                options: [
                  "conference centres",
                  "sports centres",
                  "retail centres",
                ],
                answer: "Library",
              },
              {
                number: 28,
                question:
                  "The students agree that developing disused industrial sites may",
                type: "multiple-choice",
                options: [
                  "have unexpected costs.",
                  "damage the urban environment.",
                  "destroy valuable historical buildings",
                ],
                answer: "Library",
              },
              {
                number: 29,
                question:
                  "The students will mention Masdar City as an example of an attempt to achieve",
                type: "multiple-choice",
                options: [
                  "daily collections for waste recycling",
                  "sustainable energy use.",
                  "free transport for everyone.",
                ],
                answer: "Library",
              },
              {
                number: 30,
                question:
                  "	When discussing the ecotown of Greenhill Abbots, Colin is uncertain about",
                type: "multiple-choice",
                options: [
                  "what its objectives were.",
                  "why there was opposition to it.",
                  "how much of it has actually been built.",
                ],
                answer: "Library",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis6Part4,
        parts: [
          {
            part: 1,
            title: "Developing food trends",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "",
                question_text: [
                  {
                    number: 31,
                    text: "The growth in interest in food fashions started with 31) * @ *. of food being shared on social media",
                  },
                  {
                    number: 31,
                    text: "The UK food industry is constantly developing products which are new or different.",
                  },
                  {
                    number: 31,
                    text: "Influencers on social media become ‘ambassadors’ for a brand.",
                  },
                  {
                    number: 32,
                    text: "Sales of 32) * @ *.. food brands have grown rapidly this way",
                  },
                  {
                    number: 32,
                    text: "Supermarkets track demand for ingredients on social media.",
                  },
                  {
                    number: 33,
                    text: "SFamous 33) * @ *.. are influential.",
                  },
                ],
              },
              {
                prompt: "Marketing campaigns The avocado:",
                question_text: [
                  {
                    number: 34,
                    text: "— 34) * @ *.. were invited to visit growers in South Africa.",
                  },
                  {
                    number: 35,
                    text: "— Advertising focused on its 35) * @ *.. benefits",
                  },
                ],
              },
              {
                prompt: "Oat milk: ",
                question_text: [
                  {
                    number: 2,
                    text: "— A Swedish brand’s media campaign received publicity by upsetting competitors.",
                  },
                  {
                    number: 36,
                    text: "— Promotion in the USA through 36) * @ *.. shops reduced the need for advertising.",
                  },
                  {
                    number: 37,
                    text: "— It appealed to consumers who are concerned about the 37) * @ *.. .",
                  },
                ],
              },
              {
                prompt: "Norwegian skrei:",
                question_text: [
                  {
                    number: 38,
                    text: "— has helped strengthen the 38) * @ *.. of Norwegian seafood",
                  },
                  {
                    number: 3,
                    text: "— Ethical concerns",
                  },
                ],
              },
              {
                prompt: "Quinoa:",
                question_text: [
                  {
                    number: 39,
                    text: "— Its success led to an increase in its 39). * @ *",
                  },
                  {
                    number: 40,
                    text: "— Overuse of resources resulted in poor quality 40) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "break",
      2: "time",
      3: "shower",
      4: "money",
      5: "memory",
      6: "lifting",
      7: "fall",
      8: "taxi",
      9: "insurance",
      10: "stress",
      11: "D",
      12: "I",
      13: "H",
      14: "E",
      15: "A",
      16: "B",
      17: "B",
      18: "A",
      19: "B",
      20: "A",
      21: "D",
      22: "G",
      23: "B",
      24: "A",
      25: "E",
      26: "C",
      27: "A",
      28: "A",
      29: "B",
      30: "C",
      31: "photos / photographs / pictures",
      32: "vegan",
      33: "chefs / cooks",
      34: "journalists / reporters",
      35: "health",
      36: "coffee",
      37: "environment",
      38: "reputation",
      39: "price / cost",
      40: "soil",
    },
  },
  {
    title: "IELTS Listening 7",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis7Part1,
        parts: [
          {
            part: 1,
            title: "",
            questions_range: "Questions 1–10",
            description:
              "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer",
            type: "table_completion",
            object: 1,
            columns: [
              "Name of Restaurant",
              "Location",
              "Reason for Recommendation",
              "Other Comments",
            ],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 1,
                      text: "The Junction",
                    },
                  ],
                  [
                    {
                      number: 1,
                      text: "Greyson Street, near the station",
                    },
                  ],
                  [
                    {
                      number: 1,
                      text: "Good for people who are especially keen on 1) * @ *..",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "Quite expensive.The 2) * @ *. is a good place for a drink.",
                    },
                  ],
                  ,
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 2,
                      text: "Paloma",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "In Bow Street, next to the cinema",
                    },
                  ],
                  [
                    {
                      number: 3,
                      text: "3) * @ *.. food, good for sharing",
                    },
                  ],
                  [
                    {
                      number: 3,
                      text: "Staff are very friendly.Need to pay £50 deposit.",
                    },
                    {
                      number: 4,
                      text: "A limited selection of 4) * @ *.. food on the menu.",
                    },
                  ],
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 5,
                      text: "The 5 * @ *..",
                    },
                  ],
                  [
                    {
                      number: 6,
                      text: "At the top of a 6) * @ *..",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "A famous chef. All the 7)	* @ *.. are very good.",
                    },
                    {
                      number: 8,
                      text: "Only uses 8) * @ *.. ingredients.",
                    },
                  ],
                  [
                    {
                      number: 9,
                      text: "Set lunch costs: 9£ * @ *.. per person. ",
                    },
                    {
                      number: 10,
                      text: "Portions probably of 10 * @ *..size",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis7Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-16",
            description: "Choose the correct letter, A, B, or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "Heather says pottery differs from other art forms because",
                type: "multiple-choice",
                options: [
                  "it lasts longer in the ground",
                  "it is practised by more people.",
                  "it can be repaired more easily.",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question:
                  "Archaeologists sometimes identify the use of ancient pottery from",
                type: "multiple-choice",
                options: [
                  "the clay it was made with",
                  "the marks that are on it. ",
                  "the basic shape of it.",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "Some people join Heather’s pottery class because they want to",
                type: "multiple-choice",
                options: [
                  "create an item that looks very old.",
                  "find something that they are good at.",
                  "make something that will outlive them",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question: "What does Heather value most about being a potter?",
                type: "multiple-choice",
                options: [
                  "its calming effect",
                  "its messy nature",
                  "its physical benefits",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question: "Most of the visitors to Edelman Pottery",
                type: "multiple-choice",
                options: [
                  "bring friends to join courses.",
                  "have never made a pot before.",
                  "try to learn techniques too quickly",
                ],
                answer: "Library",
              },
              {
                number: 16,
                question: "Heather reminds her visitors that they should",
                type: "multiple-choice",
                options: [
                  "put on their aprons",
                  "change their clothes",
                  "take off their jewellery.",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17-18",
            question: "Which TWO things does Heather explain about kilns?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "what their function is",
              "when they were invented",
              "ways of keeping them safe",
              "where to put one in your home",
              "what some people use instead of one",
            ],
            questions: [
              {
                number: 17,
                option: "",
                answer: "A",
              },
              {
                number: 18,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 19-20",
            question:
              "Which TWO points does Heather make about a potter’s tools?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "Some are hard to hold",
              "Some are worth buying",
              "Some are essential items.",
              "Some have memorable names.",
              "Some are available for use by participants",
            ],
            questions: [
              {
                number: 19,
                option: "",
                answer: "A",
              },
              {
                number: 20,
                option: "",
                answer: "B",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis7Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-22",
            question:
              "Which TWO things do the students both believe are responsible for the increase in loneliness?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "social media",
              "smaller nuclear families",
              "urban design",
              "longer lifespans",
              "a mobile workforce",
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
              "Which TWO health risks associated with loneliness do the students agree are based on solid evidence?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "a weakened immune system",
              "dementia",
              "cancer",
              "obesity",
              "cardiovascular disease",
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
            part: 3,
            title: "Questions 25-26",
            question:
              "Which TWO opinions do both the students express about the evolutionary theory of loneliness?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "It has little practical relevance.",
              "It needs further investigation.",
              "It is misleading.",
              "It should be more widely accepted.",
              "It is difficult to understand.",
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
            part: 4,
            title: "Questions 27-30",
            description:
              "Choose the correct letter, A, B, or C. Loneliness and mental health",
            type: "multiple-choice",
            questions: [
              {
                number: 27,
                question:
                  "When comparing loneliness to depression, the students",
                type: "multiple-choice",
                options: [
                  "doubt that there will ever be a medical cure for loneliness",
                  "claim that the link between loneliness and mental health is overstated",
                  "express frustration that loneliness is not taken more seriously.",
                ],
                answer: "Library",
              },
              {
                number: 28,
                question:
                  "Why do the students decide to start their presentation with an example from their own experience?",
                type: "multiple-choice",
                options: [
                  "to explain how difficult loneliness can be",
                  "to highlight a situation that most students will recognise",
                  "to emphasise that feeling lonely is more common for men than women",
                ],
                answer: "Library",
              },
              {
                number: 29,
                question:
                  "The students agree that talking to strangers is a good strategy for dealing with loneliness because",
                type: "multiple-choice",
                options: [
                  "It creates a sense of belonging",
                  "it builds self-confidence.",
                  "it makes people feel more positive.",
                ],
                answer: "Library",
              },
              {
                number: 30,
                question:
                  "The students find it difficult to understand why solitude is considered to be",
                type: "multiple-choice",
                options: [
                  "similar to loneliness",
                  "necessary for mental health.",
                  "an enjoyable experience.",
                ],
                answer: "Library",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis7Part4,
        parts: [
          {
            part: 1,
            title: "Reclaiming urban rivers",
            questions_range: "Questions 31-40",
            description:
              "Complete the note below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Historical Background:",
                question_text: [
                  {
                    number: 1,
                    text: "• Nearly all major cities were built on a river.",
                  },
                  {
                    number: 1,
                    text: "•	Rivers were traditionally used for transport, fishing, and recreation.",
                  },
                  {
                    number: 1,
                    text: "• Industrial development and rising populations later led to:",
                  },
                  {
                    number: 1,
                    text: "-More sewage from houses being discharged into the river.",
                  },
                  {
                    number: 31,
                    text: "-Pollution from 31) * @ *.. on the river bank.",
                  },
                  {
                    number: 32,
                    text: "In 1957, the River Thames in London was declared biologically 32) * @ *..",
                  },
                ],
              },
              {
                prompt: "Recent Improvements:",
                question_text: [
                  {
                    number: 33,
                    text: "Seals and even a 33) * @ *.. have been seen in the River Thames.",
                  },
                  {
                    number: 34,
                    text: "Riverside warehouses are converted to restaurants and 34) * @ *..",
                  },
                  {
                    number: 1,
                    text: "In Los Angeles, there are plans to:",
                  },
                  {
                    number: 35,
                    text: "-Build a riverside 35) * @ *..",
                  },
                  {
                    number: 36,
                    text: "-Display 36) * @ *.. projects.",
                  },
                  {
                    number: 37,
                    text: "In Paris, 37) * @ *.. are created on the sides of the river every summer.",
                  },
                ],
              },
              {
                prompt: "Transport Possibilities",
                question_text: [
                  {
                    number: 38,
                    text: "Over 2 billion passengers already travel by 38) * @ *.. in cities round the world.",
                  },
                  {
                    number: 38,
                    text: "Changes in shopping habits mean the number of deliveries that are made is increasing.",
                  },
                  {
                    number: 39,
                    text: "Instead of road transoer, goods be transported by large freight barges and electric 39) * @ * or",
                  },
                  {
                    number: 40,
                    text: "in future, by 40) * @ *.. . ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "fish",
      2: "roof",
      3: "Spanish",
      4: "vegetarian",
      5: "Audley",
      6: "hotel",
      7: "reviews",
      8: "local",
      9: "30 / thirty",
      10: "average",
      11: "A",
      12: "B",
      13: "C",
      14: "A",
      15: "B",
      16: "C",
      17: "A",
      18: "E",
      19: "C",
      20: "E",
      21: "C",
      22: "E",
      23: "A",
      24: "C",
      25: "A",
      26: "B",
      27: "A",
      28: "B",
      29: "A",
      30: "C",
      31: "factories",
      32: "dead",
      33: "whale",
      34: "apartments",
      35: "park",
      36: "art",
      37: "beaches",
      38: "ferry",
      39: "bikes",
      40: "drone",
    },
  },
  {
    title: "IELTS Listening 8",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis8Part1,
        parts: [
          {
            part: 1,
            title: "Second-hand Cars",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Cars Available",
                question_text: [
                  {
                    number: 1,
                    text: "",
                  },
                ],
              },
              {
                prompt: "Noda ( silver):",
                question_text: [
                  {
                    number: 1,
                    text: "•	Tents are provided.",
                  },
                  {
                    number: 1,
                    text: "• One 1) * @ * is broken",
                  },
                ],
              },
              {
                prompt: "Comina (white):",
                question_text: [
                  {
                    number: 2,
                    text: "• Used to belong to the 2) * @ *",
                  },
                ],
              },
              {
                prompt: "Telsta (orange)",
                question_text: [
                  {
                    number: 3,
                    text: "•  It's an 3 .* @ * model",
                  },
                  {
                    number: 4,
                    text: "•	Has got new 4 .* @ *",
                  },
                ],
              },
              {
                prompt: "Abrada (red):",
                question_text: [
                  {
                    number: 5,
                    text: "•	Only 5) * @ * years old",
                  },
                ],
              },
              {
                prompt: "Other Information",
                question_text: [
                  {
                    number: 4,
                    text: "",
                  },
                ],
              },
              {
                prompt: "Garage address:",
                question_text: [
                  {
                    number: 6,
                    text: "6) * @ * Road, Mitchell",
                  },
                ],
              },
              {
                prompt: "Day/Time:",
                question_text: [
                  {
                    number: 7,
                    text: "on 7) .* @ * at 9: 30am",
                  },
                ],
              },
              {
                prompt: "Ask for:",
                question_text: [
                  {
                    number: 8,
                    text: "8) .* @ * Smith",
                  },
                ],
              },
              {
                prompt: "Parking available:",
                question_text: [
                  {
                    number: 9,
                    text: "outside the 9) .* @ *",
                  },
                ],
              },
              {
                prompt: "What to bring:",
                question_text: [
                  {
                    number: 10,
                    text: "10) .* @ * (for a test drive)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis8Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-16",
            description:
              "Choose the correct letter A, B or C. The Middletown Urban Farming Scheme (MUFS)",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question: "Who founded the Middletown Urban Farming Scheme?",
                type: "multiple-choice",
                options: [
                  "university specialists",
                  "business people ",
                  "town planners",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question: "What was the original reason for starting the MUFS?",
                type: "multiple-choice",
                options: [
                  "to encourage more efficient land use",
                  "to help lessen CO2 emissions",
                  "to improve people's eating habits",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "For the coming year, the MUFS will focus on recruiting members from",
                type: "multiple-choice",
                options: ["schools.", "companies.", "community centres"],
                answer: "Library",
              },
              {
                number: 14,
                question:
                  "What kind of information is available from members of the MUFS committee?",
                type: "multiple-choice",
                options: [
                  "practical gardening tips",
                  "plant science",
                  "location of local garden sites",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question:
                  "What are provided by the MUFS for the physically disabled?",
                type: "multiple-choice",
                options: [
                  "soil and compost",
                  "containers for plants",
                  "gardening tools",
                ],
                answer: "Library",
              },
              {
                number: 16,
                question:
                  "According to school teachers, what has been an unexpected advantage of the MUFS?",
                type: "multiple-choice",
                options: [
                  "its usefulness as an aid for teaching science",
                  "its contribution to reducing costs of school meals",
                  "its help in encouraging community pride among students",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17-20",
            question:
              "What free goods or services are offered by each of the following providers?",
            description:
              "Choose FOUR answers from the box and write the correct letter A-F next to questions 17-20. ",
            type: "matching",
            items: [
              "fertilisers",
              "cooking lessons ",
              "advice on soil ",
              "eat-to-keep-fit course ",
              "use of a greenhouse ",
              "market stalls",
            ],
            questions: [
              {
                number: 17,
                option: "City hospital",
                answer: "A",
              },
              {
                number: 18,
                option: "Local government",
                answer: "B",
              },
              {
                number: 19,
                option: "University",
                answer: "C",
              },
              {
                number: 20,
                option: "Supermarket",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis8Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-26",
            description:
              "Choose the correct letter A ,B or C. Research on the effect of walking on creativity",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question:
                  "Daniel mentions the research about walking and creativity to Katie because",
                type: "multiple-choice",
                options: [
                  "she has read it too.",
                  "what she says reminds him of it.",
                  "he thinks she might like to do similar research.",
                ],
                answer: "Library",
              },
              {
                number: 22,
                question:
                  "In the experiments, researchers compared participants'creativity when walking and when",
                type: "multiple-choice",
                options: ["sitting.", "running.", "listening to music."],
                answer: "Library",
              },
              {
                number: 23,
                question:
                  "Daniel says that in each experiment, there was a different",
                type: "multiple-choice",
                options: [
                  "type of control group.",
                  "pattern of activities.",
                  "way of selecting participants",
                ],
                answer: "Library",
              },
              {
                number: 24,
                question: "Daniel thinks the experiment with words is ",
                type: "multiple-choice",
                options: [
                  "biased in favour of certain people",
                  "a good indicator of creativity.",
                  "open to personal interpretation.",
                ],
                answer: "Library",
              },
              {
                number: 25,
                question:
                  "What is Katie and Daniels attitude to the experiment on focused thinking?",
                type: "multiple-choice",
                options: [
                  "they are doubtful about its aims.",
                  "they are confused by its methods.",
                  "they are cautious about its conclusions.",
                ],
                answer: "Library",
              },
              {
                number: 26,
                question:
                  "Katie thinks that the best way forward is to consider",
                type: "multiple-choice",
                options: [
                  "whether other types of exercise affect creativity",
                  "the cause of the improvement in creativity.",
                  "how the results can be applied to creativity in real life",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 27-30",
            question:
              "What is the main physical benefit of each of the following walking situations?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A-G, next to questions 27-30. ",
            type: "matching",
            items: [
              "improved balance",
              "greater stamina",
              "better eyesight",
              "lower blood pressure",
              "regular sleeping pat",
              "stronger bones",
              "weight red",
            ],
            questions: [
              {
                number: 27,
                option: "walking with thin-soled footwear",
                answer: "A",
              },
              {
                number: 28,
                option: "walking in the mountains",
                answer: "B",
              },
              {
                number: 29,
                option: "walking for the elderly",
                answer: "C",
              },
              {
                number: 30,
                option: "walking long distances",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis8Part4,
        parts: [
          {
            part: 1,
            title: "Gamification",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Gamification:",
                question_text: [
                  {
                    number: 1,
                    text: "•	The use of gaming techniques in non-game situations",
                  },
                  {
                    number: 31,
                    text: "•	In business, it is frequently used for 31) * @ *.",
                  },
                  {
                    number: 31,
                    text: "•	Uses people's desire to win a reward",
                  },
                  {
                    number: 32,
                    text: "•	Not a new idea, e.g. incentive schemes were first used by 32) * @ *.",
                  },
                ],
              },
              {
                prompt: "Uses:",
                question_text: [
                  {
                    number: 33,
                    text: "•	To get online 33) * @ *.quickly",
                  },
                  {
                    number: 34,
                    text: "•	To persuade people to change their 34) * @ *.",
                  },
                  {
                    number: 34,
                    text: "•	For training purposes, e.g. simulators used by 35) * @ * .and town planners",
                  },
                ],
              },
              {
                prompt: "Successful examples",
                question_text: [
                  {
                    number: 2,
                    text: "•	Official campaigns",
                  },
                  {
                    number: 36,
                    text: "- Australian government: to encourage people to 36) * @ *.more - overseas local authority: to reward drivers for not speeding",
                  },
                  {
                    number: 2,
                    text: "•	Health",
                  },
                  {
                    number: 37,
                    text: "-	a staircase at a station that worked like a 37) * @ *.",
                  },
                  {
                    number: 38,
                    text: "-	a game that helps recovery when old people hurt their 38) * @ *.in a fall",
                  },
                ],
              },
              {
                prompt: "Things to consider:",
                question_text: [
                  {
                    number: 39,
                    text: "•	It's important for gamification to be 39) * @ *.",
                  },
                  {
                    number: 40,
                    text: "•	Need to think about the laws regarding 40) * @ *.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "light",
      2: "manager",
      3: "automatic",
      4: "tires",
      5: "8",
      6: "Station",
      7: "Thursday",
      8: "GERALD",
      9: "supermarket",
      10: "Identification",
      11: "B",
      12: "A",
      13: "C",
      14: "A",
      15: "B",
      16: "C",
      17: "B",
      18: "E",
      19: "C",
      20: "D",
      21: "B",
      22: "A",
      23: "B",
      24: "A",
      25: "C",
      26: "B",
      27: "F",
      28: "C",
      29: "E",
      30: "B",
      31: "marketing",
      32: "airline",
      33: "feedback",
      34: "behavior",
      35: "pilots",
      36: "exercise",
      37: "piano",
      38: "hand",
      39: "fun",
      40: "privacy",
    },
  },
  {
    title: "IELTS Listening  9",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis9Part1,
        parts: [
          {
            part: 1,
            title: "Oz Housesitters-home Owner Registration Form",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Name:",
                question_text: [
                  {
                    number: 1,
                    text: "Jenny Hall",
                  },
                ],
              },
              {
                prompt: "Address:",
                question_text: [
                  {
                    number: 1,
                    text: "14 1) * @ * St Greenfield",
                  },
                ],
              },
              {
                prompt: "Mobile no:",
                question_text: [
                  {
                    number: 2,
                    text: "2) * @ *",
                  },
                ],
              },
              {
                prompt: "Date required from:",
                question_text: [
                  {
                    number: 3,
                    text: "3) * @ * ",
                  },
                ],
              },
              {
                prompt: "Length of time required:",
                question_text: [
                  {
                    number: 4,
                    text: "4) * @ * weeks",
                  },
                ],
              },
              {
                prompt: "House features:",
                question_text: [
                  {
                    number: 5,
                    text: "-	it has a new 5) * @ *",
                  },
                  {
                    number: 5,
                    text: "-	it is near a station",
                  },
                  {
                    number: 6,
                    text: "-	there is room for the housesitter’s 6) * @ *",
                  },
                ],
              },
              {
                prompt: "Special duties required:",
                question_text: [
                  {
                    number: 7,
                    text: "-	water the 7) * @ * tree",
                  },
                ],
              },
              {
                prompt: "Housesitter requirements:",
                question_text: [
                  {
                    number: 8,
                    text: "-	the house is large so a 8) * @ * is preferred.",
                  },
                  {
                    number: 9,
                    text: "-	no 9) * @ * allowed",
                  },
                  {
                    number: 10,
                    text: "-	would like a check carried out by the 10) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis9Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-16",
            description:
              "Choose the correct letter A, B, or C.Becoming a millionaire",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "Arthur feels that when starting a business, mistakes should be ",
                type: "multiple-choice",
                options: [
                  "seen as an opportunity to learn.",
                  "predicted and minimised.",
                  "avoided at all costs",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question: "Recent American studies found that confidence will ",
                type: "multiple-choice",
                options: [
                  "sometimes reduce people's chances of success",
                  "be increased by reading self-help books.",
                  "ensure good results on business courses.",
                ],
                answer: "Library",
              },
              {
                number: 13,
                question:
                  "The American studies recommended that new entrepreneurs",
                type: "multiple-choice",
                options: [
                  "listen to their colleagues' advice.",
                  "get professional help when things go wrong.",
                  "remain concentrated on their aims",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question:
                  "What does Arthur say about his own experience of marketing?",
                type: "multiple-choice",
                options: [
                  "He relied on what he already knew",
                  "He hired an expert to take care of it.",
                  "He realised its importance too late.",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question:
                  "What does Arthur think Is an important quality shared by good leaders?",
                type: "multiple-choice",
                options: [
                  "They are ambitious for their company.",
                  "They can deal with difficult people.",
                  "They earn the respect of their workforce.",
                ],
                answer: "Library",
              },
              {
                number: 16,
                question: "What does Arthur say about taking risks?",
                type: "multiple-choice",
                options: [
                  "He advises being cautions.",
                  "He favours a long-term view.",
                  "He believes it is financially advantageous",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17-18",
            question:
              "Which TWO things does Arthur say people should focus on when developing their business idea?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "making sure the idea is original",
              "offering a better deal than competitors",
              "being committed to it",
              "paying attention to detail",
              "fixing realistic prices",
            ],
            questions: [
              {
                number: 17,
                option: "",
                answer: "A",
              },
              {
                number: 18,
                option: "",
                answer: "B",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 19-20",
            question:
              "Which TWO things does Arthur say helped him get his business started?",
            description: "Choose TWO letters, A-E",
            type: "matching",
            items: [
              "family support",
              "getting a loan from a bank",
              "good business advice",
              "a favourable economic climate",
              "an effective approach to business",
            ],
            questions: [
              {
                number: 19,
                option: "",
                answer: "A",
              },
              {
                number: 20,
                option: "",
                answer: "B",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis9Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-26",
            question: "What is said about each of the following experiments?",
            description:
              "Choose SIX answers from the box and we the correct letter, A-H next to questions 21- 26",
            type: "matching",
            items: [
              "very boning",
              "too difficult ",
              "specialised equipment needed ",
              "very expensive",
              "immediate results",
              "useful practice formaths cheap ",
              "to do",
              "takes longer than usual to do",
            ],
            questions: [
              {
                number: 21,
                option: "Steam engine",
                answer: "A",
              },
              {
                number: 22,
                option: "Breakfast cereals",
                answer: "B",
              },
              {
                number: 23,
                option: "Bouncing balls",
                answer: "A",
              },
              {
                number: 24,
                option: "Making paper",
                answer: "B",
              },
              {
                number: 25,
                option: "Tie-dyeing",
                answer: "B",
              },
              {
                number: 26,
                option: "Glue from milk",
                answer: "B",
              },
            ],
          },
          {
            part: 2,
            title: "",
            questions_range: "Questions 27–30",
            description:
              "Label the diagram below. Write the correct letter, A-G, next to questions 27-30.",
            type: "map",
            image: imges.img9,
            questions: [
              {
                number: 27,
                option: "Metal container",
                answer: "A",
              },
              {
                number: 28,
                option: "Integral strainer",
                answer: "B",
              },
              {
                number: 29,
                option: "Drip to",
                answer: "C",
              },
              {
                number: 30,
                option: "Pottery container",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis9Part4,
        parts: [
          {
            part: 1,
            title: "Office Design",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONEWORDONLY for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Early 20th Century:",
                question_text: [
                  {
                    number: 31,
                    text: "-	workers employed to do 31) * @ * were arranged in rows",
                  },
                ],
              },
              {
                prompt: "1960s to present:",
                question_text: [
                  {
                    number: 31,
                    text: "Variations in design of open-plan offices:",
                  },
                  {
                    number: 32,
                    text: "-	first, workers had individual 32) * @ *",
                  },
                  {
                    number: 33,
                    text: "-	later, they had cubicles with high or low 33) * @ *",
                  },
                  {
                    number: 34,
                    text: "-	nowadays, workers may have to 34) * @ * a work area",
                  },
                ],
              },
              {
                prompt: "Survey results",
                question_text: [
                  {
                    number: 35,
                    text: "Attitudes of employees to open-plan designs:",
                  },
                  {
                    number: 35,
                    text: "-	there is a lack of 35) * @ *",
                  },
                  {
                    number: 36,
                    text: "and 36) * @ *",
                  },
                  {
                    number: 37,
                    text: "-	they pose a risk to our 37) * @ * (staff records support this)",
                  },
                ],
              },
              {
                prompt: "Attitudes of employers to open-plan designs:",
                question_text: [
                  {
                    number: 38,
                    text: "-	they significantly reduce rent and 38) * @ * costs",
                  },
                  {
                    number: 38,
                    text: "-	they improve teamwork and communication",
                  },
                  {
                    number: 39,
                    text: "-	they can make 39) * @ * staff easier",
                  },
                  {
                    number: 40,
                    text: "In reality, employees are unhappy and they are often distracted by the 40) * @ * the office.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "Gray",
      2: "0491577248",
      3: "29th September",
      4: "3",
      5: "pool",
      6: "car",
      7: "lemon",
      8: "couple",
      9: "smoking",
      10: "Police",
      11: "A",
      12: "A",
      13: "C",
      14: "B",
      15: "C",
      16: "A",
      17: "B/C",
      18: "C/B",
      19: "A/E",
      20: "E/A",
      21: "B",
      22: "G",
      23: "F",
      24: "A",
      25: "H",
      26: "E",
      27: "D",
      28: "F",
      29: "G",
      30: "C",
      31: "typing",
      32: "desks",
      33: "screens",
      34: "share",
      35: "privacy",
      36: "security",
      37: "health",
      38: "energy",
      39: "training",
      40: "noise",
    },
  },
  {
    title: "IELTS Listening 10",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis10Part1,
        parts: [
          {
            part: 1,
            title: "Post Office - Package Delivery Form",
            questions_range: "Questions 1-8",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Country of destination:",
                question_text: [
                  {
                    number: 1,
                    text: "USA",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Package to reach destination by:",
                question_text: [
                  {
                    number: 1,
                    text: "1) * @ *..at latest",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Service selected:",
                question_text: [
                  {
                    number: 2,
                    text: "2) * @ * Express",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Sender:",
                question_text: [
                  {
                    number: 3,
                    text: "Name:Peter White",
                    answer: "",
                  },
                  {
                    number: 3,
                    text: "Address: 3) * @ *",
                    answer: "",
                  },
                  {
                    number: 3,
                    text: "Lake view",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Delivery to:",
                question_text: [
                  {
                    number: 4,
                    text: "Name: Anna 4) * @ *",
                    answer: "",
                  },
                  {
                    number: 5,
                    text: "Address: Apartment 228, 5) * @ *",
                    answer: "",
                  },
                  {
                    number: 6,
                    text: "Upper 6) * @ *",
                    answer: "",
                  },
                  {
                    number: 7,
                    text: "New York 7) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Contents:",
                question_text: [
                  {
                    number: 8,
                    text: "Contents: 8) * @ *",
                    answer: "",
                  },
                ],
              },
            ],
          },

          {
            part: 2,
            title: "",
            questions_range: "Questions 9-10",
            description:
              "Answer the questions below. Write NOMORETHAN THREE WORDS AND/ORA NUMBER for each answer",
            type: "sentence_completion",
            questions: [
              {
                number: 9,
                question_text:
                  "Answer the questions below.Write NOMORETHAN THREE WORDS AND/ORA NUMBER for each answer $ * @ *",
              },
              {
                number: 10,
                question_text:
                  "10	What is required in order to find a lost package? * @ *",
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis10Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-15",
            description: "Choose the correct letter, A, Bor C.",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question: "Rob says the hotel is exceptional because of ",
                type: "multiple-choice",
                options: [
                  "its easy access to the airport.",
                  "its unpolluted setting.",
                  "its quiet location.",
                ],
                answer: "Library",
              },
              {
                number: 12,
                question: "What is the price range for a standard room?",
                type: "multiple-choice",
                options: ["$80-$145", "$145-$210", "5210-8285"],
                answer: "Library",
              },
              {
                number: 13,
                question: "All the bedrooms in the deluxe suites have ",
                type: "multiple-choice",
                options: [
                  "windows on two sides.",
                  "mountain views.",
                  "a balcony",
                ],
                answer: "Library",
              },
              {
                number: 14,
                question: "The hotel encourages families to stay by offering",
                type: "multiple-choice",
                options: [
                  "rooms with connecting doors",
                  "childcare facilities.",
                  "discounts at certain times of the year",
                ],
                answer: "Library",
              },
              {
                number: 15,
                question:
                  "What does Rob say visitors can do in the Grill Room?",
                type: "multiple-choice",
                options: [
                  "listen to live music",
                  "have a full meal or a snack",
                  "see their food being cooked",
                ],
                answer: "Library",
              },
            ],
          },
          {
            part: 2,
            title: "Hotel's outdoor facilities",
            questions_range: "Questions 16–20",
            description:
              "Label the map below. Write the correct letter, A-H, next to questions 16-20.",
            type: "map",
            image: imges.img10,
            questions: [
              {
                number: 16,
                option: "Barn for horses",
                answer: "A",
              },
              {
                number: 17,
                option: "Tennis courts",
                answer: "B",
              },
              {
                number: 18,
                option: "Swimming pool",
                answer: "C",
              },
              {
                number: 19,
                option: "Golf course",
                answer: "C",
              },
              {
                number: 20,
                option: "Outdoor Facilities Manager's office",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis10Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-25",
            description: "Choose the correct letter, A, B, or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question: "What source did Mike use for his definition?",
                type: "multiple-choice",
                options: [
                  "a history textbook",
                  "an academic article",
                  "a lecture handout",
                ],
                answer: "",
              },
              {
                number: 22,
                question:
                  "According to Mike and his tutor, what is the most important contribution of the intern to oral history?",
                type: "multiple-choice",
                options: [
                  "the permanent preservation of recordings",
                  "an increase in student interest",
                  "wide access to the interviews by the public",
                ],
                answer: "",
              },
              {
                number: 23,
                question: "Mike says he chose his particular topic because",
                type: "multiple-choice",
                options: [
                  "he is a football fan",
                  "his father loves football",
                  "his friends encouraged him",
                ],
                answer: "",
              },
              {
                number: 24,
                question:
                  "What does Mike say was his best source of information about the team?",
                type: "multiple-choice",
                options: [
                  "doing research in the local newspaper archives",
                  "speaking to the team manager",
                  "looking at materials in the local library",
                ],
                answer: "",
              },
              {
                number: 25,
                question:
                  "How did Mike find the former players he has arranged to interview?",
                type: "multiple-choice",
                options: [
                  "on the internet",
                  "in the team records",
                  "in the phone book",
                ],
                answer: "",
              },
            ],
          },

          {
            part: 2,
            title: "Questions 26-30",
            question:
              "What problems with the following aspects of the proposed interviews do the  speakers identify?",
            description:
              "Choose FIVE answers from the box and write the correct letter A-H, next to questions 26-30.",
            type: "matching",
            items: [
              "too unreliable",
              "too short",
              "too noisy",
              "too long",
              "too formal",
              "too factual",
              "too complicated",
              "too vague",
            ],
            questions: [
              {
                number: 26,
                option: "Questions drafted	",
                answer: "A",
              },
              {
                number: 27,
                option: "Time allotted",
                answer: "B",
              },
              {
                number: 28,
                option: "Recording equipment used",
                answer: "A",
              },
              {
                number: 29,
                option: "Subjects chosen",
                answer: "B",
              },
              {
                number: 30,
                option: "Proposed report",
                answer: "B",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis10Part4,
        parts: [
          {
            part: 1,
            title: "Plant Behaviour",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Changing ideas:",
                question_text: [
                  {
                    number: 31,
                    text: "•	Scientists once thought of plants as being 31) * @ *..organisms",
                  },
                  {
                    number: 31,
                    text: "•	Now there is evidence that this is not true",
                  },
                ],
              },
              {
                prompt: "Recent studies:",
                question_text: [
                  {
                    number: 31,
                    text: "-Great Lakes sea rocket",
                  },
                  {
                    number: 32,
                    text: "•	Found on 32) * @ *",
                  },
                  {
                    number: 33,
                    text: "•	When near other plants, it normally produces extra 33) * @ *..to compete for nutrients.",
                  },
                  {
                    number: 34,
                    text: "•	However, it behaves differently if it is related to the other plants",
                  },
                  {
                    number: 34,
                    text: "-Sagebrush and thomapple",
                  },
                  {
                    number: 34,
                    text: "•	Recognise surrounding plants by the type of 34) * @ *..that they reflect",
                  },
                  {
                    number: 35,
                    text: "•	Identification is possible because all plants have a particular 35) * @ *..",
                  },
                  {
                    number: 35,
                    text: "-Dodder plant",
                  },
                  {
                    number: 36,
                    text: "•	Is unable to produce 36). * @ *",
                  },
                  {
                    number: 36,
                    text: "•	Needs to feed off another plant to survive",
                  },
                  {
                    number: 37,
                    text: "•	Affects farmers' crops, e.g. alfalfa, 37) * @ *..and citrus",
                  },
                  {
                    number: 38,
                    text: "•	Identifies suitable 'hosts' by detecting the 38) * @ *..they give off",
                  },
                  {
                    number: 39,
                    text: "•	Moves in a 39) * @ *..to check the environment, then grows towards the most suitable host",
                  },
                ],
              },
              {
                prompt: "Plant science:",
                question_text: [
                  {
                    number: 40,
                    text: "•	Use of modern 40) * @ *..provides evidence of plant behaviour",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "Friday",
      2: "International",
      3: "14 Mountain Road",
      4: "Hillman",
      5: "North Building",
      6: "Park Avenue",
      7: "(6) books",
      8: "photographs",
      9: "98",
      10: "ID code/an ID code",
      11: "C",
      12: "B",
      13: "C",
      14: "A",
      15: "C",
      16: "D",
      17: "B",
      18: "F",
      19: "H",
      20: "C",
      21: "C",
      22: "A",
      23: "B",
      24: "A",
      25: "C",
      26: "G",
      27: "D",
      28: "A",
      29: "H",
      30: "F",
      31: "passive",
      32: "beaches",
      33: "roots",
      34: "light",
      35: "signature",
      36: "sugar",
      37: "potatoes",
      38: "chemicals",
      39: "circle",
      40: "equipment",
    },
  },
  {
    title: "IELTS Listening 11",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis11Part1,
        parts: [
          {
            part: 1,
            title: "Arrangements for this year",
            questions_range: "Questions 1–4",
            description:
              "Complete the table below. Write ONE WORD ONLY for each answer. School Art Competition",
            type: "table_completion",
            object: 1,
            columns: ["Age group", "Theme", " Type of art", "Prize"],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 1,
                      text: "Junior students",
                    },
                  ],
                  [
                    {
                      number: 1,
                      text: " 1) * @ * ",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "a drawing",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "	2) * @ * Tickets",
                    },
                  ],
                ],
              },
              {
                number: 1,
                values: [
                  [
                    {
                      number: 3,
                      text: "Senior students",
                    },
                  ],
                  [
                    {
                      number: 3,
                      text: "the 3) * @ *",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "a photograph",
                    },
                  ],
                  [
                    {
                      number: 4,
                      text: "a 4) * @ * voucher",
                    },
                  ],
                ],
              },
            ],
          },

          {
            part: 2,
            title: "Further Details",
            questions_range: "Questions 5-10",
            description:
              "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Submitting the artwork",
                question_text: [
                  {
                    number: 5,
                    text: "-When: no later than 5) * @ *",
                    answer: "",
                  },
                  {
                    number: 6,
                    text: "-Where: at the 6) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Competition judge",
                question_text: [
                  {
                    number: 7,
                    text: "Name: Rebecca 7) * @ *",
                    answer: "",
                  },
                  {
                    number: 8,
                    text: "Her phone number: 8) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "After the judging",
                question_text: [
                  {
                    number: 9,
                    text: "The artwork will appear in a 9) * @ *",
                    answer: "",
                  },
                  {
                    number: 10,
                    text: "The art exhibition will be followed by a 10) * @ * produced by the school",
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
            question:
              "What feature of each of the following walks does the speaker recommend?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A-G, next to questions 11-14.",
            type: "matching",
            items: [
              "picnic area",
              "historic building",
              "flat paths",
              "seashore",
              "art works",
              "wildlife",
              "views",
            ],
            questions: [
              {
                number: 11,
                option: "Boundary Walk",
                answer: "",
              },
              {
                number: 12,
                option: "Loop Track",
                answer: "",
              },
              {
                number: 13,
                option: "Puriri Walk",
                answer: "",
              },
              {
                number: 14,
                option: "North Head",
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Hotel's outdoor facilities",
            questions_range: "Questions 15–20",
            description:
              "Label the map below.Write the correct letter, A-J, next to questions 15-20.",
            type: "map",
            image: imges.img11,
            questions: [
              {
                number: 16,
                option: "Safe swimming beach",
                answer: "A",
              },
              {
                number: 17,
                option: "Old ship",
                answer: "B",
              },
              {
                number: 18,
                option: "Stony Batter",
                answer: "C",
              },
              {
                number: 19,
                option: "Settlers' Monument",
                answer: "C",
              },
              {
                number: 20,
                option: "Kiosk",
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
            title: "Questions 21 and 22",
            question:
              "Which TWO points did students most frequently make about their musical background before starting a music degree?",
            description: "Choose TWO letters, A-E.",
            type: "matching",
            items: [
              "They had already composed music.",
              "They had several music qualifications.",
              "They could play more than one instrument.",
              "They had performed in public.",
              "They had had piano lessons.",
            ],
            questions: [
              {
                number: 21,
                option: "",
                answer: "",
              },
              {
                number: 22,
                option: "",
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 23 and 24",
            question:
              "Which TWO points did students most frequently make about music practice?",
            description: "Choose TWO letters, A-E.",
            type: "matching",
            items: [
              "They prefer to practise alone.",
              "They try to practise every day.",
              "They are motivated to practise by fear.",
              "They feel they don't do enough practice.",
              "They enjoy the challenge of a difficult piece.",
            ],
            questions: [
              {
                number: 23,
                option: "",
                answer: "",
              },
              {
                number: 24,
                option: "",
                answer: "",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 25 and 26",
            question:
              "Which TWO points were most frequently made by students about the pieces they select for assessed performances?",
            description: "Choose TWO letters, A-E.",
            type: "matching",
            items: [
              "They like to hear others performing the same pieces.",
              "They like to choose little-known pieces.",
              "They like to play pieces from memory.",
              "They like their tutor to choose their pieces.",
              "They like to choose technically demanding pieces.",
            ],
            questions: [
              {
                number: 25,
                option: "",
                answer: "",
              },
              {
                number: 26,
                option: "",
                answer: "",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 27–30",
            question:
              "Which comment did most students make about each of the following aspects of performance?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A-G, next to questions 27–30.",
            type: "matching",
            items: [
              "This is very beneficial.",
              "This is difficult but enjoyable.",
              "This can affect relationships.",
              "This makes them very nervous.",
              "This is time-consuming.",
              "This is easy.",
              "This happens infrequently.",
            ],
            questions: [
              {
                number: 27,
                option: "Performing solo",
                answer: "",
              },
              {
                number: 28,
                option: "Deciding which pieces to perform",
                answer: "",
              },
              {
                number: 29,
                option: "Performing with musicians from a different genre",
                answer: "",
              },
              {
                number: 30,
                option:
                  "Performing with musicians who play the same instrument",
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
            title: "Gastropods (Snails and Slugs)",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Evolution",
                question_text: [
                  {
                    number: 31,
                    text: "•	minerals in the bodies of gastropods are like those in the 31) * @ *",
                    answer: "",
                  },
                  {
                    number: 31,
                    text: "•	fossils date back 500 million years ",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Physical features",
                question_text: [
                  {
                    number: 32,
                    text: "•	single, muscular foot",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "•	radula (used for feeding)",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "•	Shell (snails only)",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "•	size: British shells range from 1.5-50 mm",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "form: most shells coil to the 32) * @ *.",
                    answer: "",
                  },
                  {
                    number: 33,
                    text: "some shells have ribs, spines or 33) * @ *.",
                    answer: "",
                  },
                  {
                    number: 33,
                    text: "•	they have various colours and patterns",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Feeding habits",
                question_text: [
                  {
                    number: 33,
                    text: "•	mainly feed on rotting plants, fungi or algae",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "some eat live animals, e.g. shied slugs eat 34) * @ *.",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Predators",
                question_text: [
                  {
                    number: 35,
                    text: "•	birds, frogs, flies",
                    answer: "",
                  },
                  {
                    number: 35,
                    text: "humans - snails were probably introduced to Britain as food in the 35) * @ *.",
                    answer: "",
                  },
                  {
                    number: 36,
                    text: "many gastropods have particular types of 36) * @ *. e.g. glutinous snail makes itself slippery.",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Habitats",
                question_text: [
                  {
                    number: 37,
                    text: "•	gastropods prefer dampness and shade",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "37) * @ * conditions are worst",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "biggest variety is found in old, natural habitats, e.g. 38) * @ *. and meadowland",
                    answer: "",
                  },
                  {
                    number: 39,
                    text: "•	highly specialised species live in unusual habitats, e.g. blind snail lives entirely below the 39) * @ *",
                    answer: "",
                  },
                  {
                    number: 40,
                    text: "good indicators of the quality of the 40) * @ *",
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
      1: "animals",
      2: "zoo",
      3: "city",
      4: "travel",
      5: "18(th) May",
      6: "Library",
      7: "LEIGH",
      8: "04076254633",
      9: "magazine",
      10: "dinner",
      11: "D",
      12: "G",
      13: "A",
      14: "F",
      15: "D",
      16: "F",
      17: "J",
      18: "E",
      19: "C",
      20: "I",
      21: "D",
      22: "E",
      23: "C",
      24: "E",
      25: "A",
      26: "C",
      27: "B",
      28: "E",
      29: "G",
      30: "A",
      31: "sea",
      32: "right",
      33: "hair",
      34: "worms",
      35: "1ST Century",
      36: "defences/defenses",
      37: "dry",
      38: "forests",
      39: "ground",
      40: "environment",
    },
  },
];
