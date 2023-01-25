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
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <section>
        <MDBRow>
          <MDBCol lg="6" md="12" className="text-center">
            <p>
              <span class="fw-bold">
                Still have any questions? Contact us to get your answer!
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