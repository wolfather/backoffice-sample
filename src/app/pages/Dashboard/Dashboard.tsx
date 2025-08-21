import { Outlet } from "react-router-dom";
import { User } from "../../components/User/User";
import type { UserEntity } from "../../components/User/user.entity";
import { useGetData } from "../../hooks/useGetData";
import { Pagination } from "../../components/Pagination/Pagination";

export function Dashboard() {
    const { data, loading, err, errMessage } = useGetData<UserEntity[]>({path: 'USERS'});

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

    if (data.data) {
        return (
            <div>
                Dashboard
                    <div>
                        {data?.data.map(user => (
                            <User key={user.id} data={user} />
                        ))}

                        <Pagination
                            totalRecords={data.total}
                            recordsPerPage={data.per_page}
                        />
                    </div>

                <Outlet />
            </div>
        )
    }

    return (
        <></>
    );
}