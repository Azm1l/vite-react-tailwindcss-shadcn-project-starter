import { Navigate } from "react-router-dom";
import { useAuth } from "./auth-provider";

type PrivateRouteProps = {
    children: React.ReactNode; // Menentukan tipe children yang diterima
};
export function PrivateRoute({ children }: PrivateRouteProps) {
    const { auth } = useAuth();

    return auth ? children : <Navigate to="/sign-in" />;
}
