import type { LoginProps } from "../../components/LoginForm/types";

export function loginFormValidation({ email, password }: LoginProps): boolean {
    if(
        email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
        password.length > 1
    ) {
        return true
    }

    return false
}