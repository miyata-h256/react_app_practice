import React from "react";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="py-5 font-sans font-bold text-5xl text-purple-100 uppercase">Login Form</p>

        <div className="gap-5 border rounded-md border-purple-100 p-2 text-lg shadow-lg shadow-purple-500 text-left text-purple-200 font-bold uppercase">
            <p>Account Info</p>
            <form action="" method="post" className="">
                <label>User ID
                    <input type="email" placeholder="email" className=" input"></input>
                </label>
                <label>Password
                    <input type="password" placeholder="password" className="input"></input>
                </label>
                <div className="flex place-content-around my-5">
                    <button type="submit" className="btn">Sign In</button>
                    <button type="button" className="btn">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;