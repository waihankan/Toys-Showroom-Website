import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();
    setValues({ ...values, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setValues({ ...values, email: e.target.value });
  };

  const handleSubjectChange = (e) => {
    e.preventDefault();
    setValues({ ...values, subject: e.target.value });
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setValues({ ...values, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // reset form
    // setValues({
    //   name: "",
    //   subject: "",
    //   email: "",
    //   message: "",
    // });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setValues({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div>
        <h1 className="uppercase text-center font-sm font-roboto font-bold tracking-tight mb-3">
          Contact Us
        </h1>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="relative z-0 max-w-sm lg:max-w-[35%] mx-auto border-2 border-purple-500 rounded-lg py-5 px-4 md:px-8"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              className="block text-gray-500 font-xs font-poppins tracking-tight font-light  md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="full-name"
              type="text"
              class="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-pink-500"
              placeholder="Your Name"
              onChange={handleNameChange}
              value={values.name}
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-light font-poppins tracking-tight md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="email"
              class="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-pink-500"
              type="text"
              placeholder="example@gmail.com"
              onChange={handleEmailChange}
              value={values.email}
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-light font-poppins tracking-tight md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Subject
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="email"
              class="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-pink-500"
              type="text"
              placeholder="Inquiry about..."
              onChange={handleSubjectChange}
              value={values.subject}
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-light font-poppins tracking-tight md:text-right mb-1 md:mb-0 pr-4"
              for="text-message"
            >
              Message
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea
              required
              id="message"
              class="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 focus:border-pink-500"
              type="text"
              placeholder="Hello, ... "
              onChange={handleTextChange}
              value={values.message}
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send Email
            </button>
          </div>
        </div>
        {submitted &&
          (values.name && values.email && values.subject && values.message ? (
            <motion.div
              className="absolute z-20 top-0 right-0 flex items-center justify-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 2 }}
              role="alert"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p>Something happened that you should know about.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
              role="alert"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p>Error</p>
            </motion.div>
          ))}
      </form>
    </div>
  );
};
export default ContactUs;
