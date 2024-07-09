import { useState } from "react";
import { createAuthUserWithEmailAndPassword,CreateUserDocumentFromAuth } from "../../utlis/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.style.scss'
import Button from "../button-component/button.component";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

 

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleChange = (event) => {
    const { name , value } = event.target;
    setFormFields({...formFields,[name]:value})
  };  

  const handlesubmit = async (event) => {
    event.preventDefault();


    if(password !== confirmPassword){
        alert('your password is incorrect')
        return;
    }

    try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);


        await CreateUserDocumentFromAuth(user, { displayName: name });
        
        resetFormFields()
    }catch(error){

      if(error.code === 'auth/email-already-in-use'){
        alert('your email is already in use')
      }
        console.error('users creation encountered an: error', error)
    }
  }

  return (
    <div className="sign-up-container">
      <h1>Don't have an account</h1>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
        label= "Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />

        <FormInput
        label='Email'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
         label='Password'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
         label='Confirm Password'
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button  buttonType='google' type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
