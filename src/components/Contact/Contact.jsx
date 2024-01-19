import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

// import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjnlvbb");

  if (state.succeeded) {
    return <p className="successMessage">Thanks for submitting the form!</p>;
  }
  return (
    <div className="container2 contactSection">
      <div>
        <h1 className="contentHeading">
          <span>06. </span>Contact Me <span className="spanLine"></span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="contactForm">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" className="button" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
