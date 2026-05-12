"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import styles from "./page.module.css";

export default function Contact() {
  const [userMessage, setUserMessage] = useState("How can we help?");
  const [sending, setSending] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    if (!formData.get("name")) {
      setUserMessage("Better add a value in the name field!");
      return false;
    }
    if (!formData.get("email")) {
      setUserMessage("Better add a value in the email field!");
      return false;
    }
    if (!formData.get("message")) {
      setUserMessage("Better add a value in the message field!");
      return false;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_vjn2eqp",
        "template_w3efn1e",
        target,
        "R463x9oi-mDgVA3Z8"
      )
      .then(
        function () {
          setUserMessage("Thank you, your message has been sent!");
          setSending(false);
          if (nameInputRef.current) nameInputRef.current.value = "";
          if (emailInputRef.current) emailInputRef.current.value = "";
          if (messageInputRef.current) messageInputRef.current.value = "";
        },
        function () {
          setUserMessage("Sorry, there was an error sending your message.");
          setSending(false);
        }
      );
  }

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <span className={styles.overline}>Get In Touch</span>
          <h1 className={styles.title}>Contact Us</h1>
        </motion.div>

        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.messageBox}>
              <p className={styles.userMessage}>{userMessage}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={sendEmail} className={styles.form}>
              <input type="hidden" name="form-name" value="contact" />

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="* Name"
                    required
                    ref={nameInputRef}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="* Email"
                    required
                    ref={emailInputRef}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="* Enter your message here."
                  ref={messageInputRef}
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
