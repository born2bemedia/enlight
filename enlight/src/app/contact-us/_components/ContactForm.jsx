"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("This field is required."),
  phone: Yup.string()
    .required("This field is required.")
    .test("is-valid-phone", "Please provide a valid phone number.", (value) =>
      Boolean(value && value.replace(/\D/g, "").length >= 8)
    ),
  message: Yup.string(),
});

async function submitContact(values, { setSubmitting, resetForm, setStatus }) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      resetForm();
      setStatus({ success: true });
      return true;
    }

    setStatus({ success: false });
    return false;
  } catch (error) {
    console.error(error);
    setStatus({ success: false });
    return false;
  } finally {
    setSubmitting(false);
  }
}

function ContactForm({ onSuccess }) {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, helpers) => {
        const ok = await submitContact(values, helpers);
        if (ok) onSuccess?.();
      }}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form className="contact-form">
          <h2>For all types of the inquiries</h2>
          <div className="contact-form__fields">
            <label
              className={`contact-field${
                touched.name && errors.name ? " is-invalid" : ""
              }`}
            >
              <span className="visually-hidden">Your Name</span>
              <Field name="name" placeholder="Your Name" autoComplete="name" />
              <ErrorMessage name="name" component="span" />
            </label>

            <div className="contact-form__row">
              <label
                className={`contact-field${
                  touched.email && errors.email ? " is-invalid" : ""
                }`}
              >
                <span className="visually-hidden">Business Email</span>
                <Field
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  autoComplete="email"
                />
                <ErrorMessage name="email" component="span" />
              </label>
              <label
                className={`contact-field${
                  touched.phone && errors.phone ? " is-invalid" : ""
                }`}
              >
                <span className="visually-hidden">Phone</span>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  autoComplete="tel"
                />
                <ErrorMessage name="phone" component="span" />
              </label>
            </div>

            <label className="contact-field contact-field--message">
              <span className="visually-hidden">Your message</span>
              <Field
                name="message"
                as="textarea"
                placeholder="Your message"
                rows={3}
              />
            </label>
          </div>

          <button
            type="submit"
            className="contact-form__submit"
            disabled={isSubmitting}
          >
            <span>Send</span>
            <span className="contact-form__submit-icon" aria-hidden="true">
              <span className="contact-form__submit-arrow">
                <img
                  src="/images/contact/send-arrow.svg"
                  alt=""
                  width={15}
                  height={15}
                />
              </span>
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
