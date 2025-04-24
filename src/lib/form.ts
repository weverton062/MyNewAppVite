import { z } from "zod";

export const signInSchema = z.object({
    email: z
      .string({ required_error: "O e-mail é obrigatório" })
      .email("Digite um e-mail válido")
      .trim(),
  
    password: z
      .string({ required_error: "A senha é obrigatória" })
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(20, "A senha deve ter no máximo 20 caracteres")
      .trim(),
  });

export const signUpSchema = z.object({
    name: z.string().min(2, "O nome precisa ter no mínimo 2 caracteres"),
    email: z.string().email("Digite um e-mail válido"),
    password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  })
  
export type SignUpData = z.infer<typeof signUpSchema>
export type SignInData = z.infer<typeof signInSchema>
