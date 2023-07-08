import React from "react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function Contact(props) {
  const darkmode = props.darkmode;

  // FORMIK LOGIC
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // VALIDATE FORuM
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name."),
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please enter an email address."),
      message: Yup.string().required("Please enter a message."),
    }),

    // SUBMIT FORUM
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <div
      className={`${
        darkmode && "dark"
      } flex flex-wrap justify-evenly items-center px-8 pt-40 pb-20 md:w-full lg:pb-60`}
    >
      <div className="flex flex-col px-4 py-4 max-w-xl">
        <h1 className="text-5xl mt-1 mb-4">
          <b>Get in touch 📡</b>
        </h1>
        <p className="text-lg my-1">
          Have any questions or want to reach out? Send me an email or find me
          around the web.
        </p>
        <div className="flex flex-row py-2">
          <a href="https://www.linkedin.com/in/satanshumishra/" target="_blank">
            <LinkedInLogoIcon className="h-10 w-10 pr-2" />
          </a>
          <a href="https://github.com/SatanshuMishra" target="_blank">
            <GitHubLogoIcon className="h-10 w-10 pr-2" />
          </a>
        </div>
      </div>
      <div className="flex flex-col px-4 py-4 max-w-xl">
        <form onSubmit={formik.handleSubmit}>
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
            className={`w-full h-auto my-2 p-2 border-2 focus:outline-none ${
              darkmode ? "border-white bg-black" : "border-blue-950 bg-white"
            }`}
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
            className={`w-full h-auto my-2 p-2 border-2 focus:outline-none ${
              darkmode ? "border-white bg-black" : "border-blue-950 bg-white"
            }`}
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            className={`font-medium ${
              formik.touched.message && formik.errors.message && `text-red-600`
            }`}
            htmlFor="message"
          >
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : "Message"}
          </label>
          <textarea
            rows={10}
            className={`w-full h-auto my-2 p-2 border-2 focus:outline-none ${
              darkmode ? "border-white bg-black" : "border-blue-950 bg-white"
            }`}
            name="message"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <button
            className={`w-full py-2 font-semibold border-2 bg-black text-white hover:text-black hover:bg-white duration-500 ${
              darkmode ? "border-white" : "border-black hover:border-black"
            }}`}
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
