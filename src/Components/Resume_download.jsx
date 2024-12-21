import React from 'react';
import pdfFile from '../asset/Nikhil_Kushwaha_React_js_developer_2.8 years.pdf'
const DownloadLink = () => {
  return (
    <div>
      <a href={pdfFile} download="Nikhil_Kushwaha_React_js_developer_2.8 years" style={{textDecoration:'none'}}>
        Download Resume
      </a>
    </div>
  );
};

export default DownloadLink;