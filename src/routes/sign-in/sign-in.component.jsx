import { SignInWithGooglePopup,CreateUserDocumentFromAuth } from "../../utlis/firebase/firebase.utils";

const SignIn = () => {
const LogGoogleuser = async () =>{
  const {user} =  await SignInWithGooglePopup ();
  const userDocRef = await  CreateUserDocumentFromAuth(user)
  //console.log(response);
}

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={LogGoogleuser}>
                sign in with google Popup
            </button>
        </div>
    ) 
}

export default SignIn;