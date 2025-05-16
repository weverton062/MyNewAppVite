import { SignInData, SignUpData } from "@/lib/form"
import { UseFormSetError } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import Cookies from "js-cookie";
import { parseFirebaseAuthError } from "@/lib/auth/firebaseErrorHandler";
import { ValidationAuthSignUp } from "@/lib/auth/validationsAuth";


export async function handleSignUp(data: SignUpData, setError: UseFormSetError<SignInData>) {
  const validateCredentiais = ValidationAuthSignUp(data, setError);
  if(!validateCredentiais) return;

  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    userCredential.user.getIdToken().then((token) => {
     Cookies.set("authToken", token, {
      expires: 20,
      secure: true,
      sameSite: "strict",
    });
    return;
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const handleError = parseFirebaseAuthError(errorCode);
    setError(handleError.field, { message: handleError.message, type: "manual" })
    return false;
  });
}

export async function handleSignIn(data: SignInData, setError: UseFormSetError<SignInData>){ 
  try{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      userCredential.user.getIdToken().then((token) => {
        console.log(userCredential, token)
        Cookies.set("authToken", token, {
          expires: 20,
          secure: true, 
          sameSite: "strict",
        });
        return;
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const handleError = parseFirebaseAuthError(errorCode);
      console.log(errorCode)
      setError(handleError.field, { message: handleError.message, type: "manual"})
      return false;
    });
  } catch(err: any){
    console.log(err)
  }
}