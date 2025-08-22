import { CreateAccountForm } from "../../components/createAccountForm/createAccountForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SessionContext } from "../../providers/session";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [toggleFormVisible, setToggleFormVisible] = useState<boolean | null>(null);
    const navigate = useNavigate();
    const { sessionToken } = useContext(SessionContext);

    const prevToken = useRef<string>("");

    useEffect(() => {
    if (sessionToken && prevToken.current !== sessionToken) {
        prevToken.current = sessionToken;
        navigate('/dashboard', { replace: true });
    }
    }, [sessionToken, navigate]);

    // useEffect(() => {
    //     if(sessionToken !== null) {
    //         navigate('/dashboard', {replace: true});
    //     }
    // }, [sessionToken, navigate]);

    return (
        <div>
            <h1>Login</h1>

            <div className="flex justify-center gap-3">
                <span
                    className="w-40 cursor-pointer bg-green-400 p-3 text-2 rounded-lg"
                    onClick={() => setToggleFormVisible(true)}
                    role="button">Signin
                </span>
                <span
                    className="w-40 cursor-pointer bg-blue-400 p-3 text-2 rounded-lg text-white"
                    onClick={() => setToggleFormVisible(false)}
                    role="button">Signup
                </span>
            </div>

            {toggleFormVisible !== null ?
                <div className="flex">
                    {
                        toggleFormVisible ? 
                        <LoginForm /> :
                        <CreateAccountForm />
                    }
                </div> : 
                <></>
            }
        </div>
    )
}