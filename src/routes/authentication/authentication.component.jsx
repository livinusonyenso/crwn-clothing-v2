import {
    auth,
  SignInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import './authentication.style.scss'


const Authentication = () => {
  const LogGoogleuser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await CreateUserDocumentFromAuth(user);
    //console.log(response);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
