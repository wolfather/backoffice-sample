import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../../providers/session";
import { createUserValidation } from "../../../services/createUserValidation/createUserValidatation";
import { postData } from "../../../services/fetch/fetch_data";
import type { CreateUserProps } from "../../../components/createUserForm/types";

export function CreateAccount() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('eve.holt@reqres.in');
    const [userJob, setUserJob] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CreateUserProps>();

    const {sessionToken} = useContext(SessionContext);

    const onSubmit = handleSubmit(async (data, e) => {
            e?.preventDefault();
            if(createUserValidation(data)) {
                postData<any>({path: 'USERS', body: data})
                    .then(res => {
                        console.log(res)
                        // if(res.token) {
                        //     setSessionToken(res.token);
                        //     navigate('/dashboard');
                        // }
                    })
            }
        });
    

    if (sessionToken) {
        navigate('/dashboard')
        return;
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <div className="bg-sky-50 p-4 mb-4 border-1 border-sky-300 rounded-lg">
                    <input
                        type="email"
                        className="w-full"
                        placeholder="e-mail"
                        value={userEmail}
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "invalid pattern"
                            }
                        })}
                    />
                    {errors.email ? <small>{errors.email?.message}</small> : <></>}
                </div>

                 <div className="bg-sky-50 p-4 mb-4 border-1 border-sky-300 rounded-lg">
                    <input
                        className="w-full"
                        type="password"
                        placeholder="job"
                        value={userJob}
                        {...register('job', {required: true})}
                    />
                    {errors.job ? <small>{errors.job?.message}</small> : <></>}
                </div>

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