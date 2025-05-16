import { auth } from "@/firebase/firebaseConfig"
import { signOut } from "firebase/auth"
import Cookies from "js-cookie"

export function logoutAccount() {
    signOut(auth)
        .then(() => {
            Cookies.remove("authToken");
            console.log("User signed out successfully")
        })
        .catch((error) => {
        console.error("Error signing out: ", error)
        })
}