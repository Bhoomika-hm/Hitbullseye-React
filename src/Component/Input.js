import "./Input.css";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Input() {
  const [state, handleSubmit] = useForm("mzbqeezd");
  if (state.succeeded) {
      return <p className="returnText">Your message has been recieved. I will contact you shortly...</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="text">
        Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="text">
        Subject
      </label>
      <input
        id="Subject"
        type="text" 
        name="Subject"
      />
      <label htmlFor="Message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" className="btn" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default Input