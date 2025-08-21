import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export function Input({children, placeholder, ...rest}: InputProps) {

    return (
        <div className="bg-sky-50 p-4 mb-4 border-1 border-sky-300 rounded-lg">
            <input
                {...rest}
                className="w-full bg-transparent"
                placeholder={placeholder || ''}
            />
        </div>
    );
}
