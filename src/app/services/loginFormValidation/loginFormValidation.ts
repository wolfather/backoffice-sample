import type { LoginProps } from "../../components/LoginForm/types";

export function loginFormValidation({ email, password }: LoginProps): boolean {
    return (
        email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
        password.length > 1
    ) || false
}