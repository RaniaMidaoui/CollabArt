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
          <MDBCol lg="6" md="12" className="mb-4">
            <div>
              <p className="mb-1">
                <strong>Standard length question?</strong>
              </p>
              <p className="mb-1">
                <u>Higlighted short answer.</u> And some kind of detailed list.
              </p>
              <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
              </ul>
            </div>

            <div>
              <p className="mb-1">
                <strong>Short question?</strong>
              </p>
              <p className="mb-1">
                <u>Higlighted short answer.</u>
              </p>
              <p className="mb-1">
                Second part of the answer with more details.
              </p>
              <p>
                Final part of the answer full of detais and Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>
                  The longest question in this faq. Made up of two sentences in
                  order to span to the next line?
                </strong>
              </p>
              <p className="mb-1">
                <u>Higlighted short answer.</u>
              </p>
              <p className="mb-1">
                Second part of the answer with more details.
              </p>
              <p>
                Final part of the answer full of detais and Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>Slightly longer question?</strong>
              </p>
              <p className="mb-1">
                <u>Higlighted short answer.</u>
              </p>
              <p className="mb-1">
                Second part of the answer with more details.
              </p>
              <p>
                Final part of the answer full of detais and Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
            </div>
          </MDBCol>
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