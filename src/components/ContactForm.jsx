import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import "../App.css";
import "./ContactForm.css";

function ContactForm() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_8brub0n", "sample1", toSend, "w3PTPQHEg7TjRVSxm")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Thank you for getting in touch!");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="contact-form">

        <form id="myForm" className="mb-3">
          <label htmlFor="name-input" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name-input"
            placeholder="Name"
            value={toSend.name}
            onChange={handleChange}
          />
          <label htmlFor="email-input" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email-input"
            placeholder="name@example.com"
            value={toSend.email}
            onChange={handleChange}
          />
          <label htmlFor="subject-input" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="subject-input"
            placeholder="Subject"
            value={toSend.subject}
            onChange={handleChange}
          />
          <label htmlFor="message-input" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message-input"
            rows="4"
            placeholder="Leave a message"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
        </form>
        <button
          onClick={handleSubmit}
          type="submit"
          className="form-button"
        >
          Send
        </button>
      </div>

    </>
  );
}

export default ContactForm;