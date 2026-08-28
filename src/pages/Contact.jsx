
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../scss/Contact.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Send message to Faiz
      await emailjs.send(
        "service_ucx2wgd",
        "template_u1q3msy",
        form,
        "ac5hH8rcwnNxQo0PD"
      );

      // Send automatic reply to client
      await emailjs.send(
        "service_ucx2wgd",
        "template_blv9whx",
        form,
        "ac5hH8rcwnNxQo0PD"
      );

      setStatus(
        "Message submitted successfully! We will contact you soon."
      );

      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">

        {/* CONTACT INFO */}
        <div className="contact__information">

          {/* EMAIL */}
          <div className="contact__content">
            <span className="contact__icon">✉</span>

            <div>
              <h3 className="contact__title">Email</h3>

              <span className="contact__subtitle">
                frasool0066@gmail.com
              </span>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact__content">
            <span className="contact__icon">☎</span>

            <div>
              <h3 className="contact__title">Phone</h3>

              <span className="contact__subtitle">
                +92 307 4847654
              </span>
            </div>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923074847654"
            target="_blank"
            rel="noreferrer"
            className="contact__content"
          >
            <span className="contact__icon">◉</span>

            <div>
              <h3 className="contact__title">WhatsApp</h3>

              <span className="contact__subtitle">
                Chat with me
              </span>
            </div>
          </a>

          {/* INSTAGRAM - CLICKABLE */}
          <a
            href="https://www.instagram.com/faizdecodes/"
            target="_blank"
            rel="noreferrer"
            className="contact__content"
          >
            <span className="contact__icon">◎</span>

            <div>
              <h3 className="contact__title">Instagram</h3>

              <span className="contact__subtitle">
                @faizdecodes
              </span>
            </div>
          </a>

        </div>

        {/* CONTACT FORM */}
        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <div className="contact__form-div">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={loading}
            />
          </div>

          {/* EMAIL */}
          <div className="contact__form-div">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          {/* PROJECT */}
          <div className="contact__form-div">
            <label>Project</label>

            <input
              type="text"
              name="project"
              value={form.project}
              onChange={handleChange}
              placeholder="What do you need?"
              required
              disabled={loading}
            />
          </div>

          {/* MESSAGE */}
          <div className="contact__form-div">
            <label>Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
              disabled={loading}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="contact__button button button--flex"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="contact__loader"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message →
              </>
            )}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p
              className={`contact__status ${
                status.includes("successfully")
                  ? "success"
                  : "error"
              }`}
            >
              {status}
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;

