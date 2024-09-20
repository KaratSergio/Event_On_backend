import { EMAIL_REGEX, DATE_REGEX } from "../constants/validation.js";

export const isValidEmail = (email) =>
  EMAIL_REGEX.test(String(email).toLowerCase());

export const isValidDate = (dateString) => {
  if (!DATE_REGEX.test(dateString)) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};
