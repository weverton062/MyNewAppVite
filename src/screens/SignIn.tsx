import { ModeToggle } from "@/components/mode-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form";
import { SignInData, signInSchema } from "@/lib/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInForm } from "@/components/SignInForm"

export function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<SignInData>({
        resolver: zodResolver(signInSchema)
      })
    

    return (
        <main className="h-screen flex w-full">
            <div className="bg-background w-full h-full flex items-center justify-center p-16">
            <h1 className="">
                Seja bem-vindo
            </h1>
            </div>
            <section className="flex bg-background h-full max-w-3xl w-full p-4 items-center justify-center">
                <div className="fixed z-50 top-4 right-4">
                    <ModeToggle/>
                </div>
            <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Entre com sua conta
                        </CardTitle>
                        <CardDescription className="font-semibold">
                            Utilize email e senha ou use os logins sociais
                        </CardDescription>
                    </CardHeader>
                        <CardContent>
                            <SignInForm/>
                        </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground text-center text-sm">Ao entrar na nossa plataforma você concorda com nossos <a  className="text-blue-500 hover:underline" href="https://www.youtube.com/@NIGHTMODDER">Termos de uso</a> e <a className="text-blue-500 hover:underline" href="https://www.youtube.com/@NIGHTMODDER">Política de privacidade</a> </p>
                    </CardFooter>
                </Card>
            </section>
        </main>
    )
}