import { PATH } from "../../constants";

interface FetchDataProps {
    path: keyof typeof PATH
    body?: unknown
}
export async function postData<T>({path, body}: FetchDataProps): Promise<T> {
    const url = PATH[path];
    console.log(url)
    const response = await fetch(url, {
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
