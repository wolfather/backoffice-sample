import type { CreateUserProps } from "../../components/createAccountForm/types";

export function createUserValidation(data: CreateUserProps): boolean {
    return (
        data.name.trim() !== '' &&
        data.job.trim() !== ''
    ) || false
}