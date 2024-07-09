
//import { BaseButton,GoogleSignInButton,InvertedButton } from "./button.style";
import { BaseButton } from "./button.style";
import { GoogleSignInButton } from "./button.style";
import { InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const buttonComponents = {
  [BUTTON_TYPE_CLASS.base]: BaseButton,
  [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => {
  return buttonComponents[buttonType] || BaseButton; // Return BaseButton as default
};

// const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => (
//   {  // Add parentheses here
//     [BUTTON_TYPE_CLASS.base]: BaseButton,
//     [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
//   }[buttonType]
// )

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}> {children} </CustomButton>;
};

export default Button;
