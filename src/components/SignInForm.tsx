import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInData, signInSchema } from "@/lib/form"
import { FaGoogle } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { handleGoogleSignIn } from "@/firebase/functions/handleGoogleSignIn"
import { useNavigate } from "react-router-dom";

export function SignInForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  })
  

  //Caso de login com formulario preenchido
  function handleSignInForm(data: SignInData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSignInForm)}>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input className="mt-2" id="email" placeholder="exemplo@gmail.com" {...register("email")} />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Senha</Label>
        <Input className="mt-2" id="password" placeholder="Sua senha" type="password" {...register("password")} />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit" className="mt-6 w-full">Entrar</Button>

      <div className="flex items-center gap-6 mt-4">
        <Separator />
        <span className="text-xs text-muted-foreground">OU</span>
        <Separator />
      </div>

      <Button onClick={()=>handleGoogleSignIn(navigate)} variant="outline" className="mt-2 w-full">
        <FaGoogle /> Entrar com o Google
      </Button>
      <Button type="submit" variant="link" className="w-full mt-4">
        Criar conta
      </Button>
    </form>
  )
}