import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC_APRu74BdDdS771synp_Y7V9zzPNMZx8",
    authDomain: "crwn-clothing-db-87faf.firebaseapp.com",
    projectId: "crwn-clothing-db-87faf",
    storageBucket: "crwn-clothing-db-87faf.appspot.com",
    messagingSenderId: "1063908253486",
    appId: "1:1063908253486:web:94ebfdf1de09e2371824bf"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})



  export const auth = getAuth();
  export const SignInWithGooglePopup = () => signInWithPopup(auth, provider); 

  export const db = getFirestore();
  export const CreateUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db,'users', userAuth.uid) 

  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot)
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()){
    const {displayName,email} = userAuth;
    const createAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createAt,
        })
    }catch(error){
        console.log('error>>>>>>',error.message)
    }
  }

  return userDocRef;

  //if user data exist

  //if user data does not exist

  // return userDocRef
  }