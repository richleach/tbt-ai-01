"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [userMessage, setUserMessage] = useState("How can we help?");
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
          if (nameInputRef.current) nameInputRef.current.value = "";
          if (emailInputRef.current) emailInputRef.current.value = "";
          if (messageInputRef.current) messageInputRef.current.value = "";
        },
        function () {
          setUserMessage("Sorry, there was an error sending your message.");
        }
      );
  }
  return (
    <div className="container px-10 mx-auto mb-8 mt-6 flex-1">
      <main className="flex flex-col items-center justify-between text-black bg-white border-2 rounded-lg p-6">
        <div className="pl-3 w-full">
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <div className="p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="container">
              <div className="showcase-form card">
                {userMessage && (
                  <h4 style={{ paddingBottom: "20px" }}>
                    <br />
                    <br />
                    {userMessage}
                  </h4>
                )}
                <form onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="* Name"
                        required
                        ref={nameInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        placeholder="* Email"
                        required
                        ref={emailInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="form-control">
                      <textarea
                        name="message"
                        required
                        placeholder="* Enter your message here."
                        className="w-full h-40 p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                        ref={messageInputRef}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-8">
                    <input
                      type="submit"
                      value="Send"
                      className="inline-block px-8 py-3 text-lg font-medium text-black transition duration-500 bg-blue-200 rounded-full cursor-pointer ease hover:bg-indigo-300"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
