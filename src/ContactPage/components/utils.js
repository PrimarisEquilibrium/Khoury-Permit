import { BASE_URL } from "../../utils";

export async function sendEmail(name, email, message) {
  const rawResponse = await fetch(`${BASE_URL}/api/email/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  }).catch((error) => {
    return false;
  });

  if (rawResponse.ok) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return false;
  } else {
    return true;
  }
}