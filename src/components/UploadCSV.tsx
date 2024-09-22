// src/components/UploadCSV.tsx
import React, {useState} from 'react';
import {Button} from '@mui/material';
import {uploadCSV} from '../services/api';

const UploadCSV: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await uploadCSV(formData);
        alert('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange}/>
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default UploadCSV;
