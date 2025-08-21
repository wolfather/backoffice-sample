import { type HTMLAttributes } from "react";
import type { UserEntity } from "./user.entity";

interface UserComponentProps extends HTMLAttributes<HTMLDivElement> {
    data: UserEntity
}

export function User({data, ...rest}: UserComponentProps) {
    const fullName = `${data.first_name} ${data.last_name}` || '';
    return (
        <div {...rest} className="flex mb-2 p-3 bg-gray-100">
            {
                data.avatar ? (
                    <img className="" src={data.avatar} alt={fullName} />
                ) : (
                    <></>
                )
            }
            <div className="pl-3 bg-gray-50 w-full align-center">
                <p className="font-semibold text-lg">{fullName}</p>
                <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
            </div>
        </div>
    );
}
