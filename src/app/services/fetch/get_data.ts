import type { APIResponse } from "../../components/User/user.entity";
import { HTTP_DEFAULT_HEADERS, PATH } from "../../constants";
import { parseUrl } from "../parseUrl";

interface FetchDataProps {
    path: keyof typeof PATH
    params?: Record<string, string>
}
export async function getData<T>({path, params}: FetchDataProps): Promise<APIResponse<T>> {
    const url = parseUrl({path, params});

    const response = await fetch(url.toString(),  {
        method: 'GET',
        headers: HTTP_DEFAULT_HEADERS
    });

    const { ok } = response;

    if(!ok) {
        throw new Error()
    }

    const result = await response.json();
    console.log(result)

    return result as APIResponse<T>;
}
