import React from "react";
import { Link } from "react-router-dom";
import useComponentVisible from "../../utils/useComponentVisible";
import Button from "../Button/Button";
import FormError from "./FormError/FormError";

interface Input {
  type?: string
  label: string
  placeholder: string
  value: string
  valueChange: (event: React.FormEvent<HTMLInputElement>) => void
}

interface AdditionalLink {
  text: string
  path: string
}

interface IProps {
  formData: Array<Input>
  buttonText: string
  handleSubmit: (e: React.SyntheticEvent) => void
  title?: string
  additionalLink?: AdditionalLink
  isError: boolean
  message: string
}

const Form: React.FC<IProps> = ({
  formData,
  buttonText,
  handleSubmit,
  title,
  additionalLink,
  isError,
  message,
}) => {

  const { ref, isComponentVisible } = useComponentVisible(true);

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {formData.map((element, id) => (
        <div key={id}>
          <label htmlFor={`${id}`}>{element.label}</label>
          <input
            type={element.type || "text"}
            placeholder={element.placeholder}
            value={element.value}
            onChange={element.valueChange}
          />
        </div>
      ))}
      <div ref={ref}>
        {(isError && isComponentVisible) && <FormError message={message} />}
      </div>
      <Button type="submit" children={buttonText} />
      {additionalLink && (
        <Link to={additionalLink.path}>{additionalLink.text}</Link>
      )}
    </form>
  );
};

export default Form;
