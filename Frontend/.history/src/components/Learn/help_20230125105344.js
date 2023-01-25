import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function WithContactForm() {
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
                <MDBInput label="Email address" required className="mb-8" />
                <br></br>
                <MDBTextArea rows={20} label="Message" className="mb-8" />
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