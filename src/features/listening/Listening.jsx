import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tests } from "../../data/db";
import MultipleChoise from "../../components/MultipleChoise";
import Matching from "../../components/Matching";
import Note from "../../components/Note";
import Sentence from "../../components/Sentence";
import Table from "../../components/Table";

const Listening = () => {
  const { id } = useParams();

  const initial = {};
  const initialAnswersObj = {};
  for (let i = 1; i <= 40; i++) {
    initial[i] = "";
    initialAnswersObj[i] = false;
  }

  const [answers, setAnswers] = useState(initial);
  const [answersObj, setAnswersObj] = useState(initialAnswersObj);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState({});
  const [ANSWERS, setANSWERS] = useState({});

  let num = id - 1;

  const handleChange = (e, num) => {
    setAnswers((prev) => ({ ...prev, [num]: e.target.value }));
    setFinished(false);
  };

  const summitHandler = () => {
    const currentAnswers = data.answers;
    const result = {};

    if (currentAnswers[1]) {
      for (let i = 1; i <= 40; i++) {
        const userAnswer = (answers[i] ?? "").trim().toLowerCase();
        const correctAnswerRaw = (currentAnswers[i] ?? "")
          .toString()
          .trim()
          .toLowerCase();

        // Check if multiple correct answers are given with '/'
        const possibleAnswers = correctAnswerRaw
          .split("/")
          .map((ans) => ans.trim());

        // Check if userAnswer matches any of the possible correct answers
        result[i] = possibleAnswers.includes(userAnswer);
      }
    }

    setAnswersObj(result);
    setFinished(true);
  };

  const reset = () => {
    setFinished(false);
    for (let i = 1; i <= 40; i++) {
      initial[i] = "";
    }

    setAnswers(initial);
  };

  useEffect(() => {
    setANSWERS(tests[num].answers);
    setData(tests[num]);
  }, [id]);
  return (
    <section>
      <div className="h-14 sticky top-[68px] z-50 bg-white border-b-2 border-red-500 flex items-center">
        <ul className="menu menu-horizontal px-1">
          {data.title ? (
            data.sections.map((item, idx) => (
              <li
                key={idx}
                className="text-[15px] font-bold hover:text-red-500 "
              >
                <a href={`#part${item.section}`}>{`Part ${item.section}`}</a>
              </li>
            ))
          ) : (
            <p>Not links</p>
          )}
        </ul>
        <p className="items-center">{data?.title}</p>
      </div>
      {finished ? (
        <>
          <ol className="space-y-3 mt-4 flex flex-row flex-wrap gap-1">
            {Object.keys(answersObj).map((key) => (
              <li
                key={key}
                className={`flex items-center w-[240px] justify-between p-4 border rounded-lg shadow-sm ${
                  answersObj[key]
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800">Q{key}:</span>
                  <span className="text-gray-700">{answers[key]}</span>
                </div>
                <div>
                  {answersObj[key] ? (
                    <span className="text-green-600 text-xl">&#10004;</span> // ✓
                  ) : (
                    <span className="text-red-600 text-xl">&#10008;</span> // ✘
                  )}
                </div>
              </li>
            ))}
          </ol>
          <div className="w-full flex justify-center">
            <button onClick={reset} className="btn btn-primary mt-2">
              reset
            </button>
          </div>
        </>
      ) : (
        <>
          {data.title ? (
            data.sections.map((section, idx) => (
              <section
                key={idx}
                id={`part${section?.section}`}
                className="p-6 max-w-4xl mx-auto text-gray-800 mt-1"
              >
                <h2 className="text-2xl font-bold mb-4 mt-6 text-center">
                  Part {section?.section}
                </h2>

                <audio className="w-full" controls>
                  <source src={section.audioUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>

                {section?.parts.map((item, idx) =>
                  item?.type === "multiple-choice" ? (
                    <MultipleChoise
                      key={idx}
                      data={item}
                      handleChange={handleChange}
                    />
                  ) : item?.type === "matching" ? (
                    <Matching
                      key={idx}
                      data={item}
                      handleChange={handleChange}
                    />
                  ) : item?.type === "note_completion" ? (
                    <Note key={idx} data={item} handleChange={handleChange} />
                  ) : item?.type === "sentence_completion" ? (
                    <Sentence
                      key={idx}
                      data={item}
                      handleChange={handleChange}
                    />
                  ) : item?.type === "table_completion" ? (
                    <Table key={idx} data={item} handleChange={handleChange} />
                  ) : (
                    ""
                  )
                )}
              </section>
            ))
          ) : (
            <p>Not data</p>
          )}
          <div className="w-full flex justify-center">
            <button onClick={summitHandler} className="btn btn-primary">
              Summit answers
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Listening;
