import { useState, useEffect } from "react";
import type { CreateUserResponse } from "../components/createAccountForm/types";

export function useUserData() {

    const [userData, setUserData] = useState<CreateUserResponse>(() => {
        const userStored = localStorage.getItem('userData');

        return (userStored || {}) as CreateUserResponse;
    });

    useEffect(() => {
        const userDataStored = (localStorage.getItem('userData') || {}) as CreateUserResponse;
        if(userData.createdAt !== userDataStored.createdAt) {
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]);

    return { userData, setUserData };
}
