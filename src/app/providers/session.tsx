import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface SessionProviderProps {
    children: ReactNode
}

interface SessionCTXProps {
    sessionToken: string
    setSessionToken: Dispatch<SetStateAction<string>>
}

const sessionCtx: SessionCTXProps = {
    sessionToken: '',
    setSessionToken: () => {}
};

export const SessionContext = createContext<SessionCTXProps>(sessionCtx);

export function SessionProvider({ children }: SessionProviderProps) {
    const [sessionToken, setSessionToken] = useState('');

    return (
        <SessionContext.Provider value={{sessionToken, setSessionToken}}>
            {children}
        </SessionContext.Provider>
    );
}