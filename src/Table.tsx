import _ from "lodash";
import React from "react";

interface TableProps {
  data: any[];
  showAll: boolean;
  selectedOption: string;
}

const Table = (props: TableProps) => {
  const { data, showAll, selectedOption } = props;
  if (data.length === 0) return null;

  const renderHeaders = () => {
    const baseHeaders = ["Id", "Name"];
    let additionalHeaders: string[] = [];

    if (selectedOption === "totalMarks" && showAll) {
      additionalHeaders = ["tamil", "english", "maths", "science", "social"];
    } else if (selectedOption === "cutOff" && showAll) {
      additionalHeaders = ["maths", "science", "social"];
    } else if (selectedOption === "languageAverage" && showAll) {
      additionalHeaders = ["tamil", "english"];
    }

    if (showAll) {
      additionalHeaders.push("Answer");
    }

    const headers = showAll
      ? [...baseHeaders, ...additionalHeaders]
      : [...baseHeaders];
    return _.map(headers,(header) => <th key={header}>{header}</th>);
  };

  const renderRows = () => {
    return _.map(data,(item, index) => {
      const { id, first_name, last_name, gender, answer, ...fields } = item;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{`${first_name} ${last_name}`}</td>
          {showAll &&
            (selectedOption === "totalMarks" ? (
              <>
                <td>{fields.tamil}</td>
                <td>{fields.english}</td>
                <td>{fields.maths}</td>
                <td>{fields.science}</td>
                <td>{fields.social}</td>
              </>
            ) : selectedOption === "cutOff" ? (
              <>
                <td>{fields.maths}</td>
                <td>{fields.science}</td>
                <td>{fields.social}</td>
              </>
            ) : selectedOption === "languageAverage" ? (
              <>
                <td>{fields.tamil}</td>
                <td>{fields.english}</td>
              </>
            ) : null)}
          <td>{answer}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <thead>
        <tr>{renderHeaders()}</tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Table;
