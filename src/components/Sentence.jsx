const Sentence = ({ data, handleChange }) => {
  const wordHandler = (text, baseNumber) => {
    const words = text.split("*");
    return words.map((part, index) =>
      part.trim() == "@" ? (
        <>
          <input
            key={index}
            className="border rounded px-2 py-1 mx-1 w-20"
            type="text"
            onChange={(e) => handleChange(e, baseNumber)}
            placeholder="........."
          />
        </>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <>
      <span key={data.title} className="block space-y-6 mt-2">
        <h2 className="text-xl font-semibold">{data?.questions_range}</h2>
        <p className="text-gray-600">{data?.description}</p>

        <table className="w-full text-sm border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-center text-base font-medium text-gray-700 border-b border-gray-300">
                {data?.title}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.questions.map((item, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b border-gray-200`}
              >
                <td className="p-4 flex gap-1">
                  <strong>{item?.number}.</strong>
                  {wordHandler(item.question_text, item.number)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    </>
  );
};

export default Sentence;
