import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SignUpData, useSignUpForm } from "@/lib/form"
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "@/features/auth/services/handleEmailAuth";

export function SignUpForm() {
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useSignUpForm();


  async function onSubmit(data: SignUpData) {
    
    await handleSignUp(data, setError)
    return;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input className="mt-2" id="name" placeholder="Seu nome" {...register("name")} />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mt-4">
          <Label htmlFor="email">E-mail</Label>
          <Input className="mt-2" id="email" placeholder="exemplo@gmail.com" {...register("email")} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mt-4">
          <Label htmlFor="password">Senha</Label>
          <Input className="mt-2" id="password" type="password" placeholder="Sua senha" {...register("password")} />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <div className="mt-4">
          <Label htmlFor="confirmPassword">Confirmar senha</Label>
          <Input className="mt-2" id="confirmPassword" type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <Button type="submit" className="mt-6 w-full">Criar conta</Button>

        {errors.root?.type === "manual" && <p className="text-sm mt-2 text-red-500 items-center flex justify-center">{errors.root.message}</p>}
        {errors.root?.type === "setValueAs" && <p className="text-sm mt-2 text-blue-500 items-center flex justify-center">{errors.root.message}</p>}
      </form>
        <Button onClick={()=>navigate("/signin")} variant="link" className="w-full mt-2">
          Já tem uma conta? Entrar
        </Button>
      </>
  )
}
