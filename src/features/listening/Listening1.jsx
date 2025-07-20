import React, { useState } from "react";

const Listening1 = () => {
  const initial = {};
  const initialAnswersObj = {};
  for (let i = 1; i <= 40; i++) {
    initial[i] = "";
    initialAnswersObj[i] = false;
  }

  const [answers, setAnswers] = useState(initial);
  const [answersObj, setAnswersObj] = useState(initialAnswersObj);
  const [finished, setFinished] = useState(false);
  const ANSWERS = {
    1: "9.30 am",
    2: "Helendale",
    3: "Central Street/St ",
    4: "792",
    5: "8.55 am",
    6: "1.80",
    7: "7.30",
    8: "7.15",
    9: "commuter",
    10: "afternoon",
    11: "C",
    12: "C",
    13: "A",
    14: "B",
    15: "first year",
    16: "balance",
    17: "international/foreign",
    18: "relaxation",
    19: "motivation",
    20: "research/advanced",
    21: "The Secret Garden",
    22: "twentieth century",
    23: "walk",
    24: "motivations/motivation",
    25: "abstract ideas",
    26: "roses",
    27: "dark(ness) to light(ness)",
    28: "health",
    29: "environment",
    30: "human companionship",
    31: "negative",
    32: "pleasure",
    33: "poverty",
    34: "active",
    35: "success",
    36: "B",
    37: "A",
    38: "C",
    39: "A",
    40: "B",
  };

  const handleChange = (e, num) => {
    setAnswers((prev) => ({ ...prev, [num]: e.target.value }));
    setFinished(false);
  };

  const summitHandler = () => {
    const result = {};
    for (let i = 1; i <= 40; i++) {
      result[i] =
        answers[i].trim().toLowerCase() === ANSWERS[i]?.trim().toLowerCase();
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
  return (
    <>
      {finished ? (
        <>
          <ol>
            {Object.keys(answersObj).map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span>
                  <strong>Q{key}:</strong> {answers[key]}
                </span>
                {answersObj[key] ? (
                  <span className="text-green-600">&#10004;</span>
                ) : (
                  <span className="text-red-600">&#10008;</span>
                )}
              </li>
            ))}
          </ol>
          <button onClick={reset} className="btn btn-primary ">
            reset
          </button>
        </>
      ) : (
        <>
          <section id="part1" className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-1">Part 1</h2>
            <figure className="mb-6">
              <div className="aspect-video max-w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  id="kaltura_player"
                  src="https://cdnapisec.kaltura.com/p/5394802/embedPlaykitJs/uiconf_id/53315462?iframeembed=true&amp;entry_id=1_p3x3lbo7&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_bgzmga33%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
                  title="test"
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </figure>

            <div className="space-y-8 text-gray-800">
              <div>
                <h2 className="text-xl font-semibold mb-2">Questions 1–5</h2>
                <p className="mb-4">
                  Complete the notes below. Write no more than two words and/or
                  a number for each answer.
                </p>
                <div className="space-y-2">
                  <p>
                    Express train leaves at <strong>(1)</strong>{" "}
                    <input
                      className="border rounded px-2 py-1 ml-2"
                      type="text"
                      value={answers[1]}
                      onChange={(e) => handleChange(e, 1)}
                      placeholder="…………………"
                    />
                  </p>
                  <p>
                    Nearest station is <strong>(2)</strong>{" "}
                    <input
                      className="border rounded px-2 py-1 ml-2"
                      type="text"
                      value={answers[2]}
                      onChange={(e) => handleChange(e, 2)}
                      placeholder="…………………"
                    />
                  </p>
                  <p>
                    Number 706 bus goes to <strong>(3)</strong>{" "}
                    <input
                      className="border rounded px-2 py-1 ml-2"
                      type="text"
                      value={answers[3]}
                      onChange={(e) => handleChange(e, 3)}
                      placeholder="…………………"
                    />
                  </p>
                  <p>
                    Number <strong>(4)</strong>{" "}
                    <input
                      className="border rounded px-2 py-1 ml-2"
                      type="text"
                      value={answers[4]}
                      onChange={(e) => handleChange(e, 4)}
                      placeholder="…………………"
                    />{" "}
                    bus goes to station
                  </p>
                  <p>
                    Earlier bus leaves at <strong>(5)</strong>{" "}
                    <input
                      className="border rounded px-2 py-1 ml-2"
                      type="text"
                      value={answers[5]}
                      onChange={(e) => handleChange(e, 5)}
                      placeholder="…………………"
                    />
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Questions 6–10</h2>
                <p className="mb-4">
                  Complete the table below. Write no more than one word and/or a
                  number for each answer.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-left text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Transport</th>
                        <th className="px-4 py-2 border">Cash fare</th>
                        <th className="px-4 py-2 border">Card fare</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Bus</td>
                        <td className="px-4 py-2 border">
                          <strong>(6)</strong> ${" "}
                          <input
                            className="border rounded px-1 py-0.5"
                            type="text"
                            value={answers[6]}
                            onChange={(e) => handleChange(e, 6)}
                            placeholder="…"
                          />
                        </td>
                        <td className="px-4 py-2 border">$1.50</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Train (peak)</td>
                        <td className="px-4 py-2 border">$10</td>
                        <td className="px-4 py-2 border">$10</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Train (off-peak – before 5pm or after{" "}
                          <strong>(7)</strong>{" "}
                          <input
                            className="border rounded px-1 py-0.5 w-16"
                            type="text"
                            value={answers[7]}
                            onChange={(e) => handleChange(e, 7)}
                            placeholder="…"
                          />{" "}
                          pm)
                        </td>
                        <td className="px-4 py-2 border">$10</td>
                        <td className="px-4 py-2 border">
                          <strong>(8)</strong> ${" "}
                          <input
                            className="border rounded px-1 py-0.5 w-16"
                            type="text"
                            value={answers[8]}
                            onChange={(e) => handleChange(e, 8)}
                            placeholder="…"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          <strong>(9)</strong>{" "}
                          <input
                            className="border rounded px-1 py-0.5 w-24"
                            type="text"
                            value={answers[9]}
                            onChange={(e) => handleChange(e, 9)}
                            placeholder="…"
                          />{" "}
                          ferry
                        </td>
                        <td className="px-4 py-2 border">$4.50</td>
                        <td className="px-4 py-2 border">$3.55</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Tourist ferry (<strong>(10)</strong>{" "}
                          <input
                            className="border rounded px-1 py-0.5 w-24"
                            type="text"
                            value={answers[10]}
                            onChange={(e) => handleChange(e, 10)}
                            placeholder="…"
                          />
                          )
                        </td>
                        <td className="px-4 py-2 border">$35</td>
                        <td className="px-4 py-2 border">–</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">
                          Tourist ferry (whole day)
                        </td>
                        <td className="px-4 py-2 border">$65</td>
                        <td className="px-4 py-2 border">–</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section
            id="part2"
            className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Part 2</h2>

            {/* Video */}
            <figure className="mb-6">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  id="kaltura_player"
                  src="https://cdnapisec.kaltura.com/p/5394802/embedPlaykitJs/uiconf_id/53315462?iframeembed=true&entry_id=1_ryyfqvh2&config%5Bprovider%5D=%7B%22widgetId%22%3A%221_bgzmga33%22%7D&config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
                  title="test"
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </figure>

            {/* Questions 11–14 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Questions 11–14</h3>
              <p className="mb-3">
                Which counsellor should you see? Write the correct letter, A, B
                or C, next to questions 11–14.
              </p>
              <table className="w-full border mb-4 text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-bold">A</td>
                    <td className="p-2">Louise Bagshaw</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">B</td>
                    <td className="p-2">Tony Denby</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">C</td>
                    <td className="p-2">Naomi Flynn</td>
                  </tr>
                </tbody>
              </table>

              {/* Inputs 11–14 */}
              <div className="space-y-3">
                <div>
                  <label>
                    11) If it is your first time seeing a counsellor
                    <input
                      className="border ml-2 px-2 py-1 rounded w-24"
                      type="text"
                      value={answers[11]}
                      onChange={(e) => handleChange(e, 11)}
                      placeholder="A/B/C"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    12) If you are unable to see a counsellor during normal
                    office hours
                    <input
                      className="border ml-2 px-2 py-1 rounded w-24"
                      type="text"
                      value={answers[12]}
                      onChange={(e) => handleChange(e, 12)}
                      placeholder="A/B/C"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    13) If you do not have an appointment
                    <input
                      className="border ml-2 px-2 py-1 rounded w-24"
                      type="text"
                      value={answers[13]}
                      onChange={(e) => handleChange(e, 13)}
                      placeholder="A/B/C"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    14) If your concerns are related to anxiety
                    <input
                      className="border ml-2 px-2 py-1 rounded w-24"
                      type="text"
                      value={answers[14]}
                      onChange={(e) => handleChange(e, 14)}
                      placeholder="A/B/C"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Questions 15–20 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Questions 15–20</h3>
              <p className="mb-3">
                Complete the table below. Write no more than two words for each
                answer.
              </p>

              <div className="overflow-auto">
                <table className="w-full text-sm border border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border">Workshop</th>
                      <th className="p-2 border">Contact</th>
                      <th className="p-2 border">Target Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 border">Adjusting</td>
                      <td className="p-2 border">
                        What you need to succeed academically
                      </td>
                      <td className="p-2 border">
                        (15)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[15]}
                          onChange={(e) => handleChange(e, 15)}
                        />{" "}
                        students
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 border">Getting Organised</td>
                      <td className="p-2 border">
                        Use time effectively, find (16)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[16]}
                          onChange={(e) => handleChange(e, 16)}
                        />{" "}
                        between study and leisure
                      </td>
                      <td className="p-2 border">All students</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 border">Communicating</td>
                      <td className="p-2 border">
                        Talking with staff, communicating across cultures
                      </td>
                      <td className="p-2 border">
                        All students, especially (17)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[17]}
                          onChange={(e) => handleChange(e, 17)}
                        />
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 border">Anxiety</td>
                      <td className="p-2 border">
                        (18)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[18]}
                          onChange={(e) => handleChange(e, 18)}
                        />
                        , breathing techniques, meditation, etc.
                      </td>
                      <td className="p-2 border">
                        Students about to sit exams
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 border">
                        (19)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[19]}
                          onChange={(e) => handleChange(e, 19)}
                        />
                      </td>
                      <td className="p-2 border">
                        Staying on track for long periods
                      </td>
                      <td className="p-2 border">
                        (20)
                        <input
                          className="border ml-2 px-1 py-1 rounded w-32"
                          type="text"
                          value={answers[20]}
                          onChange={(e) => handleChange(e, 20)}
                        />{" "}
                        students only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="part3" className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 mt-6">Part 3</h2>

            <figure className="mb-6">
              <div className="aspect-video max-w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  id="kaltura_player"
                  src="https://cdnapisec.kaltura.com/p/5394802/embedPlaykitJs/uiconf_id/53315462?iframeembed=true&entry_id=1_2kllk75t&config%5Bprovider%5D=%7B%22widgetId%22%3A%221_bgzmga33%22%7D&config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
                  title="IELTS Listening Part 3"
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </figure>

            <div className="prose max-w-full">
              <h3>Questions 21–30</h3>
              <p>
                Complete the notes below. Write no more than three words for
                each answer.
              </p>

              <table className="w-full table-auto border border-gray-300 mb-6">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Novel: <strong>(21)</strong>
                      <input
                        className="ml-2 border rounded px-2 py-1"
                        type="text"
                        value={answers[21]}
                        onChange={(e) => handleChange(e, 21)}
                        placeholder="…………………"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Protagonists: Mary Lennox; Colin Craven
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Time period: Early in <strong>(22)</strong>
                      <input
                        className="ml-2 border rounded px-2 py-1"
                        type="text"
                        value={answers[22]}
                        onChange={(e) => handleChange(e, 22)}
                        placeholder="…………………"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Mary moves to UK – meets Colin who thinks he’ll never be
                      able to <strong>(23)</strong>
                      <input
                        className="ml-2 border rounded px-2 py-1"
                        type="text"
                        value={answers[23]}
                        onChange={(e) => handleChange(e, 23)}
                        placeholder="…………………"
                      />
                      . They become friends.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Point of view: “Omniscient” – narrator knows all about
                      characters’ feelings, opinions and <strong>(24)</strong>
                      <input
                        className="ml-2 border rounded px-2 py-1"
                        type="text"
                        value={answers[24]}
                        onChange={(e) => handleChange(e, 24)}
                        placeholder="…………………"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Audience: Good for children – story simple to follow
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      <p>
                        Symbols (physical items that represent{" "}
                        <strong>(25)</strong>):
                        <input
                          className="ml-2 border rounded px-2 py-1"
                          type="text"
                          value={answers[25]}
                          onChange={(e) => handleChange(e, 25)}
                          placeholder="…………………"
                        />
                      </p>
                      <ul className="list-disc ml-6 mt-1">
                        <li>the robin redbreast</li>
                        <li>
                          <strong>(26)</strong>{" "}
                          <input
                            className="ml-2 border rounded px-2 py-1"
                            type="text"
                            value={answers[26]}
                            onChange={(e) => handleChange(e, 26)}
                            placeholder="…………………"
                          />
                        </li>
                        <li>the portrait of Mistress Craven</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      <p>Motifs (patterns in the story):</p>
                      <ul className="list-disc ml-6 mt-1">
                        <li>the Garden of Eden</li>
                        <li>
                          secrecy – metaphorical and literal transition from{" "}
                          <strong>(27)</strong>{" "}
                          <input
                            className="ml-2 border rounded px-2 py-1"
                            type="text"
                            value={answers[27]}
                            onChange={(e) => handleChange(e, 27)}
                            placeholder="…………………"
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      <p>Themes: Connections between</p>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          <strong>(28)</strong>{" "}
                          <input
                            className="ml-2 border rounded px-2 py-1"
                            type="text"
                            value={answers[28]}
                            onChange={(e) => handleChange(e, 28)}
                            placeholder="…………………"
                          />
                          and outlook
                        </li>
                        <li>
                          <strong>(29)</strong>{" "}
                          <input
                            className="ml-2 border rounded px-2 py-1"
                            type="text"
                            value={answers[29]}
                            onChange={(e) => handleChange(e, 29)}
                            placeholder="…………………"
                          />{" "}
                          and well-being
                        </li>
                        <li>
                          individuals and the need for <strong>(30)</strong>{" "}
                          <input
                            className="ml-2 border rounded px-2 py-1"
                            type="text"
                            value={answers[30]}
                            onChange={(e) => handleChange(e, 30)}
                            placeholder="…………………"
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="part4" className="p-6 max-w-4xl mx-auto text-gray-800">
            <h2 className="text-2xl font-bold mb-4 mt-6 text-center">Part 4</h2>

            <figure className="mb-8">
              <div className="aspect-video max-w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  id="kaltura_player"
                  src="https://cdnapisec.kaltura.com/p/5394802/embedPlaykitJs/uiconf_id/53315462?iframeembed=true&entry_id=1_x4rkc0b7&config%5Bprovider%5D=%7B%22widgetId%22%3A%221_bgzmga33%22%7D&config%5Bplayback%5D=%7B%22startTime%22%3A0%7D"
                  title="test"
                  allow="autoplay *; fullscreen *; encrypted-media *"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </figure>

            <span className="block space-y-6">
              <h2 className="text-xl font-semibold">Questions 31–35</h2>
              <p>
                Complete the table below.{" "}
                <span className="font-semibold">
                  Write one word only for each answer.
                </span>
              </p>

              <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      colSpan="3"
                      className="text-center font-bold py-2 border border-gray-300"
                    >
                      Time Perspectives
                    </th>
                  </tr>
                  <tr>
                    <th className="px-2 py-1 border border-gray-300">
                      Time Zone
                    </th>
                    <th className="px-2 py-1 border border-gray-300">
                      Outlook
                    </th>
                    <th className="px-2 py-1 border border-gray-300">
                      Features &amp; Consequences
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-1 border">Past</td>
                    <td className="px-2 py-1 border">Positive</td>
                    <td className="px-2 py-1 border">
                      Remember good times, e.g. birthdays. Keep family records,
                      photo albums, etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border">&nbsp;</td>
                    <td className="px-2 py-1 border">
                      <strong>(31)</strong>
                      <input
                        className="border rounded px-2 py-1 ml-2 w-36"
                        type="text"
                        value={answers[31]}
                        onChange={(e) => handleChange(e, 31)}
                        placeholder="…………………"
                      />
                      .
                    </td>
                    <td className="px-2 py-1 border">
                      Focus on disappointments, failures, bad decisions.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border">Present</td>
                    <td className="px-2 py-1 border">Hedonistic</td>
                    <td className="px-2 py-1 border">
                      Live for <strong>(32)</strong>
                      <input
                        className="border rounded px-2 py-1 ml-2 w-36"
                        type="text"
                        value={answers[32]}
                        onChange={(e) => handleChange(e, 32)}
                        placeholder="…………………"
                      />
                      . ; seek sensation; avoid pain.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border">&nbsp;</td>
                    <td className="px-2 py-1 border">Fatalistic</td>
                    <td className="px-2 py-1 border">
                      Life is governed by <strong>(33)</strong>
                      <input
                        className="border rounded px-2 py-1 ml-2 w-36"
                        type="text"
                        value={answers[33]}
                        onChange={(e) => handleChange(e, 33)}
                        placeholder="…………………"
                      />
                      . , religious beliefs, social conditions. Life’s path
                      can’t be changed.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border">Future</td>
                    <td className="px-2 py-1 border">
                      <strong>(34)</strong>
                      <input
                        className="border rounded px-2 py-1 ml-2 w-36"
                        type="text"
                        value={answers[34]}
                        onChange={(e) => handleChange(e, 34)}
                        placeholder="…………………"
                      />
                      .
                    </td>
                    <td className="px-2 py-1 border">
                      Prefer work to play. Don’t give in to temptation.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border">&nbsp;</td>
                    <td className="px-2 py-1 border">Fatalistic</td>
                    <td className="px-2 py-1 border">
                      Have a strong belief in life after death and importance of{" "}
                      <strong>(35)</strong>
                      <input
                        className="border rounded px-2 py-1 ml-2 w-36"
                        type="text"
                        value={answers[35]}
                        onChange={(e) => handleChange(e, 35)}
                        placeholder="…………………"
                      />
                      . in life.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                Questions 36–40
              </h2>
              <p className="mb-4">Choose the correct letter, A, B or C.</p>

              <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left border border-gray-300">
                      Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-300">
                      <p className="font-medium">
                        <strong>36)</strong> We are all present hedonists
                      </p>
                      <p className="pl-4">A) at school</p>
                      <p className="pl-4">B) at birth</p>
                      <p className="pl-4">C) while eating and drinking</p>
                      <input
                        className="border rounded px-2 py-1 mt-2 w-24"
                        type="text"
                        value={answers[36]}
                        onChange={(e) => handleChange(e, 36)}
                        placeholder="A/B/C"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">
                      <p className="font-medium">
                        <strong>37)</strong> American boys drop out of school at
                        a higher rate than girls because
                      </p>
                      <p className="pl-4">
                        A) they need to be in control of the way they learn
                      </p>
                      <p className="pl-4">
                        B) they play video games instead of doing school work
                      </p>
                      <p className="pl-4">
                        C) they are not as intelligent as girls
                      </p>
                      <input
                        className="border rounded px-2 py-1 mt-2 w-24"
                        type="text"
                        value={answers[37]}
                        onChange={(e) => handleChange(e, 37)}
                        placeholder="A/B/C"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">
                      <p className="font-medium">
                        <strong>38)</strong> Present-orientated children
                      </p>
                      <p className="pl-4">
                        A) do not realise present actions can have negative
                        future effects
                      </p>
                      <p className="pl-4">
                        B) are unable to learn lessons from past mistakes
                      </p>
                      <p className="pl-4">
                        C) know what could happen if they do something bad, but
                        do it anyway
                      </p>
                      <input
                        className="border rounded px-2 py-1 mt-2 w-24"
                        type="text"
                        value={answers[38]}
                        onChange={(e) => handleChange(e, 38)}
                        placeholder="A/B/C"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">
                      <p className="font-medium">
                        <strong>39)</strong> If Americans had an extra day per
                        week, they would spend it
                      </p>
                      <p className="pl-4">A) working harder</p>
                      <p className="pl-4">B) building relationships</p>
                      <p className="pl-4">C) sharing family meals</p>
                      <input
                        className="border rounded px-2 py-1 mt-2 w-24"
                        type="text"
                        value={answers[39]}
                        onChange={(e) => handleChange(e, 39)}
                        placeholder="A/B/C"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300">
                      <p className="font-medium">
                        <strong>40)</strong> Understanding how people think
                        about time can help us
                      </p>
                      <p className="pl-4">A) become more virtuous</p>
                      <p className="pl-4">B) work together better</p>
                      <p className="pl-4">
                        C) identify careless or ambitious people
                      </p>
                      <input
                        className="border rounded px-2 py-1 mt-2 w-24"
                        type="text"
                        value={answers[40]}
                        onChange={(e) => handleChange(e, 40)}
                        placeholder="A/B/C"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </section>

          <button onClick={summitHandler} className="btn btn-primary">
            Summit answers
          </button>
        </>
      )}
    </>
  );
};

export default Listening1;
