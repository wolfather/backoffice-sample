import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { useUserData } from "../hooks/useUserData";
import type { CreateUserResponse } from "../components/CreateAccountForm/types";

interface SessionProviderProps {
    children: ReactNode
}

interface SessionCTXProps {
    sessionToken: string | null
    setSessionToken: Dispatch<SetStateAction<string|null>>
    userData: CreateUserResponse | null
    setUserData: Dispatch<SetStateAction<CreateUserResponse>>
}

const sessionCtx: SessionCTXProps = {
    sessionToken: null,
    setSessionToken: () => {},
    userData: null,
    setUserData: () => {},
};

export const SessionContext = createContext<SessionCTXProps>(sessionCtx);

export function SessionProvider({ children }: SessionProviderProps) {
    const [sessionToken, setSessionToken] = useState<string | null>(null);
    const { userData, setUserData } = useUserData();

    return (
        <SessionContext.Provider value={{
            sessionToken, setSessionToken,
            userData, setUserData,
            }}>
            {children}
        </SessionContext.Provider>
    );
}