import React, { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import { alertStyles } from "./styles/alertStyles";

export const BASE_URL = `https://${window.location.host}`;
// export const BASE_URL = `http://127.0.0.1:8000`;

const AlertMessage = createContext();

export function AlertProvider(props) {
  const [alert, setAlert] = useState("");
  const value = [alert, setAlert];
  return <AlertMessage.Provider value={value} {...props} />;
}

export function useAlert() {
  const context = useContext(AlertMessage);
  if (!context) {
    throw new Error("useAlert must be used inside of AlertProvider");
  }
  return context;
}

export function AlertDisplay({ alert, alertType }) {
  if (alert) {
    return (
      <Alert
        severity={alertType}
        className="contact-alert"
        sx={alertStyles[alertType]}
      >
        {alert}
      </Alert>
    );
  }
}

export async function reCaptchaValidator(reRef) {
  const token = await reRef.current.executeAsync();

  const response = await fetch(`${BASE_URL}/api/recaptcha/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ captcha_value: token }),
  })
  .catch( 
    (error) => Promise.reject(`Unable to fetch ReCaptcha API endpoint, ${error}`)
  )

  const data = await response.json();
  return data;
}