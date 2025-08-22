import { useForm } from "react-hook-form";
import { postData } from "../../services/fetch/post_data";
import { type LoginResponse, type LoginProps } from "./types";
import { loginFormValidation } from "../../services/loginFormValidation/loginFormValidation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../providers/session";
import { Input } from "../Input/Input";

export function LoginForm() {
    const navigate = useNavigate();
    const userEmail = 'eve.holt@reqres.in';
    const userPass = 'cityslicka';

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
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

    return (<div data-cy='login-form'>
        <form onSubmit={onSubmit}>
            <fieldset>
                <>
                    <Input
                        data-cy='login-email-field'
                        type="email"
                        value={userEmail}
                        placeholder={"Your e-mail"}
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "invalid pattern"
                            }
                        })}
                    />
                    {errors.email ? <small>{errors.email?.message}</small> : <></>}
                </>
                <>
                    <Input
                        data-cy='login-pass-field'
                        type="password"
                        placeholder={"Your password"}
                        value={userPass}
                        {...register('password', {required: true})}
                    />
                    {errors.password ? <small>{errors.password?.message}</small> : <></>}
                </>
            </fieldset>
            <div className="flex justify-end">
                <input
                    data-cy='login-submit-button'
                    className={`${(!isSubmitting || isDirty) ? 'cursor-pointer' : ''} bg-green-200 p-3 text-2 rounded-lg`}
                    disabled={isSubmitting}
                    type='submit'
                    value={!isSubmitting ? 'Login' : 'Entering'}
                />
            </div>
        </form>
    </div>);
}

