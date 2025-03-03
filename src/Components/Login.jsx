import { Link } from "react-router-dom";


const Login = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <div className="grid grid-cols-2 gap-2">
                            <button className="btn">Google</button>
                            <button className="btn">Git-Hub</button>
                            </div>
                        </fieldset>
                        <p>You don't have an account, please <Link to='/auth/register' className="text-red-600 font-bold">register</Link> here.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;