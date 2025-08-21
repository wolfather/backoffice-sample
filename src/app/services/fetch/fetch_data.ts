import dashboardData from "../../../ __mock__/users.json";
import type { LoginProps } from "../../components/LoginForm/types";
import { PATH } from "../../constants";

interface FetchDataProps {
    path: keyof typeof PATH
    body?: unknown
}
export async function fetchData<T>({path, body}: FetchDataProps): Promise<T> {
    const response = await fetch(PATH[path],  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(body),
    });

    const { ok } = response;
    if(!ok) {
        throw new Error()
    }

    const result = await response.json() as T;
    console.log(result)

    return result;
}
