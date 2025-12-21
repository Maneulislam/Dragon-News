import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { logIn } = use(AuthContext)



    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;


        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email, password)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error.message);

            })
    }

    return (
        <div className='flex justify-center pt-20'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body p-10">
                    <h2 className='text-3xl font-bold text-center my-6'>Login your account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-bold my-3'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary underline'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;