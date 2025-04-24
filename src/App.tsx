import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "@/screens/SignIn";
import { SignUp } from "@/screens/SignUp";
import { Dashboard } from "@/screens/Dashboard";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { PublicRoute } from "@/routes/PublicRoute";

export default function App() {
  return (
    <Routes>
      {/* Redireciona a raiz */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Rotas públicas: signin/signup só acessíveis se NÃO estiver autenticado */}
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Rotas privadas: acessíveis apenas se tiver token */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
