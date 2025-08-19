import dashboardData from "../../ __mock__/users.json"
import { useEffect, useState } from "react"
import { User } from "../components/User/User";

export function Dashboard() {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        setUsers(dashboardData)
    }, []);

    console.log({users})

    return (
        <div>
            Dashboard

            {
                users[0] ? 
                <div>
                    {users.map(user => (
                        <User key={user.id} data={user} />
                    ))}
                </div> : <></>
            }
        </div>
    )
}