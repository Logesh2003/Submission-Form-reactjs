// Email Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

// Strong Password Regex
const passwordStrongRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

// Mobile Number Regex (6–15 digits)
const phoneRegex = /^[0-9]{6,15}$/;

// ---- Validation Function ----
export const validateLogin = (email, password) => {
  let errors = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (!passwordStrongRegex.test(password)) {
    errors.password =
      "Password must include uppercase, lowercase, number & special char";
  }

  return errors;
};

export const validateSignup = (values) => {
  let errors = {};

  // Profile created for
  if (!values.profileFor) {
    errors.profileFor = "Please select who this profile is for";
  }

  // Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  // Phone number
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "Enter a valid number (6-15 digits)";
  }

  // Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordStrongRegex.test(values.password)) {
    errors.password =
      "Must contain uppercase, lowercase, number & special character";
  }

  // Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please re-enter your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
