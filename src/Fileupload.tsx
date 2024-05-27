import React, { useState } from "react";

interface FileUploadProps {
  onFileUpload: (data: any) => void;
}

const FileUpload = (props: FileUploadProps) => {
  const { onFileUpload } = props;
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/json") {
        setFileName(file.name);
        const text = await file.text();
        const data = JSON.parse(text);
        onFileUpload(data);
      } else {
        alert("Please upload a valid JSON file.");
        event.target.value = "";
      }
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept=".json" onChange={handleFileChange} />
      {fileName && <p>Uploaded File: {fileName}</p>}
    </div>
  );
};

export default FileUpload;
