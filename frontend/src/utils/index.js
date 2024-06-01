/** @format */

function validateFormFields(email, password, name) {
  if (email) {
    const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!email.trim()) return { ok: false, error: "Email is missing!" };
    if (!isValidEmail.test(email))
      return { ok: false, error: "Invalid email!" };
  }

  if (name) {
    if (!name.trim()) return { ok: false, error: "Name is missing!" };
  }

  if (password) {
    if (!password.trim()) return { ok: false, error: "Password is missing!" };
    if (password.length < 5)
      return { ok: false, error: "Password must be 6 character long!" };
  }

  return { ok: true, error: "" };
}

function parseDate(time) {
  const date = new Date(time);

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}

export { validateFormFields, parseDate };
