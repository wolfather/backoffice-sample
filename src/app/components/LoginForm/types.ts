import { type ReactNode } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";

export interface FormComponentProps<T extends Record<string, any>> {
    legend?: string
    isSubmitting: boolean
    handleSubmit: UseFormHandleSubmit<T>
    children: ReactNode
}

export interface LoginProps {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
}