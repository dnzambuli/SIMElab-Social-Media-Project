import { useState } from "react";
import "./ContactForm.css"; // Make sure to create a corresponding CSS file

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., sending data to a server
    console.log({ name, email, subject, message });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Let's get in Touch</h2>
        <p>We are open for any suggestions or just for chats</p>
        <div className="info">
          <div className="phone">
            <i className="icon-phone"></i>
            <span>0123456789</span>
          </div>
          <div className="email">
            <i className="icon-envelope"></i>
            <span>abc@abcd.co.ke</span>
          </div>
          <div className="address">
            <i className="icon-location"></i>
            <span>somewhere, town, district, county, country</span>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
