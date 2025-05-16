import { UseFormSetError } from "node_modules/react-hook-form/dist/types";
import { SignInData, SignUpData } from "../form";

export function ValidationAuthSignUp(data: SignUpData, setError: UseFormSetError<SignInData>){
    if(data.name && data.email && data.password && data.confirmPassword){
        if(data.password === data.confirmPassword){
              return true;
        }else{
            setError("password", {
                type: "manual",
                message: "As senhas não correspondem"
            });
            return false
        }
    }else{
        setError("root", {
            type: "manual",
            message: "Todos os campos são obrigatórios."
        });
        return false;
    }
}