import { type ReactNode } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";

export interface CreateUserFormComponentProps<T extends Record<string, any>> {
    legend?: string
    isSubmitting: boolean
    handleSubmit: UseFormHandleSubmit<T>
    children: ReactNode
}

export interface CreateUserProps {
    email: string
    job: string
}

export interface CreateUserResponse {
    token: string
}