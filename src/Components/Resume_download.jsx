import React from 'react';
import pdfFile from '../asset/My_resume.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="My_resume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;