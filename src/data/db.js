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
  {
    title: "IELTS Listening 12",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis12Part1,
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
        audioUrl: audios.lis12Part2,
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
                question:
                  "On the day of the race the speaker recommends parking",
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
        audioUrl: audios.lis12Part3,
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
        audioUrl: audios.lis12Part4,
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
  },
  {
    title: "IELTS Listening 13",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis13Part1,
        parts: [
          {
            part: 1,
            title: "Music Alive Agency",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER foreach answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "",
                question_text: [
                  {
                    number: 1,
                    text: "Members' details are on a 1 ) * @ *",
                    answer: "",
                  },
                  {
                    number: 2,
                    text: "Type of music represented: modern music (2) * @ *and jazz)",
                    answer: "",
                  },
                  {
                    number: 3,
                    text: "Newsletter comes out once a 3) * @ *",
                    answer: "",
                  },
                  {
                    number: 4,
                    text: "Cost of adult membership: 4) £ * @ *",
                    answer: "",
                  },
                  {
                    number: 5,
                    text: "Current number of members: 5) *  @ *",
                    answer: "",
                  },
                  {
                    number: 6,
                    text: "Facilities include: rehearsal rooms and a 6) * @ *",
                    answer: "",
                  },
                  {
                    number: 7,
                    text: "There is no charge for 7) * @ * advice",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "To become a member",
                question_text: [
                  {
                    number: 8,
                    text: "Send a letter with contact details and a recent 8) * @ *",
                    answer: "",
                  },
                  {
                    number: 9,
                    text: "Address: 707, 9) * @ * Street, Marbury",
                    answer: "",
                  },
                  {
                    number: 10,
                    text: "Contact email: music.10 )* @ * @bsu.co.uk",
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
        audioUrl: audios.lis13Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11-14",
            description:
              "Choose the correct letter, A, B or C. Information for participants in the Albany fishing competition",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "What do participants need to take to the registration desk?",
                type: "multiple-choice",
                options: [
                  "a form of identification",
                  "a competitor number",
                  "cash for the entrance fee",
                ],
                answer: "a form of identification",
              },
              {
                number: 12,
                question:
                  "What does the entrance fee to the competition include?",
                type: "multiple-choice",
                options: [
                  "equipment for fishing",
                  "all food for both days",
                  "fuel for the fishing",
                ],
                answer: "all food for both days",
              },
              {
                number: 13,
                question:
                  "Participants without a fishing license are recommended to apply for one",
                type: "multiple-choice",
                options: [
                  "at the registration desk",
                  "over the phone",
                  "on the internet",
                ],
                answer: "on the internet",
              },
              {
                number: 14,
                question: "What will happen at 6pm on Sunday?",
                type: "multiple-choice",
                options: [
                  "The time allocated for fishing will end",
                  "The fish caught will be judged",
                  "The prizes will be awarded to the winners",
                ],
                answer: "The fish caught will be judged",
              },
            ],
          },
          {
            part: 2,
            title: "Albany Fishing Competition Map",
            questions_range: "Questions 15–20",
            description:
              "Label the map below.Write the correct letter, A- I, next to questions 15-20.",
            type: "map",
            image: imges.img13,
            questions: [
              {
                number: 15,
                option: "15	Registration area",
                answer: "A",
              },
              {
                number: 16,
                option: "Shore fishing area",
                answer: "A",
              },
              {
                number: 17,
                option: "Boat launching area ",
                answer: "B",
              },
              {
                number: 18,
                option: "Judging area",
                answer: "C",
              },
              {
                number: 19,
                option: "Dining area ",
                answer: "C",
              },
              {
                number: 20,
                option: "Prize-giving area",
                answer: "C",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis13Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-26",
            description:
              "Choose the correct letter, A, B or C. Preparing for the end-of-year art exhibition",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question:
                  "Max and Abby agree that in the art exhibition they are looking forward to",
                type: "multiple-choice",
                options: [
                  "showing people their work",
                  "getting feedback from their tutor",
                  "talking to other students about their displays",
                ],
                answer: "showing people their work",
              },
              {
                number: 22,
                question:
                  "In last year's exhibition, both students were impressed by",
                type: "multiple-choice",
                options: [
                  "a set of metal sculptures",
                  "a series of wooden models",
                  "a collection of textile designs",
                ],
                answer: "a collection of textile designs",
              },
              {
                number: 23,
                question: "What has Max decided to call his display?",
                type: "multiple-choice",
                options: ["Mother Nature", "Views of Farmland", "Seasons"],
                answer: "Seasons",
              },
              {
                number: 24,
                question:
                  "What does Abby think will be difficult about preparing for their displays?",
                type: "multiple-choice",
                options: [
                  "having enough time to set it up",
                  "choosing which pieces to show",
                  "filling up all the available space",
                ],
                answer: "choosing which pieces to show",
              },
              {
                number: 25,
                question:
                  "What does Abby say about the summary they have to write?",
                type: "multiple-choice",
                options: [
                  "She isn't sure whether people will read it",
                  "It will be difficult to keep it short enough",
                  "It will be hard to clarify the reasons for her work",
                ],
                answer: "It will be difficult to keep it short enough",
              },
              {
                number: 26,
                question:
                  "What aspect of the display will the students organise themselves?",
                type: "multiple-choice",
                options: [
                  "arranging the lighting",
                  "inviting local journalists",
                  "providing comment forms",
                ],
                answer: "providing comment forms",
              },
            ],
          },

          {
            part: 2,
            title: "Questions 27–30",
            question:
              "Which feature do the speakers identify as particularly interesting for each of the following exhibitions they saw?",
            description:
              "Choose FOUR answers from the box and write the correct letter, A-F, next to questions 27-30.Interesting features",
            type: "matching",
            items: [
              "the realistic colours ",
              "the sense of space ",
              "the unusual interpretation of the theme",
              "the painting technique ",
              "the variety of materials use ",
              "the use of light and shade",
            ],
            questions: [
              {
                number: 27,
                option: "On the Water",
                answer: "",
              },
              {
                number: 28,
                option: "City Life",
                answer: "",
              },
              {
                number: 29,
                option: "Faces",
                answer: "",
              },
              {
                number: 30,
                option: "Moods",
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis13Part4,
        parts: [
          {
            part: 1,
            title: "The Mangrove Regeneration Project",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below Write NO MORE THAN TWO WORDS for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Background: Mangrove forests",
                question_text: [
                  {
                    number: 31,
                    text: "protect coastal areas from 31) * @ * by the sea",
                    answer: "",
                  },
                  {
                    number: 31,
                    text: "are an important habitat for wildlife",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Problems",
                question_text: [
                  {
                    number: 32,
                    text: "mangroves had been used by farmers as 32) * @ *",
                    answer: "",
                  },
                  {
                    number: 33,
                    text: "mangroves were poisoned by the use of 33) * @ *",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "Local people used the mangroves as a place to put their 34) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Actions taken to protect the mangroves",
                question_text: [
                  {
                    number: 35,
                    text: "a barrier which was made of 35) * @ * was constructed — but it failed",
                    answer: "",
                  },
                  {
                    number: 35,
                    text: "new mangroves had to be grown from seed",
                    answer: "",
                  },
                  {
                    number: 36,
                    text: "the seeds of the 36) * @ * mangrove were used",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "First set of seedlings",
                question_text: [
                  {
                    number: 37,
                    text: "kept in small pots in a 37) * @ *. ",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "Watered with 38) * @ * water",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "planted out on south side of a small island",
                    answer: "",
                  },
                  {
                    number: 39,
                    text: "at risk from the large 39) * @ * population",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Second set of seedlings",
                question_text: [
                  {
                    number: 40,
                    text: "planted in the seabed near established mangrove roots",
                    answer: "",
                  },
                  {
                    number: 40,
                    text: "the young plants were destroyed in a 40) * @ *",
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
      1: "database",
      2: "rock",
      3: "month",
      4: "45",
      5: "750",
      6: "studio",
      7: "legal",
      8: "recording",
      9: "KIPPAX",
      10: "talent",
      11: "A",
      12: "B",
      13: "C",
      14: "B",
      15: "G",
      16: "A",
      17: "C",
      18: "H",
      21: "A",
      22: "B",
      23: "A",
      24: "A",
      25: "B",
      26: "C",
      27: "D",
      28: "B",
      29: "A",
      30: "C",
      31: "flooding",
      32: "firewood",
      33: "fertilizer",
      34: "trash",
      35: "sand",
      36: "grey / gray",
      37: "hot house",
      38: "rain",
      39: "rabbit",
      40: "storm",
    },
  },
  {
    title: "IELTS Listening 14",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis14Part1,
        parts: [
          {
            part: 1,
            title: "Questions 1–6",
            question: "Which hotel offers the following facilities?",
            description:
              "Write the correct letter, A, B, C or D, next to questions 1–6.",
            type: "matching",
            items: [
              "Royal Hotel",
              "Star Hotel",
              "Winchester Hotel",
              "all three hotels",
            ],
            questions: [
              {
                number: 1,
                option: "sea view",
                answer: "",
              },
              {
                number: 2,
                option: "disabled access",
                answer: "",
              },
              {
                number: 3,
                option: "indoor play area",
                answer: "",
              },
              {
                number: 4,
                option: "choice of food",
                answer: "",
              },
              {
                number: 5,
                option: "private dining room",
                answer: "",
              },
              {
                number: 6,
                option: "group discount",
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "",
            questions_range: "Questions 7-10",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Things to do immediately",
                question_text: [
                  {
                    number: 7,
                    text: "Send a 7) * @ * to the Winchester Hotel",
                    answer: "",
                  },
                  {
                    number: 8,
                    text: "Make the 8) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Things to do later",
                question_text: [
                  {
                    number: 9,
                    text: "Find out who needs help with 9) * @ *",
                    answer: "",
                  },
                  {
                    number: 10,
                    text: "Tell people not to bring any 10) * @ *",
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
        audioUrl: audios.lis14Part2,
        parts: [
          {
            part: 1,
            title: "The game of curling",
            questions_range: "Questions 11-16",
            description:
              "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
            type: "sentence_completion",
            questions: [
              {
                number: 11,
                question_text:
                  "The four players on the team are called the * @ *, the Second, the Third and the Skip.",
              },
              {
                number: 12,
                question_text:
                  "The length of ice on which curling is played is called the * @ *",
              },
              {
                number: 13,
                question_text: "The target area is called the * @ *",
              },
              {
                number: 14,
                question_text: "Scottish brushes are usually made from * @ *",
              },
              {
                number: 15,
                question_text: "One shoe needs to have a sole made of * @ *",
              },
              {
                number: 16,
                question_text: "The captain of the team often carries a * @ *",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17-20",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 17,
                question: "Montreal Curling Club is famous as",
                type: "multiple-choice",
                options: [
                  "the champion club of the local league",
                  "the oldest sports club in the region",
                  "the most influential club in winter sports",
                ],
                answer: "the oldest sports club in the region",
              },
              {
                number: 18,
                question: "The Caledonian Curling Club was formed in order to",
                type: "multiple-choice",
                options: [
                  "attract interest in the sport",
                  "train young players",
                  "fix regulations for the game",
                ],
                answer: "fix regulations for the game",
              },
              {
                number: 19,
                question:
                  "In the 16th century, curling avoided being banned because",
                type: "multiple-choice",
                options: [
                  "it was already so popular",
                  "it was good training for battle",
                  "it was only played by children",
                ],
                answer: "it was good training for battle",
              },
              {
                number: 20,
                question:
                  "Early curling games in Canada used implements made of",
                type: "multiple-choice",
                options: ["local material", "imported stone", "cast iron"],
                answer: "local material",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis14Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21-24",
            description:
              "Choose the correct letter, A, B or C.\nUsing scientific techniques to investigate works of art ",
            type: "multiple-choice",
            questions: [
              {
                number: 21,
                question:
                  "What does Josh think about Jackson Pollock's paintings?",
                type: "multiple-choice",
                options: [
                  "They are easy to copy",
                  "They are complex",
                  "They are childish",
                ],
                answer: "They are complex",
              },
              {
                number: 22,
                question: "The $5 painting was considered to be a fake because",
                type: "multiple-choice",
                options: [
                  "it lacked documentation",
                  "it was too cheap",
                  "it featured the wrong colours",
                ],
                answer: "it lacked documentation",
              },
              {
                number: 23,
                question:
                  "What made the International Foundation for Art Research reject the $5 painting?",
                type: "multiple-choice",
                options: [
                  "what was on the back of the painting",
                  "the type of paint used",
                  "how the paint was applied",
                ],
                answer: "what was on the back of the painting",
              },
              {
                number: 24,
                question: "What do Josh and Emily agree about art evaluation?",
                type: "multiple-choice",
                options: [
                  "Only an experienced critic can evaluate a painting's authenticity",
                  "Modern scientific methods have replaced the traditional approach",
                  "Experts from the science and art worlds should work together",
                ],
                answer:
                  "Experts from the science and art worlds should work together",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 25–30",
            question: "Complete the summary below.",
            description:
              "Choose SIX answers from the box and write the correct letter, A–H, next to questions 25–30.",
            type: "matching",
            items: [
              "ultrasound",
              "gamma-ray technology",
              "stone",
              "a laser scanner",
              "a radar machine",
              "glass",
              "a thermographic camera",
              "brick",
            ],
            questions: [
              {
                number: 25,
                option:
                  "Seracini used ......... to help make a model of the building.",
                answer: "",
              },
              {
                number: 26,
                option:
                  "Seracini used ......... to reveal different materials in the walls.",
                answer: "",
              },
              {
                number: 27,
                option:
                  "He found the original architecture. Seracini guessed that Da Vinci painted his masterpiece on the east wall, in a space that used to hold .........",
                answer: "",
              },
              {
                number: 28,
                option:
                  "Seracini analysed the wall using ......... and discovered a second wall behind it.",
                answer: "",
              },
              {
                number: 29,
                option:
                  "Seracini hypothesised that the Da Vinci painting is still there on the original ......... wall.",
                answer: "",
              },
              {
                number: 30,
                option: "Seracini is using ......... to prove his theory.",
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis14Part4,
        parts: [
          {
            part: 1,
            title: "Sustainability",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Sustainability:",
                question_text: [
                  {
                    number: 31,
                    text: "Term first used in 1987 by writers of United Nations report",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Lecture aim: ",
                question_text: [
                  {
                    number: 31,
                    text: "Analysis of the 31) * @ * surrounding sustainability",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Sustainable development:",
                question_text: [
                  {
                    number: 32,
                    text: "Development that will meet the needs of both present and future 32) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Myth 1:",
                question_text: [
                  {
                    number: 33,
                    text: "No mention of the 33) * @ * in original definition",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "Original focus: poorer nations should have the same 34) * @ * to natural resources as richer nations",
                    answer: "",
                  },
                  {
                    number: 35,
                    text: "This would help them achieve better 35) * @ * conditions ",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Myth 2: 'Green' vs Sustainable",
                question_text: [
                  {
                    number: 36,
                    text: "Key difference: unlike 'green', 'sustainable' is not always associated with things that are natural",
                    answer: "",
                  },
                  {
                    number: 36,
                    text: "For the sustainability lobby, the key problem is finding 36) * @ * to develop technology",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "Sustainability lobby is prepared to 37) * @ * nuclear energy . ",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "Myth 3: Role of technology",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "Introduction of battery stations on 38) * @ * is an example of new business thinking, not new technology",
                    answer: "",
                  },
                  {
                    number: 39,
                    text: "•	Agriculture: some farmers plant crops like sunflowers which don’t use much water, unlike 39) * @ *",
                    answer: "",
                  },
                  {
                    number: 40,
                    text: "•	Greater use of water is a result of changes in our 40) * @ *",
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
      1: "B",
      2: "D",
      3: "C",
      4: "A",
      5: "A",
      6: "C",
      7: "deposit",
      8: "invitations",
      9: "transport",
      10: "presents",
      11: "lead",
      12: "sheet",
      13: "house",
      14: "horse hair",
      15: "rubber",
      16: "stopwatch",
      17: "B",
      18: "C",
      19: "B",
      20: "C",
      21: "B",
      22: "A",
      23: "B",
      24: "C",
      25: "D",
      26: "G",
      27: "F",
      28: "E",
      29: "C",
      30: "B",
      31: "confusion",
      32: "generations",
      33: "environment",
      34: "rights",
      35: "living",
      36: "time",
      37: "accept",
      38: "roads",
      39: "corn",
      40: "diet",
    },
  },
  {
    title: "IELTS Listening 15",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis15Part1,
        parts: [
          {
            part: 1,
            title: "Music Alive Agency",
            questions_range: "Questions 1-10",
            description: "Write ONE WORD AND/OR A NUMBER foreach answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "",
                question_text: [
                  {
                    number: 1,
                    text: "Members' details are on a 1 ) * @ *",
                    answer: "",
                  },
                  {
                    number: 2,
                    text: "Type of music represented: modern music (2) * @ *and jazz)",
                    answer: "",
                  },
                  {
                    number: 3,
                    text: "Newsletter comes out once a 3) * @ *",
                    answer: "",
                  },
                  {
                    number: 4,
                    text: "Cost of adult membership: 4) £ * @ *",
                    answer: "",
                  },
                  {
                    number: 5,
                    text: "Current number of members: 5) *  @ *",
                    answer: "",
                  },
                  {
                    number: 6,
                    text: "Facilities include: rehearsal rooms and a 6) * @ *",
                    answer: "",
                  },
                  {
                    number: 7,
                    text: "There is no charge for 7) * @ * advice",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "To become a member",
                question_text: [
                  {
                    number: 8,
                    text: "Send a letter with contact details and a recent 8) * @ *",
                    answer: "",
                  },
                  {
                    number: 9,
                    text: "Address: 707, 9) * @ * Street, Marbury",
                    answer: "",
                  },
                  {
                    number: 10,
                    text: "Contact email: music.10 )* @ * @bsu.co.uk",
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
        audioUrl: audios.lis15Part2,
        parts: [
          {
            part: 1,
            title: "Experiences of mountain climbing",
            questions_range: "Questions 11-14",
            description:
              "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
            type: "sentence_completion",
            questions: [
              {
                number: 11,
                question_text:
                  "Every year more than 30,000 people * @ * to climb Mont Blanc.",
              },
              {
                number: 12,
                question_text:
                  "Approximately 200 reach the top every day in the * @ * months.",
              },
              {
                number: 13,
                question_text:
                  "In July 2007, there were 30 fatalities, chiefly due to * @ * conditions.",
              },
              {
                number: 14,
                question_text: "One danger is * @ * caused by other climbers.",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 15-17",
            description: "Choose the correct answer A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 15,
                question: "How did Katherine do her most recent climb?",
                type: "multiple-choice",
                options: ["in a group", "with a guide", "on her own"],
                answer: "on her own",
              },
              {
                number: 16,
                question:
                  "Why did Katherine find her first climb of Mont Blanc difficult?",
                type: "multiple-choice",
                options: [
                  "because of poor weather conditions",
                  "because of the time she was climbing",
                  "because the route was crowded",
                ],
                answer: "because of the time she was climbing",
              },
              {
                number: 17,
                question:
                  "What did Katherine do on her second climb that made it easier?",
                type: "multiple-choice",
                options: [
                  "She spent a few days in Chamonix beforehand",
                  "She did the climb over two days",
                  "She climbed smaller peaks for training",
                ],
                answer: "She climbed smaller peaks for training",
              },
            ],
          },
          {
            part: 3,
            title: "Questions 18–20",
            question:
              "Which THREE experiences taught Katherine about Mont Blanc?",
            description: "Choose THREE letters, A–F.",
            type: "multiple_choice_multiple_answers",
            options: [
              "Be in good physical condition",
              "Have the right climbing equipment",
              "Wear several layers of clothing",
              "Protect yourself from the sun",
              "Climb with others",
              "Acclimatise yourself to the altitude first",
            ],
            questions: [
              {
                number: 18,
                option: "",
                answer: "",
              },
              {
                number: 19,
                option: "",
                answer: "",
              },
              {
                number: 20,
                option: "",
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis15Part3,
        parts: [
          {
            part: 1,
            title: "Computer Labs ",
            questions_range: "Questions 21-27",
            description:
              "Complete the notes below. Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "",
                question_text: [
                  {
                    number: 1,
                    text: "The 4 labs below can be used by undergraduates",
                  },
                  {
                    number: 21,
                    text: "Other computer labs can only be used by postgraduates and 21) * @ *",
                  },
                ],
              },
              {
                prompt: "Lab Locations\nWimborne",
                question_text: [
                  {
                    number: 2,
                    text: "Johnson Building",
                  },
                ],
              },
              {
                prompt: "Franklin",
                question_text: [
                  {
                    number: 2,
                    text: "Computer Sciences Building",
                  },
                ],
              },
              {
                prompt: "Salisbury:",
                question_text: [
                  {
                    number: 22,
                    text: "22) * @ *",
                  },
                ],
              },
              {
                prompt: "Court:",
                question_text: [
                  {
                    number: 4,
                    text: "Johnson Building",
                  },
                ],
              },
              {
                prompt: "",
                question_text: [
                  {
                    number: 23,
                    text: "Reservations 23) * @ * a day unless computers are free",
                  },
                ],
              },
              {
                prompt: "",
                question_text: [
                  {
                    number: 24,
                    text: "Write reservation in book 24) * @ *(Penalty for erasing someone else's reservation — 1 year ban)",
                  },
                ],
              },
              {
                prompt: "User Name:",
                question_text: [
                  {
                    number: 8,
                    text: "jamessmith2",
                  },
                ],
              },
              {
                prompt: "Password:",
                question_text: [
                  {
                    number: 25,
                    text: "25) * @ *",
                  },
                ],
              },
              {
                prompt: "Printing",
                question_text: [
                  {
                    number: 26,
                    text: "Pick up print outs from 26) * @ * in Franklin",
                  },
                ],
              },
              {
                prompt: "Costs",
                question_text: [
                  {
                    number: 27,
                    text: "27) * @ *",
                  },
                ],
              },
            ],
          },

          {
            part: 2,
            title: "Questions 28-30",
            description: "Choose the correct answer A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 28,
                question:
                  "The introductory computer course that James decides to take is…",
                type: "multiple-choice",
                options: ["beginner", "intermediate", "advanced"],
                answer: "beginner",
              },
              {
                number: 29,
                question:
                  "The computer laboratory for James’ introductory computer course is in…",
                type: "multiple-choice",
                options: ["Wimborne", "Franklin", "Court"],
                answer: "Court",
              },
              {
                number: 30,
                question: "James will take his introductory computer course…",
                type: "multiple-choice",
                options: [
                  "on Thursday at 2.00pm",
                  "on Tuesday at 4.30pm",
                  "on Tuesday at 5.00pm",
                ],
                answer: "on Tuesday at 5.00pm",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis15Part4,
        parts: [
          {
            part: 1,
            title: "Treadle Pump",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Background",
                question_text: [
                  {
                    number: 31,
                    text: "The pump was designed for farmers in India.",
                    answer: "",
                  },
                  {
                    number: 31,
                    text: "In the dry season, many people move to 31) * @ *. for paid jobs.",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Description",
                question_text: [
                  {
                    number: 32,
                    text: "Like an exercise bike made up of two treadles.",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "Metal pump cylinders are linked to a pond or well by a plastic 32) * @ *.",
                    answer: "",
                  },
                  {
                    number: 33,
                    text: "Farmers use pumps in the 33) * @ * period.",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "In 2006, a new version was developed to be used by the 34) * @ *",
                    answer: "",
                  },
                  {
                    number: 35,
                    text: "To prevent blockages, the design was improved by attaching a bamboo 35) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Benefits",
                question_text: [
                  {
                    number: 36,
                    text: "Economically, many farmers have increased their 36) * @ *.",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "For health, pump users have a better 37) * @ *.",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "Environmentally, the pump is less dependent on 38) * @ *. fuel.",
                    answer: "",
                  },
                  {
                    number: 39,
                    text: "For sustainability, the device is easy to 39) * @ * and maintain.",
                    answer: "",
                  },
                  {
                    number: 40,
                    text: "Mechanics need a short period of time for 40) * @ *.",
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
      1: "Database",
      2: "Rock",
      3: "Month",
      4: "45",
      5: "750",
      6: "Studio",
      7: "Legal",
      8: "Recording",
      9: "KIPPAX",
      10: "Talent",
      11: "attempt",
      12: "summer",
      13: "bad weather",
      14: "falling rocks",
      15: "C",
      16: "A",
      17: "A",
      18: "C",
      19: "D",
      20: "F",
      21: "staff",
      22: "library",
      23: "2 hours",
      24: "in pen",
      25: "biology",
      26: "tray",
      27: "nothing, free",
      28: "A",
      29: "B",
      30: "C",
      31: "urban",
      32: "tube",
      33: "cooler",
      34: "conditions",
      35: "filter",
      36: "income",
      37: "diet",
      38: "fossil",
      39: "use",
      40: "support",
    },
  },
  {
    title: "IELTS Listening 16",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis16Part1,
        parts: [
          {
            part: 1,
            title: "Getting a job with an airline",
            questions_range: "Questions 1-10",
            description:
              "Complete the notes below.Write ONE WORD AND/OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Duties include",
                question_text: [
                  {
                    number: 1,
                    text: "giving the safety demonstration",
                    answer: "",
                  },
                  {
                    number: 1,
                    text: "some responsibility for 1) * @ * from sales during the flight",
                    answer: "",
                  },
                  {
                    number: 1,
                    text: "serving food",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Requirements",
                question_text: [
                  {
                    number: 2,
                    text: "must be over age 19 and at least 2) * @ * cm tall",
                    answer: "",
                  },
                  {
                    number: 3,
                    text: "basic academic requirements: English and 3) * @ *",
                    answer: "",
                  },
                  {
                    number: 4,
                    text: "at least one other 4) * @ * is desirable",
                    answer: "",
                  },
                  {
                    number: 5,
                    text: "must be able to 5) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Training will include",
                question_text: [
                  {
                    number: 6,
                    text: "what to do in case of 6) * @ * during a flight",
                    answer: "",
                  },
                  {
                    number: 7,
                    text: "awareness of different 7) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Application",
                question_text: [
                  {
                    number: 8,
                    text: "the airline is called 8) * @ *",
                    answer: "",
                  },
                  {
                    number: 8,
                    text: "can download application form from website",
                    answer: "",
                  },
                  {
                    number: 8,
                    text: "mention experience of:",
                    answer: "",
                  },
                  {
                    number: 8,
                    text: "— dealing with questions from supermarket customers",
                    answer: "",
                  },
                  {
                    number: 9,
                    text: "— working in a 9) * @ * (voluntary work)",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Other information",
                question_text: [
                  {
                    number: 10,
                    text: "you don't have to buy a 10) * @ *.",
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
        audioUrl: audios.lis16Part2,
        parts: [
          {
            part: 1,
            title: "Questions 11 and 12",
            question:
              "Which TWO kinds of people are the scholarships intended for?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "people working as temporary staff",
              "people with management experience",
              "people straight from college",
              "people with at least three years' experience",
              "people with or without qualifications",
            ],
            questions: [
              {
                number: 11,
                option: "",
                answer: "",
              },
              {
                number: 12,
                option: "",
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 13 and 14",
            question:
              "Which TWO things does Marie say about the hospitality industry in Scotland?",
            description: "Choose TWO letters, A–E.",
            type: "matching",
            items: [
              "It mainly attracts UK tourists",
              "It pays high wages.",
              "It is very important for the Scottish economy",
              "It is highly regarded by visitors.",
              "It is attracting a lot of investment",
            ],
            questions: [
              {
                number: 13,
                option: "",
                answer: "",
              },
              {
                number: 14,
                option: "",
                answer: "",
              },
            ],
          },
          {
            part: 1,
            title: "Questions 15–20",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 15,
                question: "Why did Marie start working at the Rock Hotel?",
                options: [
                  "It was the only job available",
                  "She needed a job with flexible working hours.",
                  "She wanted a job working with people.",
                ],
                answer: "She wanted a job working with people.",
              },
              {
                number: 16,
                question:
                  "What did the scholarship application process involve?",
                options: [
                  "giving a presentation",
                  "writing a report about the Rock Hotel",
                  "researching the role of hotel manager",
                ],
                answer: "researching the role of hotel manager",
              },
              {
                number: 17,
                question:
                  "What does Marie say about the other winners she met?",
                options: [
                  "They were not as old as she expected",
                  "They were doing a variety of jobs in the hotel sector",
                  "Most of them had applied for scholarships before",
                ],
                answer: "They were doing a variety of jobs in the hotel sector",
              },
              {
                number: 18,
                question:
                  "Marie says that at the Florida Beach Hotel, every member of staff",
                options: [
                  "takes part in annual customer service training sessions",
                  "is responsible for providing an efficient service",
                  "is expected to interact with visitors.",
                ],
                answer: "is responsible for providing an efficient service",
              },
              {
                number: 19,
                question:
                  "What did Marie find out about people's attitude to visiting Scotland?",
                options: [
                  "Most people would be interested in visiting it",
                  "People knew a surprising amount about it",
                  "People only wanted to see a limited number of places",
                ],
                answer: "Most people would be interested in visiting it",
              },
              {
                number: 20,
                question:
                  "What improvement has Marie introduced at the Rock Hotel?",
                options: [
                  "getting better feedback from customers",
                  "providing more information for customers",
                  "making contact with more customers",
                ],
                answer: "providing more information for customers",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis16Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21–26",
            question: "Label the diagram below.",
            description:
              "Choose SIX answers from the box and write the correct letter, A–I, next to questions 21–26.",
            image: imges.img16,
            type: "matching",
            items: [
              "fresh air is removed",
              "fresh air is pulled in",
              "heat loss is reduced",
              "rainwater is checked",
              "rainwater is used",
              "old air is removed",
              "temperature is checked",
              "water temperature is reduced",
              "water is stored",
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
            part: 2,
            title: "Questions 27–30",
            description: "Choose the correct letter, A, B or C.",
            type: "multiple-choice",
            questions: [
              {
                number: 27,
                question:
                  "What do John and Debbie think will surprise visitors to the Education House building?",
                options: [
                  "how high the building is",
                  "where the main entrance is",
                  "what is on the outside walls",
                ],
                answer: "what is on the outside walls",
              },
              {
                number: 28,
                question:
                  "What is their reaction to the findings on staff productivity in the building?",
                options: [
                  "They think the findings are predictable.",
                  "They believe more research should be done.",
                  "They suggest the findings are reported in the media.",
                ],
                answer: "They believe more research should be done.",
              },
              {
                number: 29,
                question:
                  "What do they think about the ‘edge space’ in the building?",
                options: [
                  "It might be unpopular with staff.",
                  "It is a surprising part of the design.",
                  "It is an area for managers.",
                ],
                answer: "It is a surprising part of the design.",
              },
              {
                number: 30,
                question:
                  "What could be a problem for the building's water system?",
                options: [
                  "the reaction of the staff",
                  "the completion date",
                  "the possible health hazards",
                ],
                answer: "the possible health hazards",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis16Part4,
        parts: [
          {
            part: 1,
            title: "Textiles with Business Studies",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below.Write NO MORE THAN TWO WORDS for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "New development",
                question_text: [
                  {
                    number: 31,
                    text: "Now possible to work with the 31) * @ * Faculty to widen learning opportunities",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Aims of course",
                question_text: [
                  {
                    number: 32,
                    text: "To cover three areas of textiles - knitted - 32 * @ * - woven",
                    answer: "",
                  },
                  {
                    number: 32,
                    text: "To focus on related business operations",
                    answer: "",
                  },
                  {
                    number: 33,
                    text: "Work placement: focus on studio work in the context of the 33) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Course content",
                question_text: [
                  {
                    number: 34,
                    text: "Year One: experimentation",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "Visual research with 34) * @ * and suggestions for its application",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "Year Two: relating skills to the real world",
                    answer: "",
                  },
                  {
                    number: 35,
                    text: "Optional course: 35) * @ * design processes",
                    answer: "",
                  },
                  {
                    number: 36,
                    text: "Three- or four-year course? Students are offered 36) * @ * to help them make their decision",
                    answer: "",
                  },
                  {
                    number: 34,
                    text: "Year Three: consolidation",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "Learning style: 37) * @ * practice",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "Students produce:",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "-a dissertation",
                    answer: "",
                  },
                  {
                    number: 37,
                    text: "-a portfolio",
                    answer: "",
                  },
                  {
                    number: 38,
                    text: "38) * @ *",
                    answer: "",
                  },
                ],
              },
              {
                prompt: "Career opportunities",
                question_text: [
                  {
                    number: 39,
                    text: "Within textile business-e.g. stylists, retail managers",
                    answer: "",
                  },
                  {
                    number: 39,
                    text: "Further opportunities - jobs in 39) * @ * and trend forecasting",
                    answer: "",
                  },
                  {
                    number: 40,
                    text: "If interested - come back tomorrow for a short 40) * @ *",
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
      1: "Money",
      2: "168",
      3: "Maths/Math",
      4: "language",
      5: "swim",
      6: "illness",
      7: "cultures",
      8: "EURONTAS",
      9: "team",
      10: "uniform",
      11: "D/E",
      12: "E/D",
      13: "C/D",
      14: "D/C",
      15: "B",
      16: "B",
      17: "A",
      18: "C",
      19: "C",
      20: "A",
      21: "F",
      22: "G",
      23: "B",
      24: "H",
      25: "E",
      26: "C",
      27: "B",
      28: "A",
      29: "B",
      30: "A",
      31: "Engineering",
      32: "Printed",
      33: "Global Market",
      34: "Documentation",
      35: "Traditional",
      36: "Tutorials",
      37: "Reflective",
      38: "Business Plan",
      39: "Journalism",
      40: "Interview",
    },
  },
  {
    title: "IELTS Listening 17",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis17Part1,
        parts: [
          {
            part: 1,
            title: "Accommodation Request",
            questions_range: "Questions 1-10",
            description:
              "Complete the notes below.White NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            type: "note_completion",
            questions: [
              {
                prompt: "Type of accommodation:",
                question_text: [
                  {
                    number: 1,
                    text: "a house",
                  },
                ],
              },
              {
                prompt: "Preferred location:",
                question_text: [
                  {
                    number: 1,
                    text: "the 1) * @ * of the town",
                  },
                ],
              },
              {
                prompt: "Facilities required:",
                question_text: [
                  {
                    number: 2,
                    text: "furnished property - with a 2) * @ *",
                  },
                ],
              },
              {
                prompt: "Period of time required:",
                question_text: [
                  {
                    number: 2,
                    text: "one year",
                  },
                ],
              },
              {
                prompt: "Start date of rental period:",
                question_text: [
                  {
                    number: 3,
                    text: " 3) * @ *",
                  },
                ],
              },
              {
                prompt: "Present address:",
                question_text: [
                  {
                    number: 4,
                    text: "56, Stone Street",
                  },
                ],
              },
              {
                prompt: "Phone number:",
                question_text: [
                  {
                    number: 4,
                    text: "(mobiIe) 07942 326584",
                  },
                ],
              },
              {
                prompt: "Reference from:",
                question_text: [
                  {
                    number: 4,
                    text: "her 4) * @ *",
                  },
                ],
              },
              {
                prompt: "Maximum rent:",
                question_text: [
                  {
                    number: 5,
                    text: "5) * @ * per month",
                  },
                ],
              },
              {
                prompt: "Applicant’s job:",
                question_text: [
                  {
                    number: 6,
                    text: "6) * @ *",
                  },
                ],
              },
              {
                prompt: "Documents to be supplied ID check:",
                question_text: [
                  {
                    number: 7,
                    text: "applicant's passport",
                  },
                ],
              },
              {
                prompt: "Credit check:",
                question_text: [
                  {
                    number: 7,
                    text: "a 7) * @ *",
                  },
                ],
              },
              {
                prompt: "Viewing arrangements:",
                question_text: [
                  {
                    number: 8,
                    text: "Address of property: 33, 8) * @ * Street",
                  },
                  {
                    number: 8,
                    text: "Viewing day and time:	Saturday 4 p.m",
                  },
                ],
              },
              {
                prompt: "To check:",
                question_text: [
                  {
                    number: 9,
                    text: "Is there a 9) * @ * in the house?",
                  },
                  {
                    number: 10,
                    text: "Is there a 10) * @ * nearby?",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis17Part2,
        parts: [
          {
            part: 2,
            title: "Questions 11–14",
            question: "Choose the correct letter, A, B or C.",
            description: "Information for fire wardens",
            type: "multiple-choice",
            questions: [
              {
                number: 11,
                question:
                  "The company is having this meeting about fire procedures because",
                options: [
                  "employees did badly in the last annual fire drill",
                  "there have been changes in the building layout",
                  "new staff have joined the company",
                ],
                answer: "",
              },
              {
                number: 12,
                question: "There has been a recent upgrade to",
                options: [
                  "the sprinkler system",
                  "the fire extinguishers",
                  "the alarm system",
                ],
                answer: "",
              },
              {
                number: 13,
                question:
                  "During the minor fire in January, some staff working in the factory",
                options: [
                  "were unable to read fire notices",
                  "left fire doors open",
                  "were unwilling to start the fire alarm",
                ],
                answer: "",
              },
              {
                number: 14,
                question:
                  "In the fire in January, the problem with office staff was that they",
                options: [
                  "refused to leave personal items behind",
                  "moved too slowly during the evacuation",
                  "did not move far away enough from the building",
                ],
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 15–20",
            question:
              "What comment does the speaker make about each of the following aspects of fire safety?",
            description:
              "Write the correct letter, A, B or C, next to questions 15-20",
            type: "matching",
            items: [
              "It should be a priority for fire wardens",
              "It will be dealt with by an external specialist",
              "It does not require attention",
            ],
            questions: [
              {
                number: 15,
                option: "ensuring there are no obstacles in fire escape routes",
                answer: "",
              },
              {
                number: 16,
                option: "checking that fire doors are easily opened",
                answer: "",
              },
              {
                number: 17,
                option: "showing staff how to look after each other",
                answer: "",
              },
              {
                number: 18,
                option: "training staff to use fire extinguishers correctly",
                answer: "",
              },
              {
                number: 19,
                option: "checking that staff are aware of evacuation points",
                answer: "",
              },
              {
                number: 20,
                option: "checking that flammable liquids are properly stored",
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis17Part3,
        parts: [
          {
            part: 1,
            title: "Questions 21–25",
            question:
              "What comments do the speakers make about each of the following types of pigeon?",
            description:
              "Choose FIVE answers from the box and write the correct letter, A–H, next to questions 21–25.",
            type: "matching",
            items: [
              "eats meat",
              "communicates with its wings",
              "is found in a variety of locations",
              "feeds on a particular type of plant",
              "sings to attract a mate",
              "is endangered",
              "is brightly coloured",
              "avoids the ground",
            ],
            questions: [
              {
                number: 21,
                option: "Australian crested pigeon",
                answer: "",
              },
              {
                number: 22,
                option: "Rock pigeon",
                answer: "",
              },
              {
                number: 23,
                option: "Black-banded pigeon",
                answer: "",
              },
              {
                number: 24,
                option: "Galapagos pigeon",
                answer: "",
              },
              {
                number: 25,
                option: "Nicobar pigeon",
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Questions 26–30",
            question: "Choose the correct letter, A, B or C",
            description: "Pigeons",
            type: "multiple-choice",
            questions: [
              {
                number: 26,
                question: "When people feed city pigeons, it causes them to",
                options: [
                  "eed more successfully",
                  "become overweight",
                  "get sick",
                ],
                answer: "",
              },
              {
                number: 27,
                question:
                  "The Melbourne city council are tackling their pigeon problem by",
                options: [
                  "removing the pigeons from the city",
                  "scaring away pigeons",
                  "providing homes for the pigeons",
                ],
                answer: "",
              },
              {
                number: 28,
                question:
                  "Jennifer and Adam agree that the second stage of the council scheme is",
                options: ["expensive", "cruel", "ineffective"],
                answer: "",
              },
              {
                number: 29,
                question:
                  "What method of pigeon control was most successful in the city of Basel?",
                options: [
                  "trapping the pigeons",
                  "educating the public",
                  "building nesting sites",
                ],
                answer: "",
              },
              {
                number: 30,
                question:
                  "Adam and Jennifer decide to do some more research on how pigeons can",
                options: [
                  "affect our health",
                  "damage buildings",
                  "cause local flooding",
                ],
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis17Part4,
        parts: [
          {
            part: 1,
            title: "The Lontar Palm",
            questions_range: "Questions 31–40",
            description:
              "Complete the notes below. Write ONE WORD ONLY for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "The tree",
                question_text: [
                  {
                    number: 31,
                    text: "	grows on Roti, an Indonesian island",
                  },
                  {
                    number: 31,
                    text: "• is known as the tree of life’",
                  },
                  {
                    number: 31,
                    text: "•  produces delicious juice",
                  },
                  {
                    number: 31,
                    text: "• has a fruit resembling a 31) * @ * (female trees only)",
                  },
                ],
              },
              {
                prompt: "People climbing the trees",
                question_text: [
                  {
                    number: 32,
                    text: "• fix 32) * @ * to the tree trunks to help them climb",
                  },
                  {
                    number: 33,
                    text: "• keep their tools attached to a 33) * @ *",
                  },
                  {
                    number: 32,
                    text: "• often own particular trees",
                  },
                  {
                    number: 33,
                    text: "• contribute to the upkeep of the communal fence",
                  },
                ],
              },
              {
                prompt: "Using the juice",
                question_text: [
                  {
                    number: 34,
                    text: "• It quickly becomes 34) * @ * if left unprocessed.",
                  },
                  {
                    number: 34,
                    text: "• A concentrated form of it is drunk in the rainy season.",
                  },
                  {
                    number: 35,
                    text: "• It can be made into sugary 35) * @ *",
                  },
                ],
              },
              {
                prompt: "Using other parts of the tree",
                question_text: [
                  {
                    number: 36,
                    text: "• The leaf is used:",
                  },
                  {
                    number: 36,
                    text: "• to make containers, bags and roofing",
                  },
                  {
                    number: 36,
                    text: "• as garden 36) * @ *",
                  },
                  {
                    number: 37,
                    text: "• The leaf is used for brightly decorated hats worn at a 37) * @ *",
                  },
                  {
                    number: 38,
                    text: "• The leaf is used for a musical instrument which sounds like a 38) * @ *",
                  },
                  {
                    number: 39,
                    text: "• The stalk is used to make 39) * @ *",
                  },
                  {
                    number: 40,
                    text: "• The trunk is used in the construction of 40) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "South-east",
      2: "Washing machine",
      3: "15th May",
      4: "Employer",
      5: "675",
      6: "Translator",
      7: "Bank statement",
      8: "AINSWORTH",
      9: "Telephone",
      10: "Bus Stop",
      11: "B",
      12: "C",
      13: "C",
      14: "C",
      15: "A",
      16: "A",
      17: "B",
      18: "B",
      19: "A",
      20: "C",
      21: "B",
      22: "C",
      23: "H",
      24: "D",
      25: "F",
      26: "A",
      27: "C",
      28: "A",
      29: "B",
      30: "A",
      31: "Coconut",
      32: "Stones",
      33: "Belt",
      34: "Savor",
      35: "Biscuits",
      36: "Fertilizer",
      37: "Celebration",
      38: "Sasando",
      39: "Ropes",
      40: "Houses",
    },
  },
  {
    title: "IELTS Listening 18",
    audioUrl: "https://example.com/audio/test2.mp3",
    sections: [
      {
        section: 1,
        audioUrl: audios.lis18Part1,
        parts: [
          {
            part: 1,
            title: "Questions 1–8",
            question: "Choose the correct letter, A, B or C.",
            description: "",
            type: "multiple-choice",
            questions: [
              {
                number: 1,
                question: "The centre has enough accommodation for",
                options: ["18 people", "20 people", "38 people"],
                answer: "",
              },
              {
                number: 2,
                question: "The meeting room is currently",
                options: ["unavailable", "flooded", "booked"],
                answer: "",
              },
              {
                number: 3,
                question:
                  "Visitors must tell the centre in advance if they want to",
                options: [
                  "use the centre’s kitchen",
                  "have meals cooked for them",
                  "eat at restaurants outside",
                ],
                answer: "",
              },
              {
                number: 4,
                question: "All visitors on the tour of the farm can",
                options: [
                  "get information about organic farming",
                  "help to feed the animals",
                  "watch a tractor demonstration",
                ],
                answer: "",
              },
              {
                number: 5,
                question: "On the survival course people have to",
                options: [
                  "learn to use a map",
                  "find their own food",
                  "run through woodland",
                ],
                answer: "",
              },
              {
                number: 6,
                question: "From the centre it is easy to walk to",
                options: [
                  "Exmoor National Park",
                  "the beach",
                  "a cycling route",
                ],
                answer: "",
              },
              {
                number: 7,
                question: "If the weather is bad visitors can go to a",
                options: ["cinema", "theatre", "museum"],
                answer: "",
              },
              {
                number: 8,
                question: "Groups who wish to stay at the centre must pay",
                options: [
                  "part of the cost in advance",
                  "all of the cost in advance",
                  "all of the cost on arrival",
                ],
                answer: "",
              },
            ],
          },
          {
            part: 2,
            title: "Winsham Farm Address",
            questions_range: "Questions 9 and 10",
            description:
              "Complete the notes below. Write ONE WORD AND/OR NUMBERS for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Address:",
                question_text: [
                  {
                    number: 9,
                    text: "Winsham Farm, 9) * @ * Rd",
                  },
                  {
                    number: 10,
                    text: "Near Sherborne, 10) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 2,
        audioUrl: audios.lis18Part2,
        parts: [
          {
            part: 1,
            title: "",
            questions_range: "Questions 11–16",
            description:
              "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer",
            type: "table_completion",
            object: 1,
            columns: [
              "Vacation Job",
              "Main advantage",
              "Main disadvantage",
              "Recommendation",
            ],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 1,
                      text: "Stocktaking",
                    },
                  ],
                  [
                    {
                      number: 11,
                      text: "11) * @ *",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "Tiring",
                    },
                  ],
                  [
                    {
                      number: 12,
                      text: "12) * @ *",
                    },
                  ],
                  ,
                ],
              },
              {
                number: 2,
                values: [
                  [
                    {
                      number: 4,
                      text: "Office work",
                    },
                  ],
                  [
                    {
                      number: 5,
                      text: "Air-conditioning",
                    },
                  ],
                  [
                    {
                      number: 13,
                      text: "`13) * @ *",
                    },
                  ],
                  [
                    {
                      number: 14,
                      text: "Choose a 14) * @ *",
                    },
                  ],
                ],
              },
              {
                number: 3,
                values: [
                  [
                    {
                      number: 6,
                      text: "theme park attendant",
                    },
                  ],
                  [
                    {
                      number: 15,
                      text: "15) * @ * ",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "Rude customers",
                    },
                  ],
                  [
                    {
                      number: 16,
                      text: "16) * @ *",
                    },
                  ],
                  ,
                ],
              },
            ],
          },
          {
            part: 2,
            title: "Questions 17–20",
            question: "Choose the correct letter.",
            description: "",
            type: "multiple-choice",
            questions: [
              {
                number: 17,
                question: "Peter learned about the job",
                options: [
                  "from a college friend",
                  "on the computer",
                  "from a student job centre",
                ],
                answer: "",
              },
              {
                number: 18,
                question: "Peter mainly enjoyed the job because it was",
                options: ["easy", "challenging", "unusual"],
                answer: "",
              },
              {
                number: 19,
                question: "The job's most interesting aspect was",
                options: [
                  "learning about the environment",
                  "working with children",
                  "caring for the animals",
                ],
                answer: "",
              },
              {
                number: 20,
                question: "Peter has decided that next vacation he",
                options: [
                  "won't take a job",
                  "will work at the zoo",
                  "will work elsewhere",
                ],
                answer: "",
              },
            ],
          },
        ],
      },
      {
        section: 3,
        audioUrl: audios.lis18Part3,
        parts: [
          {
            part: 1,
            title: "",
            questions_range: "Questions 21 and 22",
            description:
              "Complete the notes below. Write NO MORE THAN THREE WORDS for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Reasons for having Study Syndicates:",
                question_text: [
                  {
                    number: 21,
                    text: "• teaching one another is a good way to learn",
                  },
                  {
                    number: 21,
                    text: "• it gives the opportunity to 21) * @ *",
                  },
                  {
                    number: 21,
                    text: "•	shared reading means fuller notes",
                  },
                  {
                    number: 22,
                    text: "• You can do 22) * @ *",
                  },
                ],
              },
            ],
          },
          {
            part: 1,
            title: "PLAN FOR STUDY SYNDICATE",
            questions_range: "Questions 23–25",
            description:
              "Complete the table below.Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
            type: "table_completion",
            object: 1,
            columns: ["Date", "Geology Topic", "Name of Presenter"],
            rows: [
              {
                number: 1,
                values: [
                  [
                    {
                      number: 1,
                      text: "9thMay",
                    },
                  ],
                  [
                    {
                      number: 23,
                      text: "23) * @ *",
                    },
                  ],
                  [
                    {
                      number: 2,
                      text: "Bob",
                    },
                  ],
                ],
              },
              {
                number: 2,
                values: [
                  [
                    {
                      number: 24,
                      text: "24) * @ *",
                    },
                  ],
                  [
                    {
                      number: 5,
                      text: "glaciated areas",
                    },
                  ],
                  [
                    {
                      number: 13,
                      text: "`Andy",
                    },
                  ],
                ],
              },
              {
                number: 3,
                values: [
                  [
                    {
                      number: 6,
                      text: "23rd May",
                    },
                  ],
                  [
                    {
                      number: 15,
                      text: "rock formation",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "Helen and John",
                    },
                  ],
                ],
              },
              {
                number: 4,
                values: [
                  [
                    {
                      number: 25,
                      text: "25) * @ *",
                    },
                  ],
                  [
                    {
                      number: 15,
                      text: "Volcanoes",
                    },
                  ],
                  [
                    {
                      number: 7,
                      text: "John",
                    },
                  ],
                ],
              },
            ],
          },
          {
            part: 7,
            title: "",
            questions_range: "Questions 26-30",
            description:
              "Complete the notes below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Presentations should last for:",
                question_text: [
                  {
                    number: 26,
                    text: "26) * @ *",
                  },
                  {
                    number: 27,
                    text: "(plus time for 27) * @ * and * @ *)",
                  },
                ],
              },
              {
                prompt: "Sources of information:",
                question_text: [
                  {
                    number: 28,
                    text: "-	bibliography",
                  },
                  {
                    number: 28,
                    text: "-	library books",
                  },
                  {
                    number: 28,
                    text: "28) * @ *",
                  },
                  {
                    number: 29,
                    text: "29) * @ *",
                  },
                ],
              },
              {
                prompt: "For the presentations, use:",
                question_text: [
                  {
                    number: 30,
                    text: "-	overhead projector - whiteboard",
                  },
                  {
                    number: 30,
                    text: "30) * @ *",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        section: 4,
        audioUrl: audios.lis18Part4,
        parts: [
          {
            part: 1,
            title: "Health on the Night Shift",
            questions_range: "Questions 31-40",
            description:
              "Complete the notes below.Write NO MORE THAN THREE WORDS for each answer.",
            flex: 1,
            type: "note_completion",
            questions: [
              {
                prompt: "Background:",
                question_text: [
                  {
                    number: 31,
                    text: "31) * @ * in number of night workers because of 24-hour shopping/services.\n Need to examine effects of changing work and sleep habitsUS and British research found these lead to health problems ",
                  },
                ],
              },
              {
                prompt: "Main Causes:",
                question_text: [
                  {
                    number: 32,
                    text: "A) 32) * @ * - regulates daily life",
                  },
                  {
                    number: 33,
                    text: "- connected to behavioural patterns and cycles 33) * @ * and * @ * ",
                  },
                  {
                    number: 33,
                    text: "•	programmes us to be awake and asleep at certain times",
                  },
                  {
                    number: 34,
                    text: "B) Sleep Debt \n•	impossible to get enough sleep during daytir",
                  },
                  {
                    number: 34,
                    text: "C) 34) * @ * - different working / sleeping times, 'dislocation'",
                  },
                ],
              },
              {
                prompt: "Effects: A) Physical",
                question_text: [
                  {
                    number: 35,
                    text: "35) * @ * problems and more minor illnesses, suggesting immunity is affected",
                  },
                  {
                    number: 35,
                    text: "•	more minor illnesses, suggesting that immunity of shift workers is affected",
                  },
                ],
              },
              {
                prompt: "Effects: B) Psychological",
                question_text: [
                  {
                    number: 36,
                    text: "36) * @ * is the most common",
                  },
                  {
                    number: 37,
                    text: "37) * @ * affected, e.g. decision-making,planning,which regulate our ",
                  },
                  {
                    number: 38,
                    text: "38) * @ *",
                  },
                ],
              },
              {
                prompt: "Effects: C) Social",
                question_text: [
                  {
                    number: 39,
                    text: "Night shift work can lead to: •	destruction of 39) * @ * and other relationships,",
                  },
                  {
                    number: 40,
                    text: "e.g 40) * @ *",
                  },
                  {
                    number: 40,
                    text: "•	eventually, for individuals: social isolation",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    answers: {
      1: "C",
      2: "A",
      3: "B",
      4: "A",
      5: "B",
      6: "C",
      7: "C",
      8: "A",
      9: "Cotehele",
      10: "SH121LQ",
      11: "Share ideas",
      12: "Much deeper research",
      13: "Mountain building",
      14: "17th May",
      15: "29th May",
      16: "30-40 minutes",
      17: "Question(s) discussion",
      18: "Journal",
      19: "Internet",
      20: "Photo copy",
      21: "traveling",
      22: "get good shoes",
      23: "Wearing formal clothes",
      24: "Large office",
      25: "good pay",
      26: "live nearly",
      27: "B",
      28: "C",
      29: "B",
      30: "A",
      31: "Health increase",
      32: "Internal clock",
      33: "Light dark",
      34: "Unsocial hours",
      35: "Heart stomach",
      36: "Depression",
      37: "Mental ability",
      38: "Performance",
      39: "Family life",
      40: "friends",
    },
  },
];
