import { Outlet } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export default function Login() {
    return (
        <div>
            Login
            
            <LoginForm />

            <Outlet />
        </div>
    )
}