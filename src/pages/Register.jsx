import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
                <div className="card-body p-10">
                    <h2 className='text-3xl font-bold text-center my-6'>Register your account</h2>
                    <fieldset className="fieldset">

                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />


                        <label className="label mt-2">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            Accept Term & Conditions
                        </label>


                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='font-bold my-3'>Already Have An Account ? <Link to='/auth/login' className='text-secondary underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;