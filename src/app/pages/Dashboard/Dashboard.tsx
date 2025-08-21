import { Outlet } from "react-router-dom";
import { User } from "../../components/User/User";
import type { UserEntity } from "../../components/User/user.entity";
import { useGetData } from "../../hooks/useGetData";
import { Paginator } from "../../components/Paginator/Paginator";
import { memo, useMemo, useState } from "react";

function DashboardPage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const params = useMemo(() => ({'page': String(currentPage)}), [currentPage]);

    const { data, loading, err, errMessage } = useGetData<UserEntity[]>({
        path: 'USERS', 
        params,
    });


    if (loading) {
        return (
            <div>loading...</div>
        );
    }
    if (err) {
        return (
            <div>{errMessage}</div>
        )
    }

    if (data.data) {
        return (
            <div>
                <h1>Dashboard</h1>

                <div>
                    {data?.data.map(user => (
                        <User key={user.id} data={user} />
                    ))}

                    <Paginator
                        totalRecords={data.total}
                        recordsPerPage={data.per_page}
                        onPageChange={setCurrentPage}
                        currentPage={currentPage}
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

export const Dashboard = memo(DashboardPage);
