import React from "react";

const Login: React.FC = () => {
    return (
        <div className="flex w-80 h-full flex-col gap-5 border rounded-md border-purple-100 p-2 text-lg shadow-lg shadow-purple-500 text-left text-purple-200 font-bold">
            <p>Account Info</p>
            <form action="" method="post" className="">
                <label className="">User ID
                    <input type="email" placeholder="email" className="input"></input>
                </label>
                <label>Password
                    <input type="password" placeholder="password" className="input"></input>
                </label>
                <div className="flex place-content-around mt-10">
                    <button type="submit" className="btn">Sign In</button>
                    <button type="button" className="btn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Login;