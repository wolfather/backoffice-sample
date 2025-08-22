import { memo, useContext } from "react";
import { SessionContext } from "../../providers/session";
import type { CreateUserResponse } from "../CreateAccountForm/types";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const { userData, setUserData, setSessionToken } = useContext(SessionContext);
    const navigate = useNavigate()

    const clearData = () => {
        setUserData({} as CreateUserResponse);
        setSessionToken('');
        navigate('/', {replace: true});
    };

    return (
        <div className="flex w-full">
            <div>
            {
                userData?.name ? 
                <p>{`${userData.name} is logged`}</p> : 
                <></>
            }
            </div>
            <div>
                <span
                    data-cy='header-logout-button'
                    className="w-30 cursor-pointer bg-gray-400 p-3 text-2 rounded-lg text-white" 
                    role="button" 
                    onClick={() => clearData()}>
                    logout
                </span>
            </div>
        </div>
    );
}

export const Header = memo(HeaderComponent);
