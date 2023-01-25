import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import NavbarHome from "../NavbarHome/NavbarHome";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import Footer from "../Footer/Footer";

function WithContactForm() {
  return (
    <div className="Auth-form-container" style={{ backgroundImage: `url("background.jpg")`}}>
        <MDBContainer className="Auth-form" >
        <section>
            <MDBRow>
            <MDBCol className="text-center" md='16'>
                <p>
                <span class="fw-bold">
                    You need help and you don't know who to ask ? <br></br> Send us your question and the right expert will answer.
                </span>
                </p>

                <form>
                <br></br>
                <MDBInput label="Email address" required className="Auth-form-content" />
                <br></br>
                <MDBTextArea rows={20} label="Message" className="Auth-form-content" />
                <br></br>
                <MDBBtn block>Send</MDBBtn>
                </form>
            </MDBCol>
            </MDBRow>
        </section>
        </MDBContainer>
    </div>
  );
}

export default function Help(){
    const [hamActive, setHamActive] = useState(false);
    
    return(
        <div className="Courses">
            <NavbarHome hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive} />
            <WithContactForm />
            <Footer />
        </div>
    )
}