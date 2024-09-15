import React from 'react';
import pdfFile from '../asset/Nikhil_Kushwaha_frontend_developer_2.5 years.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="Nikhil_Kushwaha_frontend_developer_2.5 years.pdf" style={{textDecoration:'none'}}>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;