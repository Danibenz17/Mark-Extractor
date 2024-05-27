import React, { useState } from "react";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import "./App.css"

const App = () => {
  const [processedData, setProcessedData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDataProcessed = (data: any[]) => {
    setProcessedData(data);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <SectionA onDataProcessed={handleDataProcessed} onOptionSelect={handleOptionSelect} />
      <SectionB data={processedData} selectedOption={selectedOption} />
    </div>
  );
};

export default App;
