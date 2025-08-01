import React from "react";

const Table = ({ data, handleChange }) => {
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
    <span key={data.title} className="block space-y-6 mt-2">
      <h2 className="text-xl font-semibold">{data?.questions_range}</h2>
      <p className="text-gray-600">{data?.description}</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {data.columns.map((item, idx) => (
                <th
                  key={idx}
                  className="px-4 py-2 text-center text-base font-medium text-gray-700 border border-gray-300"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors`}
              >
                {data?.object !== 1
                  ? row.values.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-300 p-1 text-gray-800"
                      >
                        {wordHandler(cell, row.number)}
                      </td>
                    ))
                  : row.values.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-300 p-1 text-gray-800"
                      >
                        <ul>
                          {cell.map((item, idx) => (
                            <li key={idx}>
                              {wordHandler(item.text, item.number)}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </span>
  );
};

export default Table;
