import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

type ContactProps = {
  darkMode: boolean;
  suppressHydrationWarning: true;
};

export default function Contact({ darkMode }: ContactProps) {
  const iconSize = 7;

  // FORMIK LOGIC
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name."),
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please enter an email address."),
      message: Yup.string().required("Please enter a message."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className={`${
        darkMode ? `dark` : `light`
      } flex flex-col lg:flex-row p-4 lg:px-8`}
    >
      <div
        className={`flex flex-col items-start justify-center p-4 lg:px-12 z-20`}
      >
        <h1 className={`font-black text-6xl py-4`}>
          Get in Touch
          <span className={`text-7xl hidden md:inline-block`}>📡</span>
        </h1>
        <p className={`font-light text-xl lg:text-2xl leading-8 `}>
          Have any questions? Want to collaberate on a project? Or just want to
          talk? Shoot me a message 🙂
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-full p-4 lg:px-12 z-20`}
      >
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-center items-start w-full py-2">
            <label
              className={`font-medium ${
                formik.touched.name && formik.errors.name && `text-red-600`
              }`}
              htmlFor="name"
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <input
              className={`w-full h-auto border-2 focus:outline-none p-2 rounded-md ${
                darkMode ? `bg-newDark border-white` : `bg-white border-black`
              }`}
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full py-2">
            <label
              className={`font-medium ${
                formik.touched.email && formik.errors.email && `text-red-600`
              }`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              className={`w-full h-auto border-2 focus:outline-none p-2 rounded-md ${
                darkMode ? `bg-newDark border-white` : `bg-white border-black`
              }`}
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full py-2">
            <label
              className={`font-medium ${
                formik.touched.message &&
                formik.errors.message &&
                `text-red-600`
              }`}
              htmlFor="message"
            >
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Message"}
            </label>
            <textarea
              rows={10}
              className={`w-full h-auto border-2 focus:outline-none p-2 rounded-md ${
                darkMode ? `bg-newDark border-white` : `bg-white border-black`
              }`}
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <button
            className={`font-bold duration-300 w-full h-auto border-2 focus:outline-none p-2 rounded-md ${
              darkMode
                ? `bg-newDark border-white hover:bg-white hover:text-black`
                : `bg-white border-black hover:bg-black hover:text-white`
            }`}
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <div className={``}>
           <a href="https://www.linkedin.com/in/satanshumishra/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={`h-${iconSize} w-${iconSize} pr-2`}
            />
          </a>
          <a href="https://github.com/SatanshuMishra" target="_blank">
            <FontAwesomeIcon
              icon={faGithubAlt}
              className={`h-${iconSize} w-${iconSize} pr-2`}
            />
          </a>
        </div> */
}
