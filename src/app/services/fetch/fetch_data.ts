import dashboardData from "../../../ __mock__/users.json";
import type { PATH } from "../../constants";

export async function fetchData<T>(path: keyof typeof PATH): Promise<T> {
    let data: T = [] as T;

    if(path === 'GET_USERS') {
        data = dashboardData as T;
    }


    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.round(Math.random() * 1500));
    });
}
