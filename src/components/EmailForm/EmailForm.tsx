import { useState } from "react";

import errorIcon from "../../assets/images/icon-error.svg";
import arrowIcon from "../../assets/images/icon-arrow.svg";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isValidForm, setIsValidForm] = useState(true);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;

    setEmail(newValue);

    if (!isValidForm && e.target.checkValidity()) {
      setIsValidForm(true);
    }
  };

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      setIsValidForm(false);
      return;
    }

    setIsValidForm(true);
  };

  return (
    <form className="form" data-form onSubmit={handleFormSubmit} noValidate>
      <div className={`form__field ${isValidForm ? "" : "is-invalid"}`} data-field>
        <input
          type="email"
          className="form__email-input"
          name="email"
          data-input
          onChange={handleEmailInput}
          value={email}
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="email-error"
          aria-invalid={!isValidForm}
          required
        />

        <img src={errorIcon} alt="" className="form__error-icon" aria-hidden="true" />

        <button type="submit" className="form__submit-btn" aria-label="Submit email">
          <img src={arrowIcon} alt="" aria-hidden="true" />
        </button>

        <p id="email-error" className="form__error-msg" data-error-msg aria-live="polite">
          {isValidForm ? "" : "Please provide a valid email"}
        </p>
      </div>
    </form>
  );
};

export default EmailForm;
