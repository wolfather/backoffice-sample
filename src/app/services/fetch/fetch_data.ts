import { PATH } from "../../constants";

interface FetchDataProps {
    path: keyof typeof PATH
    body?: unknown
}
export async function postData<T>({path, body}: FetchDataProps): Promise<T> {
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

    return result;
}
