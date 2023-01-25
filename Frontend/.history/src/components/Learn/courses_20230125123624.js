import React, { useState } from 'react';
import my_courses from '../../data/courses_data';
import NavbarHome from "../NavbarHome/NavbarHome";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";
import AllPagesPDFViewer from "./components/pdf/all-pages";

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export default function Courses(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <AllPages />
            <Footer />
        </div>
    )
}