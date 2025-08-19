import { type HTMLAttributes } from "react";
import type { UserEntity } from "./user.entity";

interface UserComponentProps extends HTMLAttributes<HTMLDivElement> {
    data: UserEntity
}
export function User({data, ...rest}: UserComponentProps) {

    return (
        <div {...rest}>
            <p>{data.first_name} {data.last_name}</p>
            <p>{data.email}</p>
        </div>
    );
}
