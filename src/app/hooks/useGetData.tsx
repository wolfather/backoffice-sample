import { useContext, useEffect, useState } from "react";
import type { PATH } from "../constants";
import { SessionContext } from "../providers/session";
import { getData } from "../services/fetch/get_data";
import { type APIResponse } from "../components/User/user.entity";

interface GetDataProps {
    path: keyof typeof PATH
    params?: Record<string, string>
}

interface useGetDataResponse<T> {
    loading: boolean
    data: APIResponse<T>
    err?: boolean
    errMessage?: string
}

export function useGetData<T>({path, params}: GetDataProps): useGetDataResponse<T> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<APIResponse<T>>({} as APIResponse<T>);
    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const { sessionToken } = useContext(SessionContext);
    console.log(sessionToken)

    useEffect(() => {
        if(sessionToken !== null) {
            setLoading(true);
            getData<T>({ path, params: params ?? undefined })
                .then(res => {
                    setData(res)
                })
                .catch(e => {
                    setErr(true)
                    setErrMessage(e)
                })
                .finally(() => setLoading(false));
        } else {
            return;
        }
    }, [sessionToken, path, params]);

    return { loading, data, err, errMessage };
}
