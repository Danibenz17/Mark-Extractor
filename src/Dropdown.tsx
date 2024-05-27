import _ from "lodash";
import React, { useState } from "react";

interface DropdownProps {
  onOptionSelect: (option: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { onOptionSelect } = props;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const options = [
    { id: "", label: "--Please choose an option--" },
    { id: "totalMarks", label: "Total Marks" },
    { id: "cutOff", label: "Cut Off" },
    { id: "languageAverage", label: "Language Average" },
  ];
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div className="dropdown">
      <label>Select an option:</label>
      <select id="options" value={selectedOption} onChange={handleSelectChange}>
        {_.map(options, (opt) => (
          <option value={opt.id}>{opt.label}</option>
        ))}
      </select>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
