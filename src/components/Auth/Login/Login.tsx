import React, { useState } from "react";
import FormElement from "../../FormElement/FormElement";
import Loader from "../../Loader/Loader";
import styles from "../Auth.module.scss";

interface iProps {
  loginUser: any
  isLoading: boolean
  isError: boolean
  message: string
}

const Login: React.FC<iProps> = ({ loginUser, isLoading, isError, message }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = [
    {
      type: "email",
      label: "Email:",
      placeholder: "Enter your email",
      value: email,
      valueChange: (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
      },
    },
    {
      type: "password",
      label: "Password:",
      placeholder: "Enter your password",
      value: password,
      valueChange: (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
      },
    },
  ];

  const link = {
    text: "Don't have an account? Create one!",
    path: "/auth/registration",
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    loginUser({ email, password });
  }

  return (
    <div className={styles.container}>
      {
        isLoading
          ? <Loader />
          : <FormElement
            message={message}
            isError={isError}
            formData={formData}
            buttonText="Login"
            handleSubmit={handleSubmit}
            title="Login"
            linkAfterButton={link}
          />
      }
    </div>
  );
};

export default Login;
