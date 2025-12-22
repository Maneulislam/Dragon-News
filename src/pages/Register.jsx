import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext);
    console.log(setUser);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = result.user;

                updateUser({ displayName: name, photoURL: photo })
                    .then(result => {
                        console.log(result);
                        setUser({ ...user, displayName: name, photoURL: photo });
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user)
                    })

                navigate('/')





            })
            .catch(error => {
                console.log(error.message);
                setUser(error.message)
            })

    }

    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body p-10">
                    <h2 className='text-3xl font-bold text-center my-6'>Register your account</h2>
                    <fieldset className="fieldset">

                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" value={"123456"} name='password' className="input" placeholder="Password" />


                        <label className="label mt-2">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            Accept Term & Conditions
                        </label>


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='font-bold my-3'>Already Have An Account ? <Link to='/auth/login' className='text-secondary underline'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;