import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "@/features/auth/screens/SignIn";
import { SignUp } from "@/features/auth/screens/SignUp";
import { DashBoard, SideBarDashBoard } from "@/pages/Dashboard";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { PublicRoute } from "@/routes/PublicRoute";
import { NotFoundPage } from "./pages/NotFoud";

export default function App() {
  return (
    <Routes>
      {/* Redireciona a raiz */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Rota coringa para capturar páginas não encontradas */}
      <Route path="*" Component={NotFoundPage} />

      {/* Rotas públicas: signin/signup só acessíveis se NÃO estiver autenticado */}
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Rotas privadas: acessíveis apenas se tiver token */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<SideBarDashBoard children={<DashBoard/>} />} />
      </Route>
    </Routes>
  );
}
