import React, { useState } from "react";
import { UserData } from "../../../actions/auth/interfaces";
import Form from "../../Form/Form";
import Loader from "../../Loader/Loader";
import styles from "../Auth.module.scss";

interface IProps {
  registerUser: (userData: UserData) => void
  isLoading: boolean
  isError: boolean
  message: string
}

const Registration: React.FC<IProps> = ({ registerUser, isLoading, isError, message }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
      type: "text",
      label: "Username:",
      placeholder: "Enter your username",
      value: username,
      valueChange: (e: React.FormEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value);
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
    text: "Already have an account? Log in!",
    path: "/auth/login",
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    registerUser({ email, username, password });
  }

  return (
    <div className={styles.container}>
      {
        isLoading
          ? <Loader />
          : <Form
            message={message}
            isError={isError}
            formData={formData}
            buttonText="Registration"
            handleSubmit={handleSubmit}
            title="Registration"
            additionalLink={link}
          />
      }
    </div>
  );
};

export default Registration;
