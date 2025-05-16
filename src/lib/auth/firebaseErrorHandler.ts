interface ReturnErrorhandle{
  field: "email" | "password" | "root" | `root.${string}`;
  message: string;
}

export function parseFirebaseAuthError(code: string): ReturnErrorhandle {
    switch (code) {
      case "auth/user-not-found":
        return {
          field: "email",
          message: "Essa conta não existe.",
        };
      case "auth/wrong-password":
        return {
          field: "password",
          message: "Senha incorreta.",
        };
      case "auth/invalid-email":
        return {
          field: "email",
          message: "E-mail inválido.",
        };
      case "auth/too-many-requests":
        return {
          field: "email",
          message: "Muitas tentativas. Tente novamente mais tarde.",
        };
        case "auth/invalid-credential":
          return {
            field: "root",
            message: "As credenciais fornecidas são inválidas.",
          }
        case "auth/email-already-in-use":
          return {
            field: "email",
            message: "Este e-mail já está em uso.",
          }
      default:
        return {
          field: "root",
          message: "Erro inesperado. Tente novamente mais tarde.",
        };
    }
  }