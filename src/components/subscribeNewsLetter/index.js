import React, { useEffect, useState } from "react";

const SubscribeNewsLetter = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message ?? null;
    if ("0" !== result[0]?.trim()) {
      return message;
    }
    const formattedMessage = result[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  };
  return (
    <>
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        className="rounded-md my-3 text-black p-1"
        placeholder="Email Address"
        onKeyUp={(event) => handleInputKeyEvent(event)}
      />
      <button
        className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] rounded-md text-black p-1 uppercase"
        onClick={handleFormSubmit}
      >
        Subscribe to our newsletter
      </button>

      <div>
        {"sending" === status ? "Loading" : null}
        {"error" === status || error ? (
          <div
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </>
  );
};

export default SubscribeNewsLetter;
