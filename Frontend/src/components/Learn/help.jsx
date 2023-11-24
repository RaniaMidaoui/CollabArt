import React, { useState } from "react";
import Input from "../Authentication/input";
import Navbar from "../Navbar/Navbar";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

function WithContactForm() {
//   return (
//     <div className="Auth-form-container" style={{ backgroundImage: `url("/back_help.jpg")`}}>
//         <MDBContainer className="Auth-form" >
//         <section>
//             <MDBRow>
//             <MDBCol className="text-center" md='16'>
//                 <p>
//                 <span className="fw-bold">
//                     You need help and you don't know who to ask ? <br></br> Send us your question and the right expert will answer.
//                 </span>
//                 </p>

//                 <form>
//                 <br></br>
//                 <Input label="Email address" required className="Auth-form-content" />
//                 <br></br>
//                 <Input rows={20} label="Message" className="Auth-form-content" />
//                 <br></br>
//                 </form>
//             </MDBCol>
//             </MDBRow>
//         </section>
//         </MDBContainer>
//     </div>
//   );

// make a similar form in tailwind
return (
    <div className="Auth-form-container" style={{ backgroundImage: `url("/back_help.jpg")`}}>
        <div className="Auth-form">
        <section>
            <div className="text-center">
                <p>
                <span className="fw-bold">
                    You need help and you don't know who to ask ? <br></br> Send us your question and the right expert will answer.
                </span>
                </p> 
                <br/>      
                    <form className="mx-5">
                    <div className="mb-5">

                        <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your question"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <button
                        className="hover:shadow-form rounded-md bg-[#91827d] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                        Submit
                        </button>
                    </div>
                    </form>

            </div>
        </section>
        </div>
    </div>


    );



}

export default function Help(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <WithContactForm />
            <Footer />
        </div>
    )
}