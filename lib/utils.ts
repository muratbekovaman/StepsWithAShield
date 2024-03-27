import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};


// password generator

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvqxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "`~!@#$%^&*()-_=,.<>{}[]():;";

const getRandomNumber = (length: number) => {
  return Math.floor(Math.random() * length);
};

export const generatePassword = (
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean,
  length: number
) => {
  let password = "";
  let chosenCharacters = "";

  if (uppercase) {
    chosenCharacters += UPPERCASE;
  }

  if (lowercase) {
    chosenCharacters += LOWERCASE;
  }

  if (numbers) {
    chosenCharacters += NUMBERS;
  }

  if (symbols) {
    chosenCharacters += SYMBOLS;
  }

  for (let index = 0; index < length; ++index) {
    password += chosenCharacters[getRandomNumber(chosenCharacters.length)];
  }

  return password;
};

export const isFireFoxBrowser = () => {
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent.toString() : "";
  return userAgent.includes("Firefox");
};