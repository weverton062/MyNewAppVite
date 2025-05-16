import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase/firebaseConfig"
import Cookies from "js-cookie";


export async function handleGoogleSignIn(navigate: (path: string) => void) {
    try{
        if (auth.currentUser) {
            const token = await auth.currentUser.getIdToken();
            Cookies.set("authToken", token, { expires: 15, secure: true, sameSite: "strict" });
            navigate("/dashboard"); 
            return;
          }

        const result = await signInWithPopup(auth, provider);

        if (!result.user) {
            throw new Error("Usuário não encontrado após login.");
        }

        const token = await result.user.getIdToken();

        
        Cookies.set("authToken", token, 
            { 
                expires: 12,
                secure: true, 
                sameSite: "strict", 
            },

            
        );
        navigate("/dashboard")
    }catch(err){
        Cookies.remove("authToken")
        console.log(err)
    }
}