import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Navbar from "../Navbar/Navbar";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PreviewPdf = () => {
  
  const [numberPages, useNumberPages] = useState(null);
  const OnDocumentLoadSuccess = ({ numPages }, useNumberPages) => {
    useNumberPages(numPages);
  };

    return (
      <>
        <Document
          file={"./clay-pottery.pdf"} // TRY TO DOWNLOAD THIS FILE AND HOST IT ON YOUR OWN SERVER!!
          onLoadSuccess={event => OnDocumentLoadSuccess(event, useNumberPages)}
        >
{Array.from(new Array(numberPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}        </Document>
        <div>
          <p>Pages: {numberPages}</p>
        </div>
      </>
    );
};


export default function Courses(){

const [percentage, setPercentage] = useState(0);

useEffect(() => {
  const scrollArea = document.getElementById("scrollArea");

  const handleScroll = () => {
    const scrollTop = scrollArea.scrollTop;
    const scrollHeight = scrollArea.scrollHeight - scrollArea.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    if (scrollPercentage >= percentage) {
      setPercentage(scrollPercentage);
    } 
  };

  // Attach the event listener when the component mounts
  scrollArea.addEventListener("scroll", handleScroll);

  // Detach the event listener when the component unmounts
  return () => {
    scrollArea.removeEventListener("scroll", handleScroll);
  };
}, [percentage]);

    const [hamActive, setHamActive] = useState(false);
  

    return(
        <div className="Courses">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <div className="flex gap-2 w-full">
              <div className="w-1/3 pl-40 py-10">
                  <h1 className="text-xl">Pottery Workshop</h1>
                  <p>Module 2</p>
                  <small>Sheet</small>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-600 h-2.5 rounded-full" style={{width: percentage+"%"}}></div>
                  </div>
                  <br/>
                  <button type="button" className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-900 transition-colors duration-200 bg-gray-200 hover:bg-gray-7   00 border-gray-700 rounded-lg gap-x-2 sm:w-auto">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                    <span>Next Module</span>
                </button>
              </div>
              <div id="scrollArea" className="all-page-container w-2/3 ml-40">
                <PreviewPdf />
              </div>
            </div>
            <Footer />
        </div>
    )
}