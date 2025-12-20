import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center pt-20'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <div className="card-body p-10">
                    <h2 className='text-3xl font-bold text-center my-6'>Login your account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-bold my-3'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;