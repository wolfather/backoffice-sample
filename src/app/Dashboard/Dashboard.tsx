import { Outlet } from "react-router-dom";
import { User } from "../components/User/User";
import type { UserEntity } from "../components/User/user.entity";
import { useGetData } from "../hooks/useGetData";
import { Pagination } from "../components/Pagination/Pagination";

export function Dashboard() {
    const { data, loading, err, errMessage } = useGetData<UserEntity[]>({path: 'GET_USERS'});

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
                !loading && data.length ? 
                <div>
                    {data.map(user => (
                        <User key={user.id} data={user} />
                    ))}

                    <Pagination totalRecords={30} recordsPerPage={5} />
                </div> : <></>
            }
            <Outlet />
        </div>
    )
}