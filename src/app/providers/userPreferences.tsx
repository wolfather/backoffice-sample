import { createContext, type ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";

interface UserPreferenceProviderProps {
    children: ReactNode
}

interface UserPreferenceCTXProps {
    userName: string
    // setUserPreferenceToken: Dispatch<SetStateAction<string>>
}

const userPreferenceCtx: UserPreferenceCTXProps = {
    userName: ''
};

export const UserPreferenceContext = createContext<UserPreferenceCTXProps>(userPreferenceCtx);

export function UserPreferenceProvider({ children }: UserPreferenceProviderProps) {
    const { setTheme } = useTheme();

    return (
        <UserPreferenceContext.Provider value={{userName: ''}}>
            <div className="flex gap-3">
                <span 
                    data-cy='theme-light-button'
                    className="w-30 cursor-pointer bg-gray-400 p-3 text-2 rounded-lg text-white" 
                    role="button" 
                    onClick={() => setTheme('light')}>
                    light
                </span>
                <span 
                    data-cy='theme-dark-button'
                    className="w-30 cursor-pointer bg-gray-400 p-3 text-2 rounded-lg text-white" 
                    role="button" 
                    onClick={() => setTheme('dark')}>
                    dark
                </span>
            </div>
            {children}
        </UserPreferenceContext.Provider>
    );
}