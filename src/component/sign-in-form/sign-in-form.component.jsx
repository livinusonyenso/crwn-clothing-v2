import { useState } from "react";
import {
  SignInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../../utlis/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import Button , {BUTTON_TYPE_CLASS} from "../button-component/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
     await SignInWithGooglePopup();
    
    
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      //const {user} = await signAuthUserWithEmailAndPassword(email, password);
     

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("invalid email");
          break;
        case "auth/network-request-failed":
          alert("network-failed");
          break;
        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Already have an account</h1>
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASS.google} type="button"  onClick={SignInWithGoogle}>sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
