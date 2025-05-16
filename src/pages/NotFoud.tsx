import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";


export function NotFoundPage(){
  const navigate = useNavigate();
    return(
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">404</h1>
        
        <p>A página que você está procurando não existe.</p>
        <Button onClick={()=>navigate(-1)} className="mt-2">
          VOLTAR A PAGINA ANTERIOR
        </Button>
      </div>
    </div>
    )
}