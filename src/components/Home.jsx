import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const questionTypes = [
    { id: 1, title: "Form Completion" },
    { id: 2, title: "Note Completion" },
    { id: 3, title: "Table Completion" },
    { id: 4, title: "Multiple Choice" },
    { id: 5, title: "Map/Diagram Labeling" },
    { id: 6, title: "Matching" },
  ];
  const tips = [
    "Listen carefully for keywords and transitions.",
    "Don't spend too much time on one question.",
    "Watch out for distractors.",
    "Follow instructions exactly (e.g., write ONE word only).",
  ];
  const resources = [
    {
      title: "IELTS Official Practice Tests",
      url: "https://www.ielts.org/for-test-takers/sample-test-questions",
    },
    {
      title: "Cambridge IELTS Book Series",
      url: "https://www.cambridgeenglish.org/",
    },
    {
      title: "BBC Learning English - Listening",
      url: "https://www.bbc.co.uk/learningenglish/",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="container px-3">
        <h1 className="text-3xl font-bold text-center">
          Hi! <FontAwesomeIcon icon={faHand} className="text-yellow-400" /> I'm
          Azimjon <br />
          Welcome to app
        </h1>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Question Types</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {questionTypes.map((q) => (
            <li key={q.id}>
              <Link className="block border p-4 rounded-xl hover:bg-gray-100 shadow">
                {q.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Listening Tips</h2>
        <ul className="list-disc pl-6 space-y-1">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Useful Resources</h2>
        <ul className="list-disc pl-6 space-y-1">
          {resources.map((r, idx) => (
            <li key={idx}>
              <a
                href={r.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
