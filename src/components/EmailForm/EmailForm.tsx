const EmailForm = () => {
  return (
    <form className="form" data-form noValidate>
      <div className="form__field" data-field>
        <input
          type="email"
          className="form__email-input"
          name="email"
          data-input
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="email-error"
          aria-invalid="false"
          required
        />

        <img src="./images/icon-error.svg" alt="" className="form__error-icon" aria-hidden="true" />

        <button type="submit" className="form__submit-btn" aria-label="Submit email">
          <img src="./images/icon-arrow.svg" alt="" aria-hidden="true" />
        </button>

        <p id="email-error" className="form__error-msg" data-error-msg aria-live="polite"></p>
      </div>
    </form>
  );
};

export default EmailForm;
