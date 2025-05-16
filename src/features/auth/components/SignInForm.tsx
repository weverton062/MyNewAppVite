import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SignInData, useSignInForm } from "@/lib/form"
import { FaGoogle } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { handleGoogleSignIn } from "@/features/auth/services/handleGoogleSignIn"
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "@/features/auth/services/handleEmailAuth"

export function SignInForm() {
  const navigate = useNavigate()

  const { 
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useSignInForm();

  async function onSubmit(data: SignInData) {
    await handleSignIn(data, setError)
    return;
    }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        {errors.root?.type === "manual" && <p className="text-sm mt-2 text-red-500 items-center flex justify-center">{errors.root.message}</p>}
        {errors.root?.type === "setValueAs" && <p className="text-sm mt-2 text-blue-500 items-center flex justify-center ">{errors.root.message}</p>}
      </form>
        <div className="flex items-center gap-6 mt-4">
          <Separator />
          <span className="text-xs text-muted-foreground">OU</span>
          <Separator />
        </div>

        <Button onClick={()=>handleGoogleSignIn(navigate)} variant="outline" className="mt-2 w-full">
          <FaGoogle /> Entrar com o Google
        </Button>
        <Button onClick={()=>navigate("/signup")} variant="link" className="w-full mt-4">
          Criar conta
        </Button>
      </>
  )
}