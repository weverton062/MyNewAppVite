import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Dashboard(){
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut(); // Firebase sign out
        Cookies.remove("authToken"); // Remove o token
        navigate("/signin"); // Redireciona para tela de login
    };
    return(
        <>
            <p>Essa e a Dashboard</p>
            <Button onClick={handleLogout} className="mt-4">
                Sair
            </Button>
        </>
    )
}