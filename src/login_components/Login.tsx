import React from "react";

const Login: React.FC = () => {
    return (
        <div className="">
            <p className="py-5 font-sans text-center font-bold text-5xl text-purple-100 uppercase">Login Form</p>

        <div className="container mx-auto m-11 pl-9 gap-5 border rounded-md border-purple-100 w-1/4 text-lg shadow-lg shadow-purple-500 text-left text-purple-200 font-bold uppercase">
            <p>Account Info</p>
            <form action="" method="post">
                <label>User ID</label>
                <input type="email" placeholder="email" className="input"></input>
                <label>Password</label>
                <input type="password" placeholder="password" className="input"></input>
                {/* <button type="submit" className="btn">Sign In</button> */}
                <div className="flex  place-content-start my-5 space-x-8">
                    <button type="submit" className="btn">Sign In</button>
                    <button type="button" className="btn">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;