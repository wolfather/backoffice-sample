import { Outlet, useNavigate } from "react-router-dom";
import { User } from "../../components/User/User";
import type { UserEntity } from "../../components/User/user.entity";
import { useGetData } from "../../hooks/useGetData";
import { Paginator } from "../../components/Paginator/Paginator";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import { SessionContext } from "../../providers/session";
import { Header } from "../../components/Header/Header";

function DashboardPage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate()    
    const params = useMemo(() => ({'page': String(currentPage)}), [currentPage]);

    const { sessionToken } = useContext(SessionContext);
    const { data, loading, err, errMessage } = useGetData<UserEntity[]>({
        path: 'USERS', 
        params,
    });

    useEffect(() => {
        if (sessionToken === null) {
            navigate('/', { replace: true });
        }
    }, [sessionToken, navigate]);


    if (loading) {
        return (
            <div data-cy='dashboard-loading'>loading...</div>
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
                <Header />
                <h1 data-cy='dashboard-title'>Dashboard</h1>

                <div>
                    {data?.data.map(user => (
                        <User
                            data-cy='dashboard-user-component'
                            key={user.id}
                            data={user} />
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
}

export const Dashboard = memo(DashboardPage);
