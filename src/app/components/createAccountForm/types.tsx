import { type ReactNode } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";

export interface CreateUserFormComponentProps<T extends Record<string, any>> {
    legend?: string
    isSubmitting: boolean
    handleSubmit: UseFormHandleSubmit<T>
    children: ReactNode
}

export interface CreateUserProps {
    name: string
    job: string
}

export interface CreateUserResponse {
    createdAt : Date|string 
    id: string
    job: string
    name: string
}