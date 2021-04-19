import React from "react";
import { Link } from "react-router-dom";
import useComponentVisible from "../../utils/useComponentVisible";
import ButtonElement from "../ButtonElement/ButtonElement";
import FormError from "./FormError/FormError";

interface inputElem {
  type?: string
  label: string
  placeholder: string
  value: string
  valueChange: (event: React.FormEvent<HTMLInputElement>) => void
}

interface linkAfterButton {
  text: string
  path: string
}

interface iProps {
  formData: Array<inputElem>
  buttonText: string
  handleSubmit: (e: React.SyntheticEvent) => void
  title?: string
  linkAfterButton?: linkAfterButton
  isError: boolean
  message: string
}

const FormElement: React.FC<iProps> = ({
  formData,
  buttonText,
  handleSubmit,
  title,
  linkAfterButton,
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
      <ButtonElement type="submit" children={buttonText} />
      {linkAfterButton && (
        <Link to={linkAfterButton.path}>{linkAfterButton.text}</Link>
      )}
    </form>
  );
};

export default FormElement;
