import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpData, signUpSchema } from "@/lib/form"

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  })

  function handleSignUp(data: SignUpData) {
    console.log("Cadastro:", data)
    // Aqui você pode fazer o POST pra sua API
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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

      <Button type="submit" variant="link" className="w-full mt-4">
        Já tem uma conta? Entrar
      </Button>
    </form>
  )
}
