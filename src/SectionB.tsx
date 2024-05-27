import React, { useState } from "react";
import Table from "./Table";
import ToggleSwitch from "./ToggleSwitch";

interface SectionBProps {
  data: any[];
  selectedOption: string;
}

const SectionB = (props: SectionBProps) => {
  const { data, selectedOption } = props;
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleToggleChange = (checked: boolean) => {
    setShowAll(checked);
    console.log("Show All:", checked);
  };

  return (
    <div className="section section-b">
      <h2>Section B</h2>
      <ToggleSwitch checked={showAll} onChange={handleToggleChange} />
      {selectedOption && (
        <Table data={data} showAll={showAll} selectedOption={selectedOption} />
      )}
    </div>
  );
};

export default SectionB;
