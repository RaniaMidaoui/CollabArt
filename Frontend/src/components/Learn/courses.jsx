import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";
import { Document, Page } from "react-pdf";
import samplePDF from "/clay-pottery.pdf";

function AllPages(props) {
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

function ListCourse() {
    return (
      <div className="App">
  
        <h4>All Pages</h4>
        <div className="all-page-container">
          <AllPages pdf={samplePDF} />
        </div>
  
        <hr />
      </div>
    );
}


export default function Courses(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <ListCourse />
            <Footer />
        </div>
    )
}