import React from 'react';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const Footer = () => {
  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  const handleDownloadPDF = () => {
    const docDefinition = {
      content: [
        'This is the downloaded PDF content.',
        'You can customize this with page content.'
      ]
    };
    pdfMake.createPdf(docDefinition).download('page.pdf');
  };

  return (
    <footer className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleDownloadPDF}>Download PDF</button>
        <button onClick={handleForward}>Forward</button>
      </div>
    </footer>
  );
};

export default Footer;
