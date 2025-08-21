import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../providers/session";
import { createUserValidation } from "../../services/createUserValidation/createUserValidatation";
import { postData } from "../../services/fetch/post_data";
import { Input } from "../Input/Input";
import type { CreateUserProps, CreateUserResponse } from "./types";

export function CreateAccountForm() {
    const navigate = useNavigate();
    const { sessionToken } = useContext(SessionContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CreateUserProps>();


    const onSubmit = handleSubmit(async (data, e) => {
            e?.preventDefault();
            if(createUserValidation(data)) {
                postData<CreateUserResponse>({path: 'USERS', body: data})
                    .then(res => {
                        console.log(res);
                        // if (res.createdAt) {
                        //     navigate('/dashboard');
                        // }
                    })
            }
        });
    

    if (sessionToken) {
        navigate('/dashboard');
        return;
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <>
                    <Input
                        placeholder={"Your Name"}
                        {...register('name', { required: true })}
                    />
                    {errors.name ? <small>{errors.name?.message}</small> : <></>}
                </>
                <>
                    <Input
                        placeholder={"Your Job"}
                        {...register('job', { required: true })}
                    />
                    {errors.job ? <small>{errors.job?.message}</small> : <></>}
                </>

            </fieldset>
            <div className="flex justify-end">
                <input
                    className={`${!isSubmitting ? 'cursor-pointer' : ''} bg-green-200 p-3 text-2 rounded-lg`}
                    disabled={isSubmitting}
                    type='submit'
                    value='Login'
                />
            </div>
        </form>
    );
}