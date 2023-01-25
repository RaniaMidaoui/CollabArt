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
    <MDBContainer className="Auth-form-container">
      <section>
        <MDBRow>
          <MDBCol lg="16" md="112" className="text-center">
            <p>
              <span class="fw-bold">
                You need help and you don't know who to ask ? <br></br> Send us your question and the right expert will answer.
              </span>
            </p>

            <form>
              <MDBInput label="Email address" required className="mb-4" />
              <MDBTextArea rows={4} label="Message" className="mb-4" />
              <MDBBtn block>Send</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}