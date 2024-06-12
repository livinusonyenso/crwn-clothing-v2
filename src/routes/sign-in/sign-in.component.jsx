import {
    auth,
  SignInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const LogGoogleuser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await CreateUserDocumentFromAuth(user);
    //console.log(response);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={LogGoogleuser}>sign in with google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
