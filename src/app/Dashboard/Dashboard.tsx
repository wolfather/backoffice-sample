import { Outlet } from "react-router-dom";
import { User } from "../components/User/User";
import type { UserEntity } from "../components/User/user.entity";
import { useGetData } from "../hooks/useGetData";

export function Dashboard() {
    const { data, loading, err, errMessage } = useGetData<UserEntity[]>({path: 'GET_USERS'});

    console.log({data})


    if(loading) {
        return (
            <div>loading...</div>
        );
    }
    if(err) {
        return (
            <div>{errMessage}</div>
        )
    }

    return (
        <div>
            Dashboard

            {
                data[0] ? 
                <div>
                    {data.map(user => (
                        <User key={user.id} data={user} />
                    ))}
                </div> : <></>
            }
            <Outlet />
        </div>
    )
}