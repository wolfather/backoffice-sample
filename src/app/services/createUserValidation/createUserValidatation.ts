import type { CreateUserProps } from "../../components/createUserForm/types";

export function createUserValidation(data: CreateUserProps): boolean {
    return (
        data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
        data.job.trim() !== ''
    ) || false
}