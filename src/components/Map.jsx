import React from "react";

const Map = ({ data, handleChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold my-3">{data?.questions_range}</h2>
      <p className="mb-3">{data.description}</p>

      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-center border border-gray-300">
              <i>{data.title}</i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-gray-300">
              {/* <p>{data?.description}</p> */}
              <img
                key={data?.image}
                src={data?.image}
                alt="map"
                className="h-[500px] mx-auto"
              />
              <ul>
                {data.questions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
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

export default Map;
