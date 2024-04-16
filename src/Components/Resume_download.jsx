import React from 'react';
import pdfFile from '../asset/Updated_Resume.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="Updated_Resume.pdf" style={{textDecoration:'none'}}>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;