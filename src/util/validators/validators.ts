// validators.ts

import { IValidator } from "./types";

const REQUIRED = "REQUIRED";
const MAX_CHAR = "MAX_CHAR";
const MIN_CHAR = "MIN_CHAR";
const IS_EMAIL = "EMAIL";

const errorMessages = {
  REQUIRED: "This field is required.",
  MAX_CHAR: (max: number) => `Must be ${max} characters or fewer.`,
  MIN_CHAR: (min: number) => `Must be at least ${min} characters long.`,
  IS_EMAIL: "Must be a valid email address.",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (value: string, validators: IValidator[]): string | null => {
  for (const validator of validators) {
    switch (validator.type) {
      case REQUIRED:
        if (!value.trim()) {
          return errorMessages.REQUIRED;
        }
        break;
      case MAX_CHAR:
        if (value.length > (validator.value ?? 0)) {
          return errorMessages.MAX_CHAR(validator.value ?? 0);
        }
        break;
      case MIN_CHAR:
        if (value.length < (validator.value ?? 0)) {
          return errorMessages.MIN_CHAR(validator.value ?? 0);
        }
        break;
      case IS_EMAIL:
        if (!emailRegex.test(value)) {
          return errorMessages.IS_EMAIL;
        }
        break;
      default:
        break;
    }
  }
  return null;
};

export { REQUIRED, MAX_CHAR, MIN_CHAR, IS_EMAIL, validate };