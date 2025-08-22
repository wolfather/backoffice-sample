import { PATH } from "../constants";

interface FetchDataProps {
    path: keyof typeof PATH
    params?: Record<string, string>
}

export function parseUrl({path, params}: FetchDataProps): string {
    let url = new URL(PATH[path]);
    let urlParams = new URLSearchParams();

    if(params) {
        Object.entries(params).forEach(([k, v]) => {
            if (v.trim()) {
                urlParams.append(k, v);
            }
        });

        url.search = urlParams.toString();
    }

    return url.toString();
}