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
          options: [
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
          options: [
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
          options: [
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
              option: "Performing with musicians who play the same instrument",
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
                  text: "good indicators of the quality of the 400 * @ *",
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
  40: "environment"
}
};
