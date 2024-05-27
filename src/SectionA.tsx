import React, { useState } from "react";
import Dropdown from "./Dropdown";
import _ from "lodash";
import FileUpload from "./Fileupload";

interface SectionAProps {
  onDataProcessed: (data: any[]) => void;
  onOptionSelect: (option: string) => void;
}

const SectionA = (props: SectionAProps) => {
  const { onDataProcessed, onOptionSelect } = props;
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleFileUpload = (data: any[]) => {
    const processedData = _.map(data,(item) => ({
      ...item,
      name: `${item.first_name} ${item.last_name}`,
    }));
    setUploadedData(processedData);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
    if (uploadedData.length > 0) {
      processData(uploadedData, option);
    }
  };

  const processData = (data: any[], option: string) => {
    const processedData = data.map((item) => {
      let answer;
      if (option === "totalMarks") {
        answer = _.sum([
          item.tamil,
          item.english,
          item.maths,
          item.science,
          item.social,
        ]);
      } else if (option === "cutOff") {
        answer = item.maths / 2 + (item.science + item.social) / 4;
      } else if (option === "languageAverage") {
        answer = (item.tamil + item.english) / 2;
      }
      return { ...item, answer };
    });

    onDataProcessed(processedData);
  };

  return (
    <div className="section section-a">
      <h2>Section A</h2>
      <FileUpload onFileUpload={handleFileUpload} />
      <Dropdown onOptionSelect={handleOptionSelect} />
    </div>
  );
};

export default SectionA;
