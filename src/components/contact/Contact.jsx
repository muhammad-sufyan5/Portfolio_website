import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Zoom, Fade, Flip, Bounce, Roll } from "react-reveal";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hs8m5p3",
      "template_yhqksii",
      form.current,
      "esRxUXlFJljEGe881"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <Bounce top duration={1800}>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </Bounce>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <Bounce left duration={1800}>
              <MdOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>sufyan.pk.jutt@gmail.com</h5>
              <Bounce left duration={1800}>
                <a href="mailto:sufyan.pk.jutt@gmail.com" target="_blank">
                  Send a message
                </a>
              </Bounce>
            </Bounce>
          </article>
          <article className="contact__option">
            <Bounce left duration={1800}>
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Muhammad Sufyan</h5>

              <Bounce left duration={1800}>
                <a href="https://m.me/sufyanjutt.jutt.336 " target="_blank">
                  Send a message
                </a>
              </Bounce>
            </Bounce>
          </article>
          <article className="contact__option">
            <Bounce left duration={1800}>
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+923044505962</h5>

              <Bounce left duration={1800}>
                <a
                  href="https://api.whatsapp.com/send?phone=+923044505962"
                  target="_blank"
                >
                  Send a message
                </a>
              </Bounce>
            </Bounce>
          </article>
        </div>
        {/* End of Contact Option */}
        <Zoom right>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        </Zoom>
        
      </div>
    </section>
  );
};

export default Contact;
