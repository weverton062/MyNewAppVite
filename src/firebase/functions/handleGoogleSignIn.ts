import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase/firebaseConfig"
import Cookies from "js-cookie";


export async function handleGoogleSignIn(navigate: (path: string) => void) {
    try{
        if (auth.currentUser) {
            const token = await auth.currentUser.getIdToken();
            Cookies.set("authToken", token, { expires: 15, secure: true, sameSite: "strict" });
            navigate("/dashboard"); // ou a rota desejada
            return;
          }

        const result = await signInWithPopup(auth, provider);

        if (!result.user) {
            throw new Error("Usuário não encontrado após login.");
        }

        const token = await result.user.getIdToken();

        // Armazena o token no cookie por 7 dias
        Cookies.set("authToken", token, 
            { 
                expires: 7,
                secure: true, // só envia em HTTPS
                sameSite: "strict", // evita envio em requisições de outros domínios
            },

            
        );
        navigate("/dashboard")
    }catch(err){
        Cookies.remove("authToken")
        console.log(err)
    }
}