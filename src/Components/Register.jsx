import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,photo,email, password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" />
                            <label className="fieldset-label">Photo Url</label>
                            <input name="photo" type="text" className="input" placeholder="Photo Url" />
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>If you have an account, please <Link to='/auth/login' className="text-red-600 font-bold">login</Link> here.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;