import { useState } from "react";
import "./contact.scss"
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_3irhzk7';
    const templateId = 'template_5d5o93o';
    const publicKey = 'Jt_X_ZX5NLAFVMtn8';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Dev Shehzor',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <textarea placeholder="Message" value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Send Email</button>
          {emailSent && <p>Your email has been sent!</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
