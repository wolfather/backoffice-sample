import { useEffect, useState } from "react";
import type { PATH } from "../constants";
import { fetchData } from "../services/fetch/fetch_data";

interface GetDataProps {
    path: keyof typeof PATH
}

interface useGetDataResponse<T> {
    loading: boolean
    data: T
    err?: boolean
    errMessage?: string
}

export function useGetData<T>({path}: GetDataProps): useGetDataResponse<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>(Object as T);
    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        fetchData<T>(path)
            .then(setData)
            .catch(e => {
                setErr(true)
                setErrMessage(e)
            })
            .finally(() => setLoading(false));
    }, []);

    return { loading, data, err, errMessage };
}