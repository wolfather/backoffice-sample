import { useForm } from "react-hook-form";
import { postData } from "../../services/fetch/fetch_data";
import { type LoginResponse, type LoginProps } from "./types";
import { loginFormValidation } from "../../services/loginFormValidation/loginFormValidation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../providers/session";

export function LoginForm() {
    const navigate = useNavigate();
    const userEmail = 'eve.holt@reqres.in';
    const userPass = 'cityslicka';

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginProps>();

    const {setSessionToken} = useContext(SessionContext);

    const onSubmit = handleSubmit(async (data, e) => {
        e?.preventDefault();
        if(loginFormValidation(data)) {
            postData<LoginResponse>({path: 'SUBMIT_LOGIN', body: data})
                .then(res => {
                    console.log(res)
                    if(res.token) {
                        setSessionToken(res.token);
                        navigate('/dashboard');
                    }
                })
        }
    });

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
                        placeholder="password"
                        value={userPass}
                        {...register('password', {required: true})}
                    />
                    {errors.password ? <small>{errors.password?.message}</small> : <></>}
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

