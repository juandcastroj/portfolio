import React from "react";
import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function useForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = form;
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    console.log(firstName, lastName, email, message);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const ShowError: React.ComponentType = () =>
    React.createElement(
      "div",
      {
        className:
          "mx-6 text-red-600 dark:text-orange-500 font-semibold my-2",
      },
      "All fields are mandatory."
    );

  return {
    firstName,
    lastName,
    email,
    message,
    error,
    handleChange,
    handleSubmit,
    ShowError,
  };
}