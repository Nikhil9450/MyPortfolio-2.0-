import React from 'react';
import pdfFile from '../asset/Resume-GoogleDocs.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="My_resume.pdf" style={{textDecoration:'none'}}>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;