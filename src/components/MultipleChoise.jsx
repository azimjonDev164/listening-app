const MultipleChoise = ({ data, handleChange }) => {
  return (
    <>
      <span key={data.title} className="block space-y-6">
        <h2 className="text-xl font-semibold">{data?.title}</h2>
        <p>{data?.description}</p>

        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300">
                Questions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.questions.map((item, idx) => (
              <tr key={item.number}>
                <td className="p-4 border border-gray-300">
                  <p className="font-medium">
                    <strong>{item?.number})</strong> {item?.question}
                  </p>
                  <ol type="A" className="list-[upper-alpha] ml-6">
                    {item?.options.length ? (
                      item?.options.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))
                    ) : (
                      <li></li>
                    )}
                  </ol>
                  <input
                    className="border rounded px-2 py-1 mt-2 w-24"
                    type="text"
                    //   value={answers[36]}
                    onChange={(e) => handleChange(e, item?.number)}
                    placeholder="A/B/C"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    </>
  );
};

export default MultipleChoise;
