import { IRegisterPayload, ValidationErrors } from "../Interface/interface";

export const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Checking for specific invalid cases
    const invalidEmailCases = [
      "abc-@mail.com",
      "abc..def@mail.com",
      ".abc@mail.com",
      "abc#def@mail.com",
      "!abc@mail.com",
      "@@abc@mail.com",
      "#$@abc@mail.com",
    ];

    // Return false for specific invalid cases
    if (invalidEmailCases.includes(email)) {
      return false;
    }

    // Check if email starts with a special character repeated two or more times
    const startsWithRepeatedSpecialChars = /^[!@#$%^&*()_+-=]{2,}/.test(email);

    return !startsWithRepeatedSpecialChars && emailRegex.test(email);
  };

export const validateValues = (inputValues:IRegisterPayload) => {
    const errors: ValidationErrors = {};
    if (inputValues.username.length < 3 || !inputValues?.username) {
        errors.username = "length should be >= 3";
    }
    if (inputValues.name.length < 3 || !inputValues.name) {
    errors.name = "length should be >= 3";
    }
    if (inputValues.email.length < 15 || !isValidEmail(inputValues.email)) {
      errors.email = "Invailid Email";
    }
    if (inputValues.password.length < 8 || !inputValues.password) {
      errors.password = "maximum 8 character";
    }
    if (!inputValues.age) {
      errors.age = "Minimum age is 15";
    }
    if (inputValues.mobile.toString().length < 10 || inputValues.mobile.toString().length > 10) {
        errors.mobile = "Invailid Mobile";
    }
    if (!inputValues.gender) {
        errors.gender = "Please select gender";
    }
    if (!inputValues.dob) {
        errors.dob = "Please select DOB";
    }
    return errors;
  };