const Matching = ({ data, handleChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold my-3">{data?.title}</h2>
      <p className="mb-3">{data.question}</p>

      <table className="w-full text-sm border border-gray-300 mb-3">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-gray-300">
              <ol type="A" className="list-[upper-alpha] ml-6">
                {data.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">
              <i>{data.description}</i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-gray-300">
              {/* <p>{data?.description}</p> */}
              {data?.image ? (
                <img
                  key={data?.image}
                  src={data?.image}
                  alt="map"
                  className="h-[300px] md:h-[500px] mx-auto"
                />
              ) : (
                ""
              )}
              <ul>
                {data.questions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 border-b-2 border-gray-500 mb-1"
                  >
                    <strong>{item.number})</strong>
                    <p>{item.option}</p>
                    <input
                      className="border rounded px-2 py-1 mt-2 w-24"
                      type="text"
                      //   value={answers[36]}
                      onChange={(e) => handleChange(e, item.number)}
                      placeholder="A/B/C"
                    />
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Matching;
